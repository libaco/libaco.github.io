---
id: api
title: API
sidebar_label: API
slug: /api
---

## Introduction

It would be very helpful to read the corresponding API implementation in the source code simultaneously when you are reading the following API description of libaco since the source code is pretty clear and easy to understand. And it is also recommended to read all the [tutorials](tutorials) before reading the API document.

It is strongly recommended to read the [best practice](best-practice) part before starting to write the real application of libaco (in addition to describing how to truly release libaco's extreme performance in your application, there is also a notice about the programming of libaco).

Note: The version control of libaco follows the spec: [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html). So the API in the following list have the compatibility guarantee. (Please note that there is no such guarantee for the API no in the list.)

## Functions

### aco_thread_init

```c
typedef void (*aco_cofuncp_t)(void);
void aco_thread_init(aco_cofuncp_t last_word_co_fp);
```

Initializes the libaco environment in the current thread.

It will store the current control words of FPU and MXCSR into a thread-local global variable.

* If the global macro `ACO_CONFIG_SHARE_FPU_MXCSR_ENV` is not defined, the saved control words would be used as a reference value to set up the control words of the new co's FPU and MXCSR (in `aco_create`) and each co would maintain its own copy of FPU and MXCSR control words during later context switching.
* If the global macro `ACO_CONFIG_SHARE_FPU_MXCSR_ENV` is defined, then all the co shares the same control words of FPU and MXCSR. You may refer the [build and test](build-and-test) part of this document for more information about this.

And as it said in the `test_aco_tutorial_5.c` of the [tutorials](tutorials) part, when the 1st argument `last_word_co_fp` is not NULL then the function pointed by `last_word_co_fp` will substitute the default protector to do some "last words" stuff about the offending co before the process is aborted. In such last word function, you could use `aco_get_co` to get the pointer of the offending co. For more information, you may read `test_aco_tutorial_5.c`.

### aco_share_stack_new

```c
aco_share_stack_t* aco_share_stack_new(size_t sz);
```

Equal to `aco_share_stack_new2(sz, 1)`.

### aco_share_stack_new2

```c
aco_share_stack_t* aco_share_stack_new2(size_t sz, char guard_page_enabled);
```

Creates a new share stack with a advisory memory size of `sz` in bytes and may have a guard page (read-only) for the detection of stack overflow which is depending on the 2nd argument `guard_page_enabled`.

To use the default size value (2MB) if the 1st argument `sz` equals 0. After some computation of alignment and reserve, this function will ensure the final valid length of the share stack in return:

* `final_valid_sz >= 4096`
* `final_valid_sz >= sz`
* `final_valid_sz % page_size == 0 if the guard_page_enabled != 0`

And as close to the value of `sz` as possible.

When the value of the 2nd argument `guard_page_enabled` is 1, the share stack in return would have one read-only guard page for the detection of stack overflow while a value 0 of `guard_page_enabled` means without such guard page.

This function will always return a valid share stack.

### aco_share_stack_destroy

```c
void aco_share_stack_destroy(aco_share_stack_t* sstk);
```

Destory the share stack `sstk`.

Be sure that all the co whose share stack is `sstk` is already destroyed when you destroy the `sstk`.

### aco_create

```c
typedef void (*aco_cofuncp_t)(void);
aco_t* aco_create(aco_t* main_co，aco_share_stack_t* share_stack, 
        size_t save_stack_sz, aco_cofuncp_t co_fp, void* arg);
```

Create a new co.

If it is a main_co you want to create, just call: `aco_create(NULL, NULL, 0, NULL, NULL)`. Main co is a special standalone coroutine whose share stack is the default thread stack. In the thread, main co is the coroutine who should be created and started to execute before all the other non-main coroutine does.

Otherwise it is a non-main co you want to create:

* The 1st argument `main_co` is the main co the co will `aco_yield` to in the future context switching. `main_co` must not be NULL;
* The 2nd argument `share_stack` is the address of a share stack which the non-main co you want to create will use as its executing stack in the future. `share_stack` must not be NULL;
* The 3rd argument `save_stack_sz` specifies the init size of the private save stack of this co. The unit is in bytes. A value of 0 means to use the default size 64 bytes. Since automatical resizing would happen when the private save stack is not big enough to hold the executing stack of the co when it has to yield the share stack it is occupying to another co, you usually should not worry about the value of `sz` at all. But it will bring some performance impact to the memory allocator when a huge amount (say 10,000,000) of the co resizes their private save stack continuously, so it is very wise and highly recommended to set the `save_stack_sz` with a value equal to the maximum value of `co->save_stack.max_cpsz` when the co is running (You may refer to the [best practice](best-practice) part of this document for more information about such optimization);
* The 4th argument `co_fp` is the entry function pointer of the co. `co_fp` must not be NULL;
* The last argument `arg` is a pointer value and will set to `co->arg` of the co to create. It could be used as a input argument for the co.

This function will always return a valid co. And we name the state of the co in return as "init" if it is a non-main co you want to create.

### aco_resume

```c
void aco_resume(aco_t* co);
```

Yield from the caller main co and to start or continue the execution of `co`.

The caller of this function must be a main co and must be `co->main_co`. And the 1st argument `co` must be a non-main co.

The first time you resume a `co`, it starts running the function pointing by `co->fp`. If `co` has already been yielded, `aco_resume` restarts it and continues the execution.

After the call of `aco_resume`, we name the state of the caller — main co as "yielded".

### aco_yield

```c
void aco_yield();
```

Yield the execution of `co` and resume `co->main_co`. The caller of this function must be a non-main co. And `co->main_co` must not be NULL.

After the call of `aco_yield`, we name the state of the caller — `co` as "yielded".

### aco_get_co

```c
aco_t* aco_get_co();
```

Return the pointer of the current non-main co. The caller of this function must be a non-main co.

### aco_get_arg

```c
void* aco_get_arg();
```

Equal to `(aco_get_co()->arg)`. And also, the caller of this function must be a non-main co.

### aco_exit

```c
void aco_exit();
```

In addition do the same as `aco_yield()`, `aco_exit()` also set `co->is_end` to 1 thus to mark the `co` at the status of "end".

### aco_destroy

```c
void aco_destroy(aco_t* co);
```

Destroy the `co`. The argument `co` must not be NULL. The private save stack would also been destroyed if the `co` is a non-main co.

## Macros

### Version

```c
#define ACO_VERSION_MAJOR 1
#define ACO_VERSION_MINOR 2
#define ACO_VERSION_PATCH 4
```

These 3 macros are defined in the header `aco.h` and the value of them follows the spec: [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html).

### aco_assert_override.h

```c
// provide the compiler with branch prediction information
#define likely(x)               aco_likely(x)
#define unlikely(x)             aco_unlikely(x)

// override the default `assert` for convenience when coding
#define assert(EX)              aco_assert(EX)

// equal to `assert((ptr) != NULL)`
#define assertptr(ptr)          aco_assertptr(ptr)

// assert the successful return of memory allocation
#define assertalloc_bool(b)     aco_assertalloc_bool(b)
#define assertalloc_ptr(ptr)    aco_assertalloc_ptr(ptr)
```

You could choose to include the header `"aco_assert_override.h"` to override the default C [assert](http://man7.org/linux/man-pages/man3/assert.3.html) in the libaco application like [test_aco_synopsis.c](https://github.com/hnes/libaco/blob/master/test_aco_synopsis.c) does (this header including should be at the last of the include directives list in the source file because the C [assert](http://man7.org/linux/man-pages/man3/assert.3.html) is a C macro definition too) and define the 5 other macros in the above. Please do not include this header in the application source file if you want to use the default C [assert](http://man7.org/linux/man-pages/man3/assert.3.html).

For more details you may refer to the source file [aco_assert_override.h](https://github.com/hnes/libaco/blob/master/aco_assert_override.h).