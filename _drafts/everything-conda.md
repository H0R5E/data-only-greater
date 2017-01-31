---
layout:     post
title:      Everything Conda
categories: [latest]
tags:       []
---

## Getting f2py to compile on windows 64 bit

See:

http://scientificcomputingco.blogspot.com.es/2013/02/f2py-on-64bit-windows-python27.html

Note only setting up MinGW was required and setting the path to the bin
directory. For setting it up I chose options:

* arch: x86_64
* threads: win32

Note that I now need two branches to hold the compiled version for each
architecture for binstar deployment.

## Binstar Tokens

If you already have a token just add this to .condarc such as:

    channels:
      - https://conda.binstar.org/t/%TOKEN/topper
      - defaults
