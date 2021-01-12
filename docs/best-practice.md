---
id: best-practice
title: Best practice
sidebar_label: Best practice
slug: /best-practice
---

In summary, if you want to gain the ultra performance of libaco, just keep the stack usage of the non-standalone non-main co at the point of calling `aco_yield` as small as possible. And be very careful if you want to pass the address of a local variable from one co to another co since the local variable is usually on the **share** stack. Allocating this kind of variables from the heap is always the wiser choice.

In detail, there are 5 tips:

```
       co_fp 
       /  \
      /    \  
    f1     f2
   /  \    / \
  /    \  f4  \
yield  f3     f5
```

1. The stack usage of main co has no direct influence to the performance of context switching between coroutines (since it has a standalone execution stack);
2. The stack usage of standalone non-main co has no direct influence to the performance of context switching between coroutines. But a huge amount of standalone non-main co would cost too much of virtual memory (due to the standalone stack), so it is not recommended to create huge amount of standalone non-main co in one thread;
3. The stack usage of non-standalone (share stack with other coroutines) non-main co when it is been yielded (i.e. call `aco_yield` to yield back to main co) has a big impact to the performance of context switching between coroutines, as already indicated by the benchmark results. In the diagram above, the stack usage of function f2, f3, f4 and f5 has no direct influence over the context switching performance since there are no `aco_yield` when they are executing, whereas the stack usage of co_fp and f1 dominates the value of `co->save_stack.max_cpsz` and has a big influence over the context switching performance.

The key to keeping the stack usage of a function as low as possible is to allocate the local variables (especially the big ones) on the heap and manage their lifecycle manually instead of allocating them on the stack by default. The `-fstack-usage` option of gcc is very helpful about this.

```c
int* gl_ptr;

void inc_p(int* p){ (*p)++; }

void co_fp0() {
    int ct = 0;
    gl_ptr = &ct; // line 7
    aco_yield();
    check(ct);
    int* ptr = &ct;
    inc_p(ptr);   // line 11
    aco_exit();
}

void co_fp1() {
    do_sth(gl_ptr); // line 16
    aco_exit();
}
```

4. In the above code snippet, we assume that co_fp0 & co_fp1 shares the same share stack (they are both non-main co) and the running sequence of them is "co_fp0 -> co_fp1 -> co_fp0". Since they are sharing the same stack, the address holding in `gl_ptr` in co_fp1 (line 16) has totally different semantics with the `gl_ptr` in line 7 of co_fp0, and that kind of code would probably corrupt the execution stack of co_fp1. But the line 11 is fine because variable `ct` and function `inc_p` are in the same coroutine context. Allocating that kind of variables (need to share with other coroutines) on the heap would simply solve such problems:

```c
int* gl_ptr;

void inc_p(int* p){ (*p)++; }

void co_fp0() {
    int* ct_ptr = malloc(sizeof(int));
    assert(ct_ptr != NULL);
    *ct_ptr = 0;
    gl_ptr = ct_ptr;
    aco_yield();
    check(*ct_ptr);
    int* ptr = ct_ptr;
    inc_p(ptr);
    free(ct_ptr);
    gl_ptr = NULL;
    aco_exit();
}

void co_fp1() {
    do_sth(gl_ptr);
    aco_exit();
}
```