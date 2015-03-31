---
layout: simple
title:  Wave Resource Estimation Using DHI MIKE - Data Preparation
---

This is a guide to preparing data for analysis using the SW module of
DHI MIKE 21.

**Table of Contents**

-   1 Introduction
-   2 Starting a MIKE project
-   3 Preparing a Coastline
-   4 Creating a Mesh Generator File and Importing the Coastline
-   5 Completing the Model Boundaries and Generating a Mesh


Introduction {#Introduction}
==============

This is a guide to preparing data for analysis using the SW module of
the DHI MIKE 21 suite, which is part of the DHI MIKE Zero group of
applications. The guide assumes that [DHI
MIKE](3D"http://www.mikebydhi.com/") is installed on a Windows opera=
ting system; note that a DHI licence is not required for the following
work, but will be required to calculate the results of the simulation.
In addition, while this guide shows the major stages of preparing a
simulation using the MIKE Zero graphical interface, it is hoped that
much of this can be automated using MATLAB or another programming tool
in order to reduce user dependence and improve stability for setting
up large simulations.

The major steps in the process are as follows:

1.  Import and prepare a coastline;
2.  Generate a mesh;
3.  Apply bathymetry data to the mesh;
4.  Set up boundary conditions;
5.  Add wind forcing information.


These steps will be considered in greater detail in the following
sections. Where work is required externally from MIKE (for data
retrieval, etc) links to other wiki pages detailing these processes
will be provided.

Some of the information written here can be found in the *MIKE ZERO
Step-by-step training guide*, in fact many of the other training guides,=
such as the *MIKE 21 FLOW MODEL Step-by-step training guide*, require
reference to this guide where knowledge is assumed. Unfortunately, no
training guide is provided for the Spectral Wave (SW) module of MIKE,
although a brief outline of the steps required is given in the *MIKE
21 SW User Guide*. Possibly the most useful resource for the process
illustrated here can be found in the *MESH GENERATOR* section of the
*MIKE ZERO PREPROCESSING & POSTPROCESSING User Guide*. It shows a
detailed example of setting up a small mesh and this page follows the
same structure. All the DHI MIKE documentation is provided with the
installed software.=20

Starting a MIKE project {#StartingaMIKE}
=======================

This should probably be its own page.

The graphical user interface (GUI) for DHI MIKE Zero is a little
counter intuitive to the uninitiated. Thus, this section will briefly
describe the steps for starting a MIKE Zero project. There is just one
interface to MIKE and that is MIKE Zero. So no matter what simulations
you will be doing (MIKE 21 HD, SW, etc, etc) it will all be controlled
from MIKE Zero. So, to begin, start MIKE Zero from the Windows All
Programs menu and you will be greeted by the following screen:

*Image*

At this point, a short discussion regarding the operating methodology
of MIKE Zero would be beneficial. The above start page looks rather
sparse and, actually, it does very little. This is because the MIKE
suite is controlled entirely by the files linked and created in a
project and, therefore, MIKE has a number of modules that can do work
on those files. Our task as users is to populate the required files
with the data we need to run a simulation.

The collected project files are best organised by using the default
directory structure as suggested by MIKE. To do this click the **New
Project** button (highlighted in green in the above picture) and then
in the resulting dialogue box select the **General** template and
provide a name for your project such as can be seen in the figure below.
Click OK and a project file and directory structure will be set up.

*Image*

Your project should now appear in the start page and the directory
structure for your project can now be loaded by clicking on it. To
view, create,and manipulate files within this directory structure
hover the mouse over the **Project Explorer** tab to the right of
Start Page (seen in green in the first figure of this section). An
example folder structure populated with files from the training
example for the MIKE 21 HD model is shown below.


The various folders provide a structure for storing files related to
each particular task in the simulation. The **External Data** folder
holds the data that will be imported into the model, the Model\<=
/strong\> directory holds the MIKE specific files themselves, the
**Project Documents** folder holds written reports and the **Results**
folder holds the results of the simulations. Other folders can also be
created as suits the user. Note that files placed in this directory=
structure by an external program are not automatically recognised by
MIKE,they must be linked by the MIKE project explorer.

*Image*

The basic operation of MIKE is to right click folders in the project
explorer and select an appropriate task. To link existing files into
the directories, right click the folder to which they belong and
select **Add Existing File...**. The dialogue box can then be used to
locate the file you wish to include and then you can choose to either
create a link to that file or make a copy of it to be placed into the
folder as you see fit. A similar process is used to create new
folders, but folders created externally are not seen by the project
explorer.

MIKE starts to become more interesting when you right click a folder
and click **Add New File**. This provides access to all of the editors
available in the MIKE suite. The resulting dialogue box is seen
below. By adding a file for a particular purpose (such as the **Mesh
Generator**) the editor specific to the task to which that file
relates is started. Once a file is saved with the editor, it can then
be reopened by the same editor to continue work at a later date or be
used by another file type later in the simulation process.

*Image*

That completes the introduction to starting a MIKE project. Note, the
project itself does not require saving, but the files being worked on
in the editors should be saved before you quit the program or work
will be lost. MIKE will prompt you about unsaved files should you quit
MIKE or close the current project without saving.

Preparing a Coastline 
=====================

The first step in producing a mesh for a MIKE 21 SW simulation is to
import and prepare a coastline. The fidelity of this coastline is
extremely important as the MIKE meshing tool will match the grid to
each boundary point provided. The mesher is capable of adding
additional boundary points but it is not capable of removing or
ignoring some. This manipulation must be done by the user either in
advance of importing the mesh into MIKE or within the MIKE mesh editor
itself.

This restriction raises two important issues. Firstly, particularly for
large simulations, various levels of refinement for coastline data may
be required depending on the distance from the point of interest. This
means that work must be done manually to either merge coastline data
at different resolutions or manually edit the highest resolution maps
within MIKE itself.This compounds the second issue which relates to
the examination of spatial grid convergence; if it takes a large
amount of human effort to prepare one coastline then the additional
effort to prepare coastlines at three different resolutions may not be
available. Even if this effort could be reduced by mixing existing
coastline data sets, these only exist at a few different resolutions
so there are not many possible combinations.

Ideally, an automated coastline generating database that could produce
a whole coastline (or parts of a coastline) at a desired resolution
would be available. Unfortunately, no such database currently exists
but the process with which it would work is called \`[cartographic
generalization](3D"http://en.wikipedia.org/wi=)'. This process reduces
the complication of maps as the distance from the point of view
increases. Unfortunately, cartographic generalization is not perfect
as this point, but some existing software (such as GRASS GIS) is
capable of invoking a set of available methods and I will endeavour to
explore these in the future.

More information about coastline optimisation can be found in *Append=
ix B - Optimising Mesh Design in MIKE FM* from *blah blah blah*.=

Before we can do anything with the coastline data, we must retrieve it
and put it into a form that can be imported into MIKE. This process is
described on the [Retrieval and Manipulation of Data for Resource =
Modelling](3D"/display/iesscicomp/Retrieval+and+Manipulation+of+Da=)
page.


Creating a Mesh Generator File and Importing the Coastline 
============================================================

Once the coastline has been prepared in a compatible xyz format, it is
ready to be imported into MIKE. First, create a directory to store the
prepared coastline data by right clicking the **External Data** folder
in the Project Explorer and selecting **Add Folder...**. Call the
new folder **Bathymetry** and we will use this to store all the
bathymetry data required for the simulation.

*Image*

Next, to add the data file to the folder, right click the **Bathymetry**
folder and select **Add Existing File...**. Locate the
coastline data file created by MATLAB and then choose either Make copy
or **Create shortcut**. This is a judgement call as to whether this
data will be changed or not, whether it is worth the disk space to
copy the data or if there already is a copy in the directory created
by another means. Given that the data is probably in a MATLAB folder
and might be overwritten I would choose to select Make copy. If, in the
future, I told MATLAB to save coastlines in the new Bathymetry folder
then I would just create shortcuts to them. Click **OK=**. The coastline
data file should appear in the directory structure.


So now we can create a mesh file. To do this right click on the **=
Model Inputs** folder and create another sub-folder called **B=
athymetry**. Once that's made, right click on the **Bathymetry=** folder
and select **Add File...**. The **New File** dialogue box ([as seen in
the figure above](3D"#WaveResourceEstimationUsingDHIMIKE-D=)) should
appear. From the **MIKE Zero** window, select **Mesh Generator (.m=
df)**.

Some information about various map projections would be useful here. =20

You'll be asked for a map projection. The coastline data can be
converted to whatever projection you are working in, so you can simply
choose the most appropriate for the problem you're working in. A blank
workspace will open in the mesh editor. The coastline data can now be
imported. I used a very rough outline of the UK, Ireland and northern
France in a file called [low\_coast\_40=
W4E40N60N.xyz](3D"/download/attachments/146524553/low_coast_40W4E40N60N.xyz?=).
This is attached to this page if you want to try it out.

With the coastline data fie linked into your project explorer, you can
now import it into the workspace. To do this go to the **Data**menu
and select **Import Boundary...**. Find the file and click **Open**. A
dialogue box should appear, thus:

*Image*

The important part to watch for here is the **Projection** drop down
box. In the case of low\_coast\_40W4E40N60N.xyz this should be set to
**LONG/LAT**, but this depends on the projection that your land data
was produced using. Everything else should work with the defaults.

Click **OK**. You should end up with some coastline like the one on
the right.

Our next task is to prepare this coastline and the other boundaries of
the simulation so that a mesh can be generated. It is worth expanding
the workspace to see the whole area that we wish to model rather than
just the area containing the coastline data.


To change the workspace area go to **Options** \> Workspace.

At this point it is recommended to save the mesh generator file.
Remember to save it into the **Model** \> Bathymetry folder.

I named it **north\_atlantic\_mesh.mdf**.

*Image*

