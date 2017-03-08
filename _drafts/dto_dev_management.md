# DTOcean: Development Management

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

This process is detailed in the following subsections.

### Creating a Fork and Cloning

The developer should use a personal fork of the DTOcean repository, rather
than working directly on the official repositories themselves. The process
is started as follows:

1. "Fork" the DTOcean repository into a personal repostory on Github. This
   can be done using the "Fork" button in the top right of the Github page.
2. "Clone" the personal fork onto your computer to produce a local working
   copy.

### Syncing the Fork

It is desirable to keep the fork in sync with the official repository, both
for submitting work and reusing the fork in the future (rather than deleting
and cloning again).

The syncing process is described in [Nicola Paolucci's blog
post](http://blogs.atlassian.com/2013/07/git-upstreams-forks/). A summary of
the steps are as follows:

1. Add the DTOcean repository as the "upstream" remote.
2. "Fetch" changed from upstream.
3. Apply those changes to your local master branch.
4. Push the updates to Github

In code:

```
git remote add upstream https://github.com/DTOcean/dtocean-*.git
git fetch upstream
git checkout master
git merge upstream/master
git push origin
```

Steps 2, 3 & 4 can be repeated as required.

### Creating a branch and working on it

In your personal fork, create a new branch to create your new code and test it.
**DO NOT WORK ON THE MASTER OR RELEASE BRANCHES**. If you submit a pull request
on either of these branches your local fork will become irrecovably out of sync
with the DTOcean organisation version.

Do your work on the new branch in your personal fork. You can commit and push
this branch without worry. When the code is ready and tested the branch can
then be prepared for a pull request.

### Rebase the branch

Before submitting your branch as a pull request, it is useful to rebase
the branch with the current upstream repository.

Further reading about the mechanism for this "Trunk" style updating process can
be found in the following references:

[A succesful Git branching model considered harmful][1]
[How To Rebase and Update a Pull Request][2]
[Rebase \* GitHub & Git Foundations][3]
[Rebase and merge pull requests][4]
[About pull request merges][5]

The last link indicates that on Github itself the repository owner can rebase
the branch in a pull request into the baseline (e.g. master) branch. It is
assumed, however, that the update branch has a clean history and has probably
already been rebased prior to the pull request.

The act of making a pull request also allows time for both review of the new
code itself, but also the impact on upstream packages. If it is deemed in the
pull request that some work is required upstream, this work can be scheduled.
In terms of minor changes, and assuming the code passes review, scheduling
upstream changes may be sufficient to allow the pull request to be merged.
However, for major changes, the pull request may be delayed until the upstream
packages are ready or (in extreme circumstance) may be moved to another branch
or repository.

These techniques represent a new paradigm for the development of DTOcean as
previously it followed a multi-branch approach . Some mistakes will certainly be 
made along the way while we learn to effectively implement the new processes.

## Collaborative Working

Although the above process would seem to suggest that either working alone to 
create stable code or submitting unstable code in order to facilitate 
collabortation are the only options available. However, this is not the case, 
its just that collabortation on a fix or feature should be carried out on a 
forked repository rather than the central repository itself. In the forked 
repositories any number of collabortors and branches can be utilised. 

## Changelogs

The project will endeavour to maintain useful change logs as described at
[keepachangelog.com](http://keepachangelog.com).

## Development Stack

In order to allow developers of modules to evaluate the impact of their changes,
outside of any automated tests, it is necessary to provide a development stack
that can be used to create a "local" version of DTOcean.

To facilitate this the stable (release) version of all the DTOcean packages will
be made available through Ananconda Cloud, which can then be installed through
the "conda" package management system.

*DETAILS TO FOLLOW*

Once the full suite is installed using Ananconda, the package(s) under
development can be uninstalled and replaced by the local development version.
For instance, in the case of dtocean-hydrodynamics the process would be as
follows:

```
conda remove dtocean-hydrodynamics
pip install -e /path/to/local/dtocean-hydrodynamics
```

As the local code has been installed using the "e" flag of pip, any changes
made to the local code will be updated without requiring reinstallation of the
development package (following a session restart).

[1]: https://barro.github.io/2016/02/a-succesful-git-branching-model-considered-harmful/
[2]: https://www.digitalocean.com/community/tutorials/how-to-rebase-and-update-a-pull-request
[3]: https://youtu.be/SxzjZtJwOgo
[4]: https://github.com/blog/2243-rebase-and-merge-pull-requests
[5]: https://help.github.com/articles/about-pull-request-merges/
[6]: https://github.com/ipython/ipython/wiki/Dev:-GitHub-workflow

