---
id: build-and-test
title: Build and test
sidebar_label: Build and test
slug: /build-and-test
---

## Build library
_**Note**: Please use [releases](https://github.com/hnes/libaco/releases) instead of the `master` branch to build the final binary._

Libaco is meant to be copied into to your project and therefore no build tools is available to create a shared or static library.

## Test
Want to make sure that the library is working on your system? We got you covered. Follow the steps below.

### Build
To build the test suites of libaco

```bash
mkdir output
bash make.sh
```

There is also some detailed options in make.sh. Read more about the [build flags here.](#build-flags)

```bash
$bash make.sh -h
Usage: make.sh [-o <no-m32|no-valgrind>] [-h]

Example:
    # default build
    bash make.sh
    # build without the i386 binary output
    bash make.sh -o no-m32
    # build without the valgrind supported binary output
    bash make.sh -o no-valgrind
    # build without the valgrind supported and i386 binary output
    bash make.sh -o no-valgrind -o no-m32
```

In short, using `-o no-valgrind ` if you have no valgrind headers installed, `-o no-m32` if you have no 32-bit gcc development tools installed on a AMD64 host.

On MacOS, you need to [replace](https://apple.stackexchange.com/questions/69223/how-to-replace-mac-os-x-utilities-with-gnu-core-utilities) the default `sed` and `grep` commands of MacOS with the GNU `sed` and `grep` to run `make.sh` and `test.sh` (such requirement would be removed in the future):

```bash
$ brew install grep --with-default-names
$ brew install gnu-sed --with-default-names
```

### Run tests
To run the tests, simply run the following.

```bash
cd output
bash ../test.sh
```

## Build flags
The `-m32` option of gcc could help you to build the i386 application of libaco on a x86_64 machine.

* C macro: `ACO_CONFIG_SHARE_FPU_MXCSR_ENV`

You could define the global C macro `ACO_CONFIG_SHARE_FPU_MXCSR_ENV` to speed up the performance of context switching between coroutines slightly if none of your code would change the control words of FPU and MXCSR. If the macro is not defined, all the co would maintain its own copy of the FPU and MXCSR control words. It is recommended to always define this macro globally since it is very rare that one function needs to set its own special env of FPU or MXCSR instead of using the default env defined by the ISO C. But you may not need to define this macro if you are not sure of it.

* C macro:`ACO_USE_VALGRIND`

If you want to use the tool memcheck of valgrind to test the application, then you may need to define the global C macro `ACO_USE_VALGRIND` to enable the friendly support of valgrind in libaco. But it is not recommended to define this macro in the final release build for the performance reason. You may also need to install the valgrind headers (package name is "valgrind-devel" in centos for example) to build libaco application with C macro `ACO_USE_VALGRIND` defined. (The memcheck of valgrind only works well with the standalone co currently. In the case of the shared stack used by more than one non-main co, the memcheck of valgrind would generate many false positive reports. For more information you may refer to [test_aco_tutorial_6.c](https://github.com/hnes/libaco/blob/master/test_aco_tutorial_6.c).

* C macro:`ACO_USE_ASAN`

The global C macro `ACO_USE_ASAN` would enable the friendly support of [Address Sanitizer](https://en.wikipedia.org/wiki/AddressSanitizer) in libaco (support both gcc and clang).