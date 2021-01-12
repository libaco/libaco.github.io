---
id: changelog
title: Changelog
sidebar_label: Changelog
slug: /changelog
---

```
v1.2.4 Sun Jul 29 2018
    Changed `asm` to `__asm__` in aco.h to support compiler's `--std=c99`
    flag (Issue #16, proposed by Theo Schlossnagle @postwait).
v1.2.3 Thu Jul 26 2018
    Added support for MacOS;
    Added support for shared library build of libaco (PR #10, proposed
    by Theo Schlossnagle @postwait);
    Added C macro ACO_REG_IDX_BP in aco.h (PR #15, proposed by
    Theo Schlossnagle @postwait);
    Added global C config macro ACO_USE_ASAN which could enable the
    friendly support of address sanitizer (both gcc and clang) (PR #14,
    proposed by Theo Schlossnagle @postwait);
    Added README_zh.md.
v1.2.2 Mon Jul 9 2018
    Added a new option `-o <no-m32|no-valgrind>` to make.sh;
    Correction about the value of macro ACO_VERSION_PATCH (issue #1 
    kindly reported by Markus Elfring @elfring);
    Adjusted some noncompliant naming of identifiers (double underscore
    `__`) (issue #1, kindly proposed by Markus Elfring @elfring);
    Supported the header file including by C++ (issue #4, kindly
    proposed by Markus Elfring @elfring).
v1.2.1 Sat Jul 7 2018
    Fixed some noncompliant include guards in two C header files (
    issue #1 kindly reported by Markus Elfring @elfring);
    Removed the "pure" word from "pure C" statement since it is
    containing assembly codes (kindly reported by Peter Cawley
    @corsix);
    Many updates in the README.md document.
v1.2.0 Tue Jul 3 2018
    Provided another header named `aco_assert_override.h` so user
    could choose to override the default `assert` or not;
    Added some macros about the version information.
v1.1   Mon Jul 2 2018
    Removed the requirement on the GCC version (>= 5.0).
v1.0   Sun Jul 1 2018
    The v1.0 release of libaco, cheers 🎉🎉🎉
```