---
id: tutorials
title: Tutorials
sidebar_label: Tutorials
slug: /tutorials
---

The [test_aco_tutorial_0.c](https://github.com/hnes/libaco/blob/master/test_aco_tutorial_0.c) in the [repository](https://github.com/hnes/libaco) shows the basic usage of libaco. There is only one main co and one standalone non-main co in this tutorial. The comments in the source code is also very helpful.

The [test_aco_tutorial_1.c](https://github.com/hnes/libaco/blob/master/test_aco_tutorial_1.c) shows the usage of some statistics of non-main co. The data structure of `aco_t` is very clear and is defined in `aco.h`.

There are one main co, one standalone non-main co and two non-main co (pointing to the same share stack) in [test_aco_tutorial_2.c](https://github.com/hnes/libaco/blob/master/test_aco_tutorial_2.c).

The [test_aco_tutorial_3.c](https://github.com/hnes/libaco/blob/master/test_aco_tutorial_3.c) shows how to use libaco in a multithreaded process. Basically, one instance of libaco is designed only to work inside one certain thread to gain the maximum performance of context switching between coroutines. If you want to use libaco in multithreaded environment, simply to create one instance of libaco in each of the threads. There is no data-sharing across threads inside the libaco, and you have to deal with the data competition among multiple threads yourself (like what `gl_race_aco_yield_ct` does in this tutorial).

One of the rules in libaco is to call `aco_exit()` to terminate the execution of the non-main co instead of the default direct C style `return`, otherwise libaco will treat such behaviour as illegal and trigger the default protector whose job is to log the error information about the offending co to stderr and abort the process immediately. The [test_aco_tutorial_4.c](https://github.com/hnes/libaco/blob/master/test_aco_tutorial_4.c) shows such "offending co" situation.

You could also define your own protector to substitute the default one (to do some customized "last words" stuff). But no matter in what case, the process will be aborted after the protector was executed. The [test_aco_tutorial_5.c](https://github.com/hnes/libaco/blob/master/test_aco_tutorial_5.c) shows how to define the customized last word function.

The last example is a simple coroutine scheduler in [test_aco_tutorial_6.c](https://github.com/hnes/libaco/blob/master/test_aco_tutorial_6.c).