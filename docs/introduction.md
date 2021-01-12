---
id: introduction
title: Introduction
sidebar_label: Introduction
slug: /
---

libaco - A blazing fast and lightweight C asymmetric coroutine library.

[![Build Status Travis](https://img.shields.io/travis/hnes/libaco.svg?style=flat-square&&branch=master)](https://travis-ci.org/hnes/libaco)
[![Releases](https://img.shields.io/github/release/hnes/libaco/all.svg?style=flat-square)](https://github.com/hnes/libaco/releases)
[![LICENSE](https://img.shields.io/github/license/hnes/libaco.svg?style=flat-square)](https://github.com/hnes/libaco/blob/master/LICENSE)
[![中文文档](https://img.shields.io/badge/doc-en%20+%20中文-blue.svg?style=flat-square)](https://github.com/hnes/libaco/blob/master/README_zh.md)
[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=libaco+-+A+blazing+fast+and+lightweight+C+asymmetric+coroutine+library&url=https://github.com/hnes/libaco&via=00hnes)

## The name

The code name of this project is Arkenstone 💎

Asymmetric COroutine & Arkenstone is the reason why it's been named `aco`.

## Supported systems

Currently supports Sys V ABI of following
 - Intel386 
 - x86-64.

## Summary

- Along with the implementation of a production-ready C coroutine library, here is a detailed documentation about how to implement a *fastest* and *correct* coroutine library and also with a strict [mathematical proof](proof-of-correctness).
- It has no more than 700 LOC but has the full functionality which you may want from a coroutine library.
- The [benchmark](benchmark) part shows that a context switch between coroutines only takes about *10 ns* (in the case of standalone stack) on the AWS c5d.large machine.
- User could choose to create a new coroutine with a *standalone stack* or with a *shared stack* (could be shared with others).
- It is extremely memory efficient: *10,000,000* coroutines simultaneously to run cost only *2.8 GB* physical memory (run with tcmalloc, each coroutine has a *120B* copy-stack size configuration).

The phrase "*fastest*" in above means the fastest context switching implementation which complies to the Sys V ABI of Intel386 or AMD64.

[![Build Status Travis](https://img.shields.io/travis/hnes/libaco.svg?style=flat-square&&branch=master)](https://travis-ci.org/hnes/libaco)
[![Releases](https://img.shields.io/github/release/hnes/libaco/all.svg?style=flat-square)](https://github.com/hnes/libaco/releases)
[![LICENSE](https://img.shields.io/github/license/hnes/libaco.svg?style=flat-square)](https://github.com/hnes/libaco/blob/master/LICENSE)
[![中文文档](https://img.shields.io/badge/doc-en%20+%20中文-blue.svg?style=flat-square)](https://github.com/hnes/libaco/blob/master/README_zh.md)
[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=libaco+-+A+blazing+fast+and+lightweight+C+asymmetric+coroutine+library&url=https://github.com/hnes/libaco&via=00hnes)

## Contribute

Issues and PRs are welcome 🎉🎉🎉

[See how to help us with the project.](/support)

## Copyright and License

Copyright (C) 2018, by Sen Han [<00hnes@gmail.com>](mailto:00hnes@gmail.com).

Under the Apache License, Version 2.0.

See the [LICENSE](https://github.com/hnes/libaco/blob/master/LICENSE) file for details.