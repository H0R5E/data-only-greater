---
layout:     post
title:      "DTOcean Development: Change Management"
categories: [latest, professional]
tags:       [DTOcean, open source, development, ocean energy]
---

## Github Repository Structures

In the interest of external engagement and maintaining a fairly simple
management structure for handling updates through pull requests, a process
similar to many mature python packages that are developed through Github, 
such as [IPython][6] or Pandas, will be used.

The basic concept is that each repository will have just two branches as
follows:

1. *Master:* This is the default branch of Github repositories and will carry
   the development version of each package. This branch should be stable and
   should work with upstream packages but it is not guaranteed.
2. *Release(s):* This branch will hold the latest stable version of the code. 
   The branch itself will be labelled following the "major.minor" version number
   of the package and then tags will be used to indicate micro version changes.
   It may be that multiple release branches need maintained while upstream
   packages "catch-up" to the release, but the older releases should have no
   further commits made to them.
   
## Package Version Numbers

The version numbering of the DTOcean packages generally relates to the amount of
effort required for upstream repositories as a result of changes made
downstream. Some typical examples of changes for the three level version
hierarchy is as follows:

+ *Micro version:* Small bug fixes that make no API changes
+ *Minor version:* Minor API changes that require small changes upstream;
  More significant code changes for new features, performance or accuracy 
  improvements but which do not significantly alter the results
+ *Major version:*  Major API changes that significant affect other components
  of DTOcean or the data model; Changes that significantly alter the results of
  the code from new features or changes to existing features.

Some judgement may be necessary as to define the appropriate level to be
incremented for a particular change, but the idea is that the hierarchy
considers the level of impact on upstream packages. Indeed, beyond micro version
changes (which should require no action from upstream) the developers of
upstream packages should be consulted to discuss the likely level of impact.

