---
layout:     post
title:      Updates to edengths Latex PhD Thesis Template
categories: [Latest]
tags:       []
---

## New Lay Summary Section

The unoffical latex template which I authored,
[edengths]({{ site.baseurl }}/software/edengths.md) has been updated to include
the new requirement of a "Lay Summary" section following changes to the
regulations at The University of Edinburgh. The summary section is added by
added the latex command _\summary_ within the precntnt.tex file. This is now
included by default in both the standard and nomenclature versions of the
template.

## Migration to Github

To provide a more friendly environment for collaborating with the development
of edengths I have moved the code from bitbucket to Github. The repository can
now be found [here](https://github.com/H0R5E/edengths). Contributions should
follow similar rules to those laid out for
[DTOcean]({% post_url 2017-03-09-dtocean-development-change-management.md %}).
The main difference with edengths is that two branches are supported - the
master branch which contains the standard template and the nomencl branch which
contains the version which includes a nomenclature.
