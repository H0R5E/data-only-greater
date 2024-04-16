---
title: "DTOcean Development: Organising the Packages"
date: "2017-02-23"
updated: "2017-02-23"
coverImage: "/images/dtocean/package_graph.png"
coverWidth: 864px
coverHeight: 465px
categories: [DTOcean, open source, development, ocean energy]
---

## A Gentle Renaming

Before commencing a new wave of development I want to describe the purpose of
each of the packages in the DTOcean project. As part of this process of
description it has become clear that some of the names of both the repositories
and the packages themselves could be improved.

One of the main areas of confusion is which of the packages is the principal
one. Although many people thing that it is dtocean-core, in fact it's
dtocean-gui which provides the final user interface. One reason that this
confusion could have occurred is that dtocean-core was in development for
significantly longer than dtocean-gui as it provides the control aspects that
dtocean-gui operates. Indeed DTOcean can be run with dtocean-core alone, but
there will be no graphical aspect other than output graphs.

Thus, to reduce confusion it has been decided to _rename dtocean-gui as
dtocean-app_. Hopefully, this will make the package appear of more importance
in the hierarchy than dtocean-core. This and all the other changes to package
names are as follows:

- **dtocean-gui to dtocean-app**: As explained above.
- **pandas-qt to dtocean-qt**: This is a fork of the pandas-qt package that
  has been modified to work with the DTOcean GUI. To avoid confusion with the
  original package (although depreciated) the name will be changed.
- **dtocean-operations to dtocean-maintenance**: The naming here is misleading
  as this package deals only with maintenance operations, not, for example,
  installation operations which is dealt with by dtocean-installation.
- **dtocean-environmental to dtocean-environment**: This is to match the naming
  used within the package itself.

In addition to the above changes to the packages the Github repositories names
will also be modified to match.

## Package Descriptions

For development of the DTOcean tool, it is necessary to understand the
purpose of the 14 packages that make up the project. They can be divided into
4 groups:

1. **Support**: These packages provide basic functionality that may be shared
   among many packages.
2. **Core**: These packages control the execution of the design and assessment
   modules, control the data flows between the database, user and modules and
   provide interactive access for the user.
3. **Modules**: The design modules execute the scientific algorithms.
4. **Assessments**: The assessment modules provide metrics for the outputs of
   individual modules or the entire design.

The packages in each of these groups will now be discussed in turn. Further
details can be found in the DTOcean technical manual.

### Support Packages

#### polite

The polite package contains a number of shared functions for working with
configuration files and the python logging system. It makes deploying and
utilising a logging configuration file extremely "polite". The package is
utilised by almost all the other DTOcean packages.

#### dtocean-qt

A fork of the now defunct pandas-qt package, this has been modified to work
with the DTOcean (Anaconda) Qt system and provides some additional functionality
for cherry-picking how pandas tables can be edited, such as allowing new rows
but not columns.

### Core Packages

#### aneris

The package aneris is the underlying data coupling and action scheduling
framework. It provides all the pieces required for the logical structure of
dtocean-core, however it could be used for different applications that required
any functionality where generic interfaces are sharing data. It also
allows for extensions through the use of plugins.

#### dtocean-core

The dtocean-core applies the functionality of aneris to a more strict structure.
It contains the concepts of executing a number of modules in order which will
then be immediately assessed by a number of thematic assessments for the module
itself and the global, cumulative state of the data. It also provides interfaces
to the database and to the user in forms of data input and output and plots. It
uses the plugin architecture of aneris to allow for easy extensions, including
defining advanced execution strategies for optimisation.

#### dtocean-app

This package provides the Qt4 GUI for interacting with the dtocean-core.
Although it does not contain any additional logic, visualising the data
provides significantly greater insight over using dtocean-core on its own and
increases productivity.

### Modules

#### dtocean-hydrodynamics

The hydrodynamics module for DTOcean. It encapsulates 4 python modules,
dtocean-wave, dtocean-tidal, dtocean-hydro and dtocean-wec. The first three
provide the solvers and optimisation routines for designing a wave or tidal
array and dtocean-wec provides a tool for creating a complex input for the wave
solver by utilising the open source code [NEMOH][1].

#### dtocean-electrical

This module develops the electrical network for the array up to and including the
onshore landing point. It also selects an electrically appropriate
umbilical cable should the selected devices be floating.

#### dtocean-moorings

The moorings and foundations module will design foundations for all devices
and furthermore design mooring for floating devices. If an umbilical cable has
been chosen (either by dtocean-electrical or the user) then the module will
adjust the mooring and foundation system so that it is compliant with the
cable.

#### dtocean-logistics

This module is not exposed to the user but provides all the logistics
logic (such as selections of vessels and ports, scheduling and duration
information) for the installation and maintenance modules.

#### dtocean-installation

The module generates an installation solution for the device array layout,
electrical and moorings and foundations networks. It also indicates when the
maintenance phase of operations can commence.

#### dtocean-maintenance

This module generates a maintenance strategy for the array layout and electrical
and moorings and foundations networks. This strategy can be tuned by the user
depending on whether they prefer a calendar based, condition monitoring or
unplanned corrective strategy. The module not only requires dtocean-logistics
but is also dependent on dtocean-reliability to provide the likelihood of
failure of the components and device subsystems. Failure events are estimated
in the time domain and a maintenance schedule and adjusted power production are
produced for the lifetime of the array.

### Assessments

#### dtocean-economics

The first assessment module is used to calculate the levelised cost of energy
for any given input. A lot of additional work is done within the dtocean-core
interface to this theme to create additional outputs for the user.

#### dtocean-reliability

Generates mean time to failure and other metrics for the networks
produced by the electrical and moorings and foundations module or can be
used with custom networks, as is the case with the maintenance module.

#### dtocean-environment

This assessment generates two numerical environmental impact scores based on
the array design, operations details and inputs from the user. The
first score considers any negative impacts from the array whilst the second
score considers any potential positive impacts.

## Interrelationships

![Package Graph](/images/dtocean/package_graph.png)

Now that the purpose of each package has been briefly discussed, it is
important to understand the relationships between them. Of particular
interest is visualising the impact that changes in one package will have on
those packages that depend on it. A new release of a
package at a low level in the chain could necessitate at least a new release of
packages higher up and potentially require changes in response.

As can be seen from the graph above, a change in any of the design modules may
necessitate a change in both the dtocean-core and dtocean-app packages. As
dtocean-logistics is a dependency for two other modules, changes to it may
require changes in the 4 packages which are upstream of it. Also note that a
change in dtocean-reliability affects 4 packages as it may trigger changes to
dtocean-maintenance.

Missing from the above diagram is polite. As polite is a dependency for almost
all of the other packages, it was too untidy to include it in the graph.
Also, it is more mature than the other packages and therefore less likely to
be changed significantly and require changes from upstream. However, there
remains a risk that a significant change in polite could require new releases
for numerous other packages in the project.

## Managing Change

From the interrelationships shown above, it is clear that managing changes in
the DTOcean project is a challenging task. This topic
will be discussed in another blog post where the procedures for developing
the modules will be detailed. The important lesson from this post is that
communication between the developers working on each module is key to
ensuring that changes are beneficial to the entire project.

[1]: http://lheea.ec-nantes.fr/doku.php/emo/nemoh/start