The updating of a version number in a package should "automatically" trigger
an update of the matching hierarchy version in upstream packages. Although this
can not really happen automatically for changes other than micro versions,
the process should be instigated once the upstream package developer has been
made aware of the change through the
[DTOcean Mailing List](https://groups.google.com/d/forum/dtocean).

## Development Stack

In order to allow developers of modules to evaluate the impact of their changes,
outside of any automated tests, it is necessary to provide a development stack
that can be used to create a "local" version of DTOcean.

To facilitate this the stable (release) version of all the DTOcean packages will
be made available through Anaconda Cloud, which can then be installed through
the "conda" package management system.

Details of how to install and develop the complete DTOcean system can be
found on the
[dtocean-app Github repository](https://github.com/DTOcean/dtocean-app) page.

## Updating Process

All updates to the dtocean repositories shall be handled through pull requests
and apart from micro version bug fixes, they should be made against the
master branch. In the case of micro version changes these should be submitted to
the current release branch.

In order to cleanly maintain the two public branches, other branches must not
be part of any pull request. Private branches are not discouraged, but when
submitting to the public server they must either be "fast-forward" merged or
"rebased". This way all changes are maintained in the master branch.

The same process should be followed for changes submitted to the release branch
but those changes may or may not be incorporated into the master branch
depending on its level of development.

This process is detailed in the following subsections which is adapted from
the descriptions in [Nicola Paolucci's blog
post](http://blogs.atlassian.com/2013/07/git-upstreams-forks/).

### Creating a Fork and Cloning

The developer should use a personal fork of the DTOcean repository, rather
than working directly on the official repositories themselves. The process
is started as follows:

1. "Fork" the DTOcean repository into a personal repository on Github. This
   can be done using the "Fork" button in the top right of the Github page.
2. "Clone" the personal fork onto your computer to produce a local working
   copy.

### Syncing the Fork

It is desirable to keep the fork in sync with the official repository, both
for submitting work and reusing the fork in the future (rather than deleting
and cloning again).

A summary of the syncing process is as follows:

1. Add the DTOcean repository as the "upstream" remote.
2. "Fetch" changed from upstream.
3. Apply those changes to your local master branch.
4. Push the updates to Github

In code:

```
git remote add upstream https://github.com/DTOcean/dtocean-*.git
git fetch upstream
git checkout master
git rebase upstream/master
git push origin
```

Steps 2, 3 & 4 can be repeated as required. Note that we **never merge branches**
in this approach to repository management.

### Creating a branch and working on it

In your personal fork, create a new branch to create your new code and test it.
**DO NOT WORK ON THE MASTER OR RELEASE BRANCHES**. If you submit a pull request
on either of these branches your local fork will become irrecoverably out of sync
with the DTOcean organisation version.

Do your work on the new branch in your personal fork. You can commit and push
this branch without worry. When the code is ready and tested the branch can
then be prepared for a pull request.

### Rebase the branch

Before submitting your branch as a pull request, it is useful to rebase
the branch with the current upstream repository. Assuming that the feature
is being developed on branch "feature-x" the rebasing process is as follows.

```
git checkout feature-x
git fetch upstream
git rebase upstream/master
git push origin
```

Assuming there are no conflicting changes on the official repository this
should happen smoothly. Otherwise you may need to resolve a merge conflict, see
[Resolving merge conflicts after a Git rebase](https://help.github.com/articles/resolving-merge-conflicts-after-a-git-rebase/)
for a description about how to resolve these. Its possible you may also need
the "-f" flag for the push, if the rebase has changed the history of your
personal fork.

Once the rebase is done, a pull request can be made on the GitHub website.

### Pull Request

Use the Github.com interface to make a pull request for your branch. Switch to the
feature branch and push the "New pull request" button. Make sure that the base
fork points to the official DTOcean repository and that the base branch is
either "master" or a release branch.

Add a short message about the purpose of the pull request and ensure that the
"allow edits from maintainers" box is ticked so that the official repository
maintainer can help. Then click "Create pull request".

### Modification, Acceptance and Tidy-Up

Once the pull request has been submitted the repository maintainer will review
it and maybe make suggestions as to how it can be improved. They may also work
on the branch itself. If you add commits to the branch, these will automatically
be included in the pull request.

Once the maintainer is happy, the request will be accepted and the branch will
be rebased into the requested official branch. The feature branch will then no longer
exist in the history of the official repository and should be deleted in your
personal copy. This can be started by pressing the "Delete branch" button at
the bottom of the pull request.

Following the branch delete in your person Github repository, the local
repository should be synced to the updated official repository so that you
can see your changes and continue working. The process is as follows:

```
git checkout master
git fetch upstream
git rebase upstream/master
git fetch origin --prune
git branch -D feature-x
git push origin
```

This process will align your master (or release) branch with the official
repository and then prune and delete your feature branch. Note that "feature-x"
should be replaced with the name of your feature branch.

Returning to your personal Github repository of the package should now show
the message:

> This branch is even with DTOcean:master.

### Impact on other DTOcean Packages

The act of making a pull request allows time for both review of the new
code itself, but also the impact on upstream packages. If it is deemed in the
pull request that some work is required upstream, this work can be scheduled.
In terms of minor changes, and assuming the code passes review, scheduling
upstream changes may be sufficient to allow the pull request to be merged.
However, for major changes, the pull request may be delayed until the upstream
packages are ready or (in extreme circumstance) may be moved to another branch
or repository.

### Collaborative Working

Although the above process would seem to suggest that either working alone to 
create stable code or submitting unstable code in order to facilitate 
collaboration are the only options available. However, this is not the case, 
it's just that collaboration on a fix or feature should be carried out on a 
forked repository rather than the official repository itself. In the forked 
repositories any number of collaborators and branches can be utilised. 

### Changelogs

The project will also endeavour to maintain useful change logs, as described at
[keepachangelog.com](http://keepachangelog.com), in order to provide a user
friendly description of changes between versions. An official approach for
maintaining these changelogs is yet to be decided, however.

### Further Reading

Further reading about the mechanism for this "Trunk" style updating process can
be found in the following references:

+ [A succesful Git branching model considered harmful][1]
+ [How To Rebase and Update a Pull Request][2]
+ [Rebase \* GitHub & Git Foundations][3]
+ [Rebase and merge pull requests][4]
+ [About pull request merges][5]

## Conclusions

The techniques presented in this blog post represent a new paradigm for the
development of DTOcean. Previously it followed a multi-branch approach with each
team maintaining their own branch before integration. Some mistakes will certainly be 
made along the way while we learn to effectively implement these new processes,
but aligning with common practice in open source development will allow the
developer base to grow beyond the original project development team.

[1]: https://barro.github.io/2016/02/a-succesful-git-branching-model-considered-harmful/
[2]: https://www.digitalocean.com/community/tutorials/how-to-rebase-and-update-a-pull-request
[3]: https://youtu.be/SxzjZtJwOgo
[4]: https://github.com/blog/2243-rebase-and-merge-pull-requests
[5]: https://help.github.com/articles/about-pull-request-merges/
[6]: https://github.com/ipython/ipython/wiki/Dev:-GitHub-workflow

