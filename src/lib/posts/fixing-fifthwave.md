---
title: Fixing Fifthwave
date: "2011-01-21"
updated: "2011-01-21"
categories: [fifthwave, SuperGen, wave energy, waves, currents, CFD, Python]
---

Ok, so the last two weeks of panic have been fixing something called
fifthwave. To understand what fifthwave is, I need to introduce the project
it is related to, that is actually supposed to be the most important part
of my job. Strangly, this is only the second project I have taken on, but it
has spawned a lot of work. Ironically, it is not even my part of the SuperGen
project, and it’s doing something I never really wanted to do! Nonetheless,
it has now occupied more than 2 years of my time.

What is this mysterious ball and chain, you may well ask? Simple, its modelling
the impact of a current on a wave energy device. Now, this is easy to say, but
the physics (in particular the numerical modelling challenge of doing this)
is quite complicated. It is made exceptionally complicated by the fact that
the current will be applied perpendicular to the wave, which means that it
must be modelled in 3D. Argh! Add to this the fact that we have no in house
code that could cope with this or the resources to produce one and you should
be starting to see the challenges involved.

These issues are what have brought about ‘fifthwave’ as I was forced to use the commercial CFD package which is used to teach the students. Now to some extent this is reasonable package for our purposes – it generates waves and currents, it handles floating bodies with 6 degrees of freedom. Unfortunately, this was developed for preliminary investigations into ship dynamics and therefore lacks a great number of diagnostic tools for solving wave energy problems, in particular, testing the quality of the waves generated.

And that is what fifthwave is for – it is Python code that takes a waveform (in 2D) and records various metrics in graphs and reports about that wave form. Those metrics can then be used to do what is know as a convergence study that will inform me about the quality of the grid I am using. Very useful. What went wrong is that fifthwave originally just produced errors against an analytical wave form, but the convergence tests only work on the original data, and that was harder to extract than it might have been. After a two week slog, fifthwave can now output raw data and errors which makes more sense , say, if a wave with no analytical solution is being examined.

Fifthwave can do more too! In the course of developing fifthwave, a delivery system for sending CFD jobs to our compute cluster has also been added. Fifthwave is turning into an interesting little bit of code that might be useful to others (I have plans). If you want to keep an eye on how the development is going, I (used to) publish the state of the issue tracker (ditz, if you’re interested) here. Now I’d better fix the rest of the bugs and start using it for something.
