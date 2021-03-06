---
id: benchmark
title: Benchmark
sidebar_label: Benchmark
slug: /benchmark
---

Date: Sat Jun 30 UTC 2018.

Machine: [c5d.large on AWS](https://aws.amazon.com/cn/blogs/aws/now-available-compute-intensive-c5-instances-for-amazon-ec2/).

OS: RHEL-7.5 (Red Hat Enterprise Linux 7.5).

Here is a brief summary of the benchmark part:

* One time of the context switching between coroutines takes only about **10.29 ns** (in the case of standalone stack, where x87 and mxcsr control words are shared between coroutines);
* One time of the context switching between coroutines takes only about **10.38 ns** (in the case of standalone stack, where each coroutine maintains their own x87 and mxcsr control words);
* It is extremely memory efficient: it only costs **2.8 GB** of physical memory to run **10,000,000** coroutines simultaneously (with tcmalloc, where each coroutine has a **120 bytes** copy-stack size configuration).

```
$ LD_PRELOAD=/usr/lib64/libtcmalloc_minimal.so.4 ./test_aco_benchmark..no_valgrind.shareFPUenv

+build:x86_64
+build:-DACO_CONFIG_SHARE_FPU_MXCSR_ENV
+build:share fpu & mxcsr control words between coroutines
+build:undefined ACO_USE_VALGRIND
+build:without valgrind memcheck friendly support

sizeof(aco_t)=152:


comment                                             task_amount  all_time_cost   ns_per_op          speed

aco_create/init_save_stk_sz=64B                              1     0.000 s      230.00 ns/op    4347824.79 op/s
aco_resume/co_amount=1/copy_stack_size=0B             20000000     0.412 s       20.59 ns/op   48576413.55 op/s
  -> acosw                                            40000000     0.412 s       10.29 ns/op   97152827.10 op/s
aco_destroy                                                  1     0.000 s      650.00 ns/op    1538461.66 op/s

aco_create/init_save_stk_sz=64B                              1     0.000 s      200.00 ns/op    5000001.72 op/s
aco_resume/co_amount=1/copy_stack_size=0B             20000000     0.412 s       20.61 ns/op   48525164.25 op/s
  -> acosw                                            40000000     0.412 s       10.30 ns/op   97050328.50 op/s
aco_destroy                                                  1     0.000 s      666.00 ns/op    1501501.49 op/s

aco_create/init_save_stk_sz=64B                        2000000     0.131 s       65.50 ns/op   15266771.53 op/s
aco_resume/co_amount=2000000/copy_stack_size=8B       20000000     0.666 s       33.29 ns/op   30043022.64 op/s
aco_destroy                                            2000000     0.066 s       32.87 ns/op   30425152.25 op/s

aco_create/init_save_stk_sz=64B                        2000000     0.130 s       65.22 ns/op   15332218.24 op/s
aco_resume/co_amount=2000000/copy_stack_size=24B      20000000     0.675 s       33.75 ns/op   29630018.73 op/s
aco_destroy                                            2000000     0.067 s       33.45 ns/op   29898311.36 op/s

aco_create/init_save_stk_sz=64B                        2000000     0.131 s       65.42 ns/op   15286937.97 op/s
aco_resume/co_amount=2000000/copy_stack_size=40B      20000000     0.669 s       33.45 ns/op   29891277.59 op/s
aco_destroy                                            2000000     0.080 s       39.87 ns/op   25084242.29 op/s

aco_create/init_save_stk_sz=64B                        2000000     0.224 s      111.86 ns/op    8940010.49 op/s
aco_resume/co_amount=2000000/copy_stack_size=56B      20000000     0.678 s       33.88 ns/op   29515473.53 op/s
aco_destroy                                            2000000     0.067 s       33.42 ns/op   29922412.68 op/s

aco_create/init_save_stk_sz=64B                        2000000     0.131 s       65.74 ns/op   15211896.70 op/s
aco_resume/co_amount=2000000/copy_stack_size=120B     20000000     0.769 s       38.45 ns/op   26010724.94 op/s
aco_destroy                                            2000000     0.088 s       44.11 ns/op   22669240.25 op/s

aco_create/init_save_stk_sz=64B                       10000000     1.240 s      123.97 ns/op    8066542.54 op/s
aco_resume/co_amount=10000000/copy_stack_size=8B      40000000     1.327 s       33.17 ns/op   30143409.55 op/s
aco_destroy                                           10000000     0.328 s       32.82 ns/op   30467658.05 op/s

aco_create/init_save_stk_sz=64B                       10000000     0.659 s       65.94 ns/op   15165717.02 op/s
aco_resume/co_amount=10000000/copy_stack_size=24B     40000000     1.345 s       33.63 ns/op   29737708.53 op/s
aco_destroy                                           10000000     0.337 s       33.71 ns/op   29666697.09 op/s

aco_create/init_save_stk_sz=64B                       10000000     0.654 s       65.38 ns/op   15296191.35 op/s
aco_resume/co_amount=10000000/copy_stack_size=40B     40000000     1.348 s       33.71 ns/op   29663992.77 op/s
aco_destroy                                           10000000     0.336 s       33.56 ns/op   29794574.96 op/s

aco_create/init_save_stk_sz=64B                       10000000     0.653 s       65.29 ns/op   15316087.09 op/s
aco_resume/co_amount=10000000/copy_stack_size=56B     40000000     1.384 s       34.60 ns/op   28902221.24 op/s
aco_destroy                                           10000000     0.337 s       33.73 ns/op   29643682.93 op/s

aco_create/init_save_stk_sz=64B                       10000000     0.652 s       65.19 ns/op   15340872.40 op/s
aco_resume/co_amount=10000000/copy_stack_size=120B    40000000     1.565 s       39.11 ns/op   25566255.73 op/s
aco_destroy                                           10000000     0.443 s       44.30 ns/op   22574242.55 op/s

aco_create/init_save_stk_sz=64B                        2000000     0.131 s       65.61 ns/op   15241722.94 op/s
aco_resume/co_amount=2000000/copy_stack_size=136B     20000000     0.947 s       47.36 ns/op   21114212.05 op/s
aco_destroy                                            2000000     0.125 s       62.35 ns/op   16039466.45 op/s

aco_create/init_save_stk_sz=64B                        2000000     0.131 s       65.71 ns/op   15218784.72 op/s
aco_resume/co_amount=2000000/copy_stack_size=136B     20000000     0.948 s       47.39 ns/op   21101216.29 op/s
aco_destroy                                            2000000     0.125 s       62.73 ns/op   15941559.26 op/s

aco_create/init_save_stk_sz=64B                        2000000     0.131 s       65.49 ns/op   15270258.18 op/s
aco_resume/co_amount=2000000/copy_stack_size=152B     20000000     1.069 s       53.44 ns/op   18714275.17 op/s
aco_destroy                                            2000000     0.122 s       61.05 ns/op   16378678.85 op/s

aco_create/init_save_stk_sz=64B                        2000000     0.132 s       65.91 ns/op   15171336.62 op/s
aco_resume/co_amount=2000000/copy_stack_size=232B     20000000     1.190 s       59.48 ns/op   16813230.99 op/s
aco_destroy                                            2000000     0.123 s       61.26 ns/op   16324298.25 op/s

aco_create/init_save_stk_sz=64B                        2000000     0.131 s       65.68 ns/op   15224361.30 op/s
aco_resume/co_amount=2000000/copy_stack_size=488B     20000000     1.828 s       91.40 ns/op   10941133.56 op/s
aco_destroy                                            2000000     0.145 s       72.56 ns/op   13781182.82 op/s

aco_create/init_save_stk_sz=64B                        2000000     0.132 s       65.80 ns/op   15197461.34 op/s
aco_resume/co_amount=2000000/copy_stack_size=488B     20000000     1.829 s       91.47 ns/op   10932139.32 op/s
aco_destroy                                            2000000     0.149 s       74.70 ns/op   13387258.82 op/s

aco_create/init_save_stk_sz=64B                        1000000     0.067 s       66.63 ns/op   15007426.35 op/s
aco_resume/co_amount=1000000/copy_stack_size=1000B    20000000     4.224 s      211.20 ns/op    4734744.76 op/s
aco_destroy                                            1000000     0.093 s       93.36 ns/op   10711651.49 op/s

aco_create/init_save_stk_sz=64B                        1000000     0.066 s       66.28 ns/op   15086953.73 op/s
aco_resume/co_amount=1000000/copy_stack_size=1000B    20000000     4.222 s      211.12 ns/op    4736537.93 op/s
aco_destroy                                            1000000     0.094 s       94.09 ns/op   10627664.78 op/s

aco_create/init_save_stk_sz=64B                         100000     0.007 s       70.72 ns/op   14139923.59 op/s
aco_resume/co_amount=100000/copy_stack_size=1000B     20000000     4.191 s      209.56 ns/op    4771909.70 op/s
aco_destroy                                             100000     0.010 s      101.21 ns/op    9880747.28 op/s

aco_create/init_save_stk_sz=64B                         100000     0.007 s       66.62 ns/op   15010433.00 op/s
aco_resume/co_amount=100000/copy_stack_size=2024B     20000000     7.002 s      350.11 ns/op    2856228.03 op/s
aco_destroy                                             100000     0.016 s      159.69 ns/op    6262129.35 op/s

aco_create/init_save_stk_sz=64B                         100000     0.007 s       65.76 ns/op   15205994.08 op/s
aco_resume/co_amount=100000/copy_stack_size=4072B     20000000    11.918 s      595.90 ns/op    1678127.54 op/s
aco_destroy                                             100000     0.019 s      186.32 ns/op    5367189.85 op/s

aco_create/init_save_stk_sz=64B                         100000     0.006 s       63.03 ns/op   15865531.37 op/s
aco_resume/co_amount=100000/copy_stack_size=7992B     20000000    21.808 s     1090.42 ns/op     917079.11 op/s
aco_destroy                                             100000     0.038 s      378.33 ns/op    2643225.42 op/s
```

```
$ LD_PRELOAD=/usr/lib64/libtcmalloc_minimal.so.4 ./test_aco_benchmark..no_valgrind.standaloneFPUenv

+build:x86_64
+build:undefined ACO_CONFIG_SHARE_FPU_MXCSR_ENV
+build:each coroutine maintain each own fpu & mxcsr control words
+build:undefined ACO_USE_VALGRIND
+build:without valgrind memcheck friendly support

sizeof(aco_t)=160:


comment                                             task_amount  all_time_cost   ns_per_op          speed

aco_create/init_save_stk_sz=64B                              1     0.000 s      273.00 ns/op    3663004.27 op/s
aco_resume/co_amount=1/copy_stack_size=0B             20000000     0.415 s       20.76 ns/op   48173877.75 op/s
  -> acosw                                            40000000     0.415 s       10.38 ns/op   96347755.51 op/s
aco_destroy                                                  1     0.000 s      381.00 ns/op    2624672.26 op/s

aco_create/init_save_stk_sz=64B                              1     0.000 s      212.00 ns/op    4716980.43 op/s
aco_resume/co_amount=1/copy_stack_size=0B             20000000     0.415 s       20.75 ns/op   48185455.26 op/s
  -> acosw                                            40000000     0.415 s       10.38 ns/op   96370910.51 op/s
aco_destroy                                                  1     0.000 s      174.00 ns/op    5747123.38 op/s

aco_create/init_save_stk_sz=64B                        2000000     0.131 s       65.63 ns/op   15237386.02 op/s
aco_resume/co_amount=2000000/copy_stack_size=8B       20000000     0.664 s       33.20 ns/op   30119155.82 op/s
aco_destroy                                            2000000     0.065 s       32.67 ns/op   30604542.55 op/s

aco_create/init_save_stk_sz=64B                        2000000     0.131 s       65.33 ns/op   15305975.29 op/s
aco_resume/co_amount=2000000/copy_stack_size=24B      20000000     0.675 s       33.74 ns/op   29638360.61 op/s
aco_destroy                                            2000000     0.067 s       33.31 ns/op   30016633.42 op/s

aco_create/init_save_stk_sz=64B                        2000000     0.131 s       65.61 ns/op   15241767.78 op/s
aco_resume/co_amount=2000000/copy_stack_size=40B      20000000     0.678 s       33.88 ns/op   29518648.08 op/s
aco_destroy                                            2000000     0.079 s       39.74 ns/op   25163018.30 op/s

aco_create/init_save_stk_sz=64B                        2000000     0.221 s      110.73 ns/op    9030660.30 op/s
aco_resume/co_amount=2000000/copy_stack_size=56B      20000000     0.684 s       34.18 ns/op   29253416.65 op/s
aco_destroy                                            2000000     0.067 s       33.40 ns/op   29938840.64 op/s

aco_create/init_save_stk_sz=64B                        2000000     0.131 s       65.60 ns/op   15244077.65 op/s
aco_resume/co_amount=2000000/copy_stack_size=120B     20000000     0.769 s       38.43 ns/op   26021228.41 op/s
aco_destroy                                            2000000     0.087 s       43.74 ns/op   22863987.42 op/s

aco_create/init_save_stk_sz=64B                       10000000     1.251 s      125.08 ns/op    7994958.59 op/s
aco_resume/co_amount=10000000/copy_stack_size=8B      40000000     1.327 s       33.19 ns/op   30133654.80 op/s
aco_destroy                                           10000000     0.329 s       32.85 ns/op   30439787.32 op/s

aco_create/init_save_stk_sz=64B                       10000000     0.674 s       67.37 ns/op   14843796.57 op/s
aco_resume/co_amount=10000000/copy_stack_size=24B     40000000     1.354 s       33.84 ns/op   29548523.05 op/s
aco_destroy                                           10000000     0.339 s       33.90 ns/op   29494634.83 op/s

aco_create/init_save_stk_sz=64B                       10000000     0.672 s       67.19 ns/op   14882262.88 op/s
aco_resume/co_amount=10000000/copy_stack_size=40B     40000000     1.361 s       34.02 ns/op   29393520.19 op/s
aco_destroy                                           10000000     0.338 s       33.77 ns/op   29609577.59 op/s

aco_create/init_save_stk_sz=64B                       10000000     0.673 s       67.31 ns/op   14857716.02 op/s
aco_resume/co_amount=10000000/copy_stack_size=56B     40000000     1.371 s       34.27 ns/op   29181897.80 op/s
aco_destroy                                           10000000     0.339 s       33.85 ns/op   29540633.63 op/s

aco_create/init_save_stk_sz=64B                       10000000     0.672 s       67.24 ns/op   14873017.10 op/s
aco_resume/co_amount=10000000/copy_stack_size=120B    40000000     1.548 s       38.71 ns/op   25835542.17 op/s
aco_destroy                                           10000000     0.446 s       44.61 ns/op   22415961.64 op/s

aco_create/init_save_stk_sz=64B                        2000000     0.132 s       66.01 ns/op   15148290.52 op/s
aco_resume/co_amount=2000000/copy_stack_size=136B     20000000     0.944 s       47.22 ns/op   21177946.19 op/s
aco_destroy                                            2000000     0.124 s       61.99 ns/op   16132721.97 op/s

aco_create/init_save_stk_sz=64B                        2000000     0.133 s       66.36 ns/op   15068860.85 op/s
aco_resume/co_amount=2000000/copy_stack_size=136B     20000000     0.944 s       47.20 ns/op   21187541.38 op/s
aco_destroy                                            2000000     0.124 s       62.21 ns/op   16073322.25 op/s

aco_create/init_save_stk_sz=64B                        2000000     0.131 s       65.62 ns/op   15238955.93 op/s
aco_resume/co_amount=2000000/copy_stack_size=152B     20000000     1.072 s       53.61 ns/op   18652789.74 op/s
aco_destroy                                            2000000     0.121 s       60.42 ns/op   16551368.04 op/s

aco_create/init_save_stk_sz=64B                        2000000     0.132 s       66.08 ns/op   15132547.65 op/s
aco_resume/co_amount=2000000/copy_stack_size=232B     20000000     1.198 s       59.88 ns/op   16699389.91 op/s
aco_destroy                                            2000000     0.121 s       60.71 ns/op   16471465.52 op/s

aco_create/init_save_stk_sz=64B                        2000000     0.133 s       66.50 ns/op   15036985.95 op/s
aco_resume/co_amount=2000000/copy_stack_size=488B     20000000     1.853 s       92.63 ns/op   10796126.04 op/s
aco_destroy                                            2000000     0.146 s       72.87 ns/op   13723559.36 op/s

aco_create/init_save_stk_sz=64B                        2000000     0.132 s       66.14 ns/op   15118324.13 op/s
aco_resume/co_amount=2000000/copy_stack_size=488B     20000000     1.855 s       92.75 ns/op   10781572.22 op/s
aco_destroy                                            2000000     0.152 s       75.79 ns/op   13194130.51 op/s

aco_create/init_save_stk_sz=64B                        1000000     0.067 s       66.97 ns/op   14931921.56 op/s
aco_resume/co_amount=1000000/copy_stack_size=1000B    20000000     4.218 s      210.90 ns/op    4741536.66 op/s
aco_destroy                                            1000000     0.093 s       93.16 ns/op   10734691.98 op/s

aco_create/init_save_stk_sz=64B                        1000000     0.066 s       66.49 ns/op   15039274.31 op/s
aco_resume/co_amount=1000000/copy_stack_size=1000B    20000000     4.216 s      210.81 ns/op    4743543.53 op/s
aco_destroy                                            1000000     0.094 s       93.97 ns/op   10641539.58 op/s

aco_create/init_save_stk_sz=64B                         100000     0.007 s       70.95 ns/op   14094724.73 op/s
aco_resume/co_amount=100000/copy_stack_size=1000B     20000000     4.190 s      209.52 ns/op    4772746.50 op/s
aco_destroy                                             100000     0.010 s      100.99 ns/op    9902271.51 op/s

aco_create/init_save_stk_sz=64B                         100000     0.007 s       66.49 ns/op   15040038.84 op/s
aco_resume/co_amount=100000/copy_stack_size=2024B     20000000     7.028 s      351.38 ns/op    2845942.55 op/s
aco_destroy                                             100000     0.016 s      159.15 ns/op    6283444.42 op/s

aco_create/init_save_stk_sz=64B                         100000     0.007 s       65.73 ns/op   15214482.36 op/s
aco_resume/co_amount=100000/copy_stack_size=4072B     20000000    11.879 s      593.95 ns/op    1683636.60 op/s
aco_destroy                                             100000     0.018 s      184.23 ns/op    5428119.00 op/s

aco_create/init_save_stk_sz=64B                         100000     0.006 s       63.41 ns/op   15771072.16 op/s
aco_resume/co_amount=100000/copy_stack_size=7992B     20000000    21.808 s     1090.42 ns/op     917081.56 op/s
aco_destroy                                             100000     0.038 s      376.78 ns/op    2654073.13 op/s
```