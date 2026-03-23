---
title: DTOcean Version 4.0
date: "2026-03-19"
categories:
  [
    DTOcean,
    open source,
    Data Only Greater,
    monorepo,
    Poetry,
    databases,
    Docker,
    continuous delivery,
  ]
coverImage: "/images/dtocean/dtocean_banner_20251712.png"
coverWidth: 434px
coverHeight: 136px
---

## TL;DR

As the original release of the DTOcean techno-economic design tool for ocean
energy arrays is approaching 10 years old, I've released a new version
(codenamed 4.0) on the [dtocean] GitHub repository. It's now even easier to
install, from [PyPI](https://pypi.org/project/dtocean/), and supports Linux,
too. The database is also easier to install with [Docker] - see the
[dtocean-database] repository for details.

A downside -- only the hydrodynamics module is currently available, but the
other modules will be coming soon!

## So, why version 4?

No, I'm not trying to troll the [DTOceanPlus](https://gitlab.com/dtoceanplus)
developers, this is essentially an update to DTOcean version 2, that I launched
[back in
2019](https://www.offshore-energy.biz/data-only-greater-releases-new-version-of-dtocean/),
which itself was a (mostly) fixed update on the original DTOcean release
[[DTOcean An Introduction: from 2017]]. Work didn't stop on DTOcean at that
point, however, as I was busy fixing bugs and developing functionality that
contributed to the release of two academic papers, in collaboration with
[Sandia National Laboratories](https://www.sandia.gov/):

> Topper, M. B., Olson, S. S., & Roberts, J. D. (2021). On the benefits of
> negative hydrodynamic interactions in small tidal energy arrays. Applied
> Energy, 297, 117091.
> Retrieved from https://doi.org/10.1016/j.apenergy.2021.117091

> Topper, M. B., Olson, S. S., & Roberts, J. D. (2020). Techno-economic modelling
> of tidal energy converter arrays in the Tacoma Narrows. Journal of Marine
> Science and Engineering, 8(9), 646.
> Retrieved from https://doi.org/10.3390/jmse8090646

The problem was that by 2022, when this work was complete, Python 2 had already
been [sunset](https://www.python.org/doc/sunset-python-2/) for more than 2
years, and the ecosystems that supported Python 2 code were disappearing
quickly. This compounded the [dependency
hell](https://en.wikipedia.org/wiki/Dependency_hell) caused by developing each
DTOcean module as a separate project, blocking a final release of the Python 2
code, which would have been DTOcean version 3. By the time I made the decision
that a new full release would not be possible, I had already published some of
the individual packages as version 3, and thus the next major version would be 4.

## Wow, that was 4 years ago! Why has an update taken so long?!

Well, one reason I identified early on is that converting DTOcean to Python 3
would be a big project. The project is big (I think I counted 50,000 lines of
code once), written by many people and does not have full test coverage. Basic
syntax changes are not such a big deal, but the APIs of libraries change, and
some libraries may no longer be maintained, and so replacements must be found.
Back in 2022, I estimated that upgrading to Python 3 would take a year of
full-time work, and I think that might have been an underestimate.

Other factors have also been at play, such as the funding for further
development stopping in 2022. I've also been working on other projects since
then, such as [WEC-Sim](https://github.com/WEC-Sim/WEC-Sim),
[BlueBox](https://marineenergyjournal.org/imej/article/download/224/111), and
[RENEW](https://www.sfi.ie/challenges/energy-innovation/renew/). Since
mid-2024, however, I have been struggling to find full-time employment, so I
have had some time to look at DTOcean again.

I started the conversion process in earnest in December 2024, and 15 months
later I am about halfway to finishing, although I have gone further than just
converting the code to Python 3. The entire organisation of the code has been
reworked, the tools modernised, and the release process streamlined
significantly. I'll cover these changes in greater detail below.

## One repository to rule them all

As Python is an interpreted language, no code is compiled prior to execution.
Running several modules developed as separate projects, such as DTOcean, in a
single Python session, means that the dependencies of those projects
must be compatible. When managing dependencies in separate, distinct, projects,
the compatibility can only be resolved when the projects are installed
together. This makes testing compatibility very difficult and ultimately led to
DTOcean's dependency hell.

You can avoid this problem, in the way DTOceanPlus chose to do, by using
containers (e.g. [Docker]) to run a separate Python interpreter per module and
then using interprocess communication to send data between the modules;
however, this approach is somewhat complex to maintain and setup is "uncommon"
for the average scientific Python user. Another approach is to merge all of the
DTOcean modules into a single project, but this removes the ability to use the
scientific modules independently, which was a principal requirement of the
DTOcean architecture.

An alternative, modern approach, is to keep the projects separate, but store
them in a single [monorepo](https://en.wikipedia.org/wiki/Monorepo) repository.
By maintaining the projects in the same repo, as DTOcean is now organised, it
is possible to use modern Python tooling (as discussed in the next section) to
explicitly ensure compatibility between the dependencies of the projects.
Ultimately, this approach will reduce 15 separate Git repositories, as used
previously, into one.

## Developing with Poetry

You probably can use an LLM to code using poetry nowadays, but I'm not talking
about that, I'm talking about the [Poetry](https://python-poetry.org/) Python
packaging and dependency management tool. The is basically a modern replacement
for the classic [setuptools](https://setuptools.pypa.io/) packaging system,
used on pretty much every Python 2 package.

Poetry's first useful feature is that it creates a lock file, which records the
state of all packages used in a successful installation, allowing that
installation to be repeatably reproduced. This file also acts as a guarantee
that all of the dependencies specified by a project are compatible with each
other. The dependency locking mechanism therefore provides a means for us to
avoid dependency hell.

Typically, Poetry is used with a single project, not a monorepo, so now we use
Poetry's second useful feature -- its plugin architecture. This allows other
developers to extend the baseline functionality of Poetry. For the DTOcean
monorepo, the
[poetry-monoranger-plugin](https://github.com/ag14774/poetry-monoranger-plugin)
provided exactly the functionality required. The plugin uses a shared lock file
between all of the packages defined in a monorepo, ensuring compatibility
between all of them. Additionally, when releasing packages, it can ensure that
the versions of inter-dependencies between the packages in the monorepo are
correct.

For those of you shouting "why aren't you using
[uv](https://docs.astral.sh/uv/)? Poetry is so 2020!", the extendibility of
Poetry is the reason. uv is a great tool, but it still doesn't support edge
cases like dependency rewriting for package releases in a monorepo (see
[uv#9811](https://github.com/astral-sh/uv/issues/9811), for instance). If and
when this functionality becomes available, I'll definitely evaluate switching
DTOcean, but until then Poetry is serving 95% of my needs. The only difficulty
is upgrading dependencies, which is arduously manual (particularly when shared
between multiple packages).
[poetry-plugin-up](https://github.com/mousabaker/poetry-plugin-up) can help
with this for non-monorepos, and, in the future, I might look into extending
this functionality to work with poetry-monoranger-plugin.

## Easy install

Another benefit of using Poetry is that it's designed to make building and
publishing packages to the [The Python Package Index (PyPI)](https://pypi.org/)
super easy. The Poetry build system can also be extended to add custom build
commands allowing, for instance, easy compilation of the Fortran module in the
[dtocean-hydrodynamics] package. This has allowed me to (fairly)
straightforwardly enable the DTOcean suite to run on Linux.

Assuming that a compatible Python environment is installed (3.12 and 3.13 at
the time of writing), the DTOcean suite can be installed from the command line
with a simple:

```sh
pip install dtocean
```

One downside of PyPI versus [conda](https://conda-forge.org/) is that package
size is limited to 100MB, which is exceeded by some of the data required by
the hydrodynamics module, for example. To circumvent this issue, the large
data files must now be downloaded after installation, using the following
command:

```sh
dtocean init
```

This command will also do other initial setup chores, such as adding a desktop
shortcut to the user interface.

In the future, I hope to reimplement publishing DTOcean using conda, and then
recreate the standalone installers (which are made using conda's
[constructor](https://github.com/conda/constructor) package). For now, though,
while this phase of the project is still in development, PyPI is an easy and
well understood method for delivering the latest versions of the DTOcean
packages to users.

## The database is still hard to install though, right?

DTOcean ships with a persistent database of example sites and reference data,
managed using [PostGIS](https://postgis.net/). PostGIS is a powerful geospatial
database, built upon [PostgreSQL](https://www.postgresql.org/), but using it
for a desktop application was probably one of my worst design decisions (that
I ended up in a shouting match to achieve, which makes it feel even more bad).

Issues include that installing PostGIS and restoring the DTOcean database is
somewhat difficult, compatibility between the installed version of the PostGIS
and the DTOcean database to restore can be brittle, and most of the time the
database will remain running in the background while DTOcean is not being used.
It's clear to see why this choice has been a barrier to adoption for DTOcean.

Ultimately, I'd like to port the database to a file based system, such as
[SpatiaLite](https://www.gaia-gis.it/fossil/libspatialite/index) or
[DuckDB](https://duckdb.org/), which can be distributed alongside the code
without requiring additional installations. In the meantime, however, I have
been very hypocritical by borrowing the DTOceanPlus solution of using [Docker]
to improve the installation experience.

Instructions for spinning up a container-based version of the DTOcean database
using Docker are now available in the [dtocean-database] repository. This
approach removes the need for installing PostGIS locally (although you will
still need to install something like [Docker
Desktop](https://www.docker.com/products/docker-desktop/)), guarantees version
compatibility, and restores the DTOcean database to a working state with just
one command. Additionally, the database can be started and stopped with ease,
meaning it's only using resources when you need it.

Another enhancement to the [dtocean-database] repo is that all of the database
data can now be retrieved and updated with ease. Previously, size limits on
repositories managed in [GitHub] meant that storing the underlying data there
was impossible. Now, by using the [Data Version Control
(dvc)](https://dvc.org/) data management tool, external storage (such as AWS
buckets) can be used to supplement a GitHub repo, allowing the DTOcean database
data and structural files to be managed together.

## But there's always a 'but'

There is always a 'but', it's true. The biggest 'but' of this 4.0 release is
that only one of the scientific modules is available, [dtocean-hydrodynamics].
Still, of the 14 original modules, I have converted 7 of them and added 2 more,
and I have overhauled the supplemental repositories, such as
[dtocean-database]. The new structure of the tools has been operationally
verified using the hydrodynamics module, so updating the other scientific
modules and adding them back into the suite can be done incrementally. This
process should also be more efficient now that most of the big architectural
decisions have been made for this release.

Another 'but' that may have a more significant impact is that I have broken
backwards compatibility for the DTOcean save files (i.e. `.prj`, `.dts` and
`.dto`). When designing the original save file system for DTOcean, I made
another bad architectural decision by using the Python
[pickle](https://docs.python.org/3/library/pickle.html) serialization format.
This format is extremely brittle for long term storage, as it requires the code
for saved structures to be unchanged between saving and loading. This is very
hard to guarantee, especially if you save structures provided by external
libraries. It's likely, then, that any save files made in DTOcean 2 would not
work with DTOcean 4 anyway, so I decided to take the opportunity to formally
remove pickle from the file I/O code.

For DTOcean 4.0, all save files now use the text-based
[JSON](https://www.json.org/json-en.html) format, and carry embedded version
information. This will ensure that the save files can always be opened and that
the data can be read, no matter when the files were created. To enforce this
change, the save file extensions have been modified as follows:

- datastate files: `.dts` -> `.dtos`
- project files: `.prj` -> `.dtop`
- application files: `.dto` -> `.dtox`

The example files created for the [Getting Started 1: Example Project] tutorial
have been updated using the new format and can be downloaded from the
[dtocean-examples](https://github.com/DTOcean/dtocean-examples) repository. The
dtocean-examples repository now also includes the data used in the [DTOcean WEC
Pre-processor] video tutorials.

## So, will it take another 4 years for an update?

Well, hopefully not! To improve the likelihood of providing updates at a
quicker cadence than once every 4 years (to be fair, I did release some DTOcean
code in the interim, just not a full release), I have created a [continuous
delivery](https://en.wikipedia.org/wiki/Continuous_delivery) workflow in the
[dtocean] repository using the [Python Semantic
Release](https://python-semantic-release.readthedocs.io/) package.

Python Semantic Release will automatically parse Git commit messages to
determine if a package needs to be released, then use git tags to find previous
releases, and then update the necessary files (with the new version number, for
instance). Poetry can then be used to build the new version of the package
which can then be uploaded to PyPI. All of this is automated using [GitHub
Actions](https://github.com/features/actions), triggered by a commit to the
main branch of the [dtocean] repository. GitHub Actions is also used to conduct
automated testing, and the release process won't begin unless all of the
relevant tests have passed.

With this system, new package versions are made available on PyPI as soon as
they are added to the [dtocean] repository. To update an existing dtocean
installation to the latest dependencies with `pip` use:

```sh
pip install -U --upgrade-strategy eager dtocean
```

## Every owner's worst fear

Well, if you've reached this far, thanks so much for reading! Unfortunately, I
must end with some sad news that Data Only Greater may be coming to an end as a
business. It's been nearly 2 years since I last had a contract, I'm currently
out of work, and having a business prevents me from accessing benefits. We'll
leave it a little longer, but DOG might soon have to be put to sleep. It's been
a fun journey, nonetheless, and I'd like to thank everyone that has supported
me over the years. It wouldn't have been possible without you. Ciao for now.

[dtocean]: https://github.com/DTOcean/dtocean
[Docker]: https://www.docker.com/
[GitHub]: https://github.com/
[dtocean-hydrodynamics]: https://github.com/DTOcean/dtocean/tree/main/packages/dtocean-hydrodynamics
[dtocean-database]: https://github.com/DTOcean/dtocean-database
[Getting Started 1: Example Project]: https://dtocean.github.io/dtocean/root-v2026.3.4/user/getting_started_1.html
[DTOcean WEC Pre-processor]: https://www.youtube.com/playlist?list=PL0_lWZCqs2h2NJWA0YX7L3_qyd2snzq_d
