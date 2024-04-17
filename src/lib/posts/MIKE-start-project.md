---
layout: simple
title: Wave Resource Estimation Using DHI MIKE - Starting a MIKE project
---

<p class="message">
This page provides a brief tutorial for starting a DHI MIKE project
for the first time.
</p>

## Contents

<!-- {:.no_toc} -->

<!-- 1. This will become a table of contents (this text will be scraped).
{:toc} -->

## Mike ZERO

The graphical user interface (GUI) for DHI MIKE Zero is a little
counter intuitive to the uninitiated. Thus, this page will briefly
describe the steps for starting a MIKE Zero project.

There is just one interface to MIKE and that is MIKE Zero. So no
matter what simulations
you will be doing (MIKE 21 HD, SW, etc, etc) it will all be controlled
from MIKE Zero.

So, to begin, start MIKE Zero from the Windows "All
Programs" menu and you will be greeted by the following screen:

![](/images/MIKE/MIKE_ZERO_start_page.png)

## Projects

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

![](/images/MIKE/MIKE_new_project.png)

Your project should now appear in the start page and the directory
structure for your project can now be loaded by clicking on it. To
view, create,and manipulate files within this directory structure
hover the mouse over the **Project Explorer** tab to the right of
Start Page (seen in green in the first figure of this section). An
example folder structure populated with files from the training
example for the MIKE 21 HD model is shown below.

## Structuring MIKE Modules and Files

The various folders provide a structure for storing files related to
each particular task in the simulation. The **External Data** folder
holds the data that will be imported into the model, the **Model**
directory holds the MIKE specific files themselves, the
**Project Documents** folder holds written reports and the **Results**
folder holds the results of the simulations. Other folders can also be
created as suits the user. Note that files placed in this directory
structure by an external program are not automatically recognised by
MIKE,they must be linked by the MIKE project explorer.

![](/images/MIKE/MIKE_project_explorer.png)

The basic operation of MIKE is to right click folders in the project
explorer and select an appropriate task. To link existing files into
the directories, right click the folder to which they belong and
select **Add Existing File...**. The dialogue box can then be used to
locate the file you wish to include and then you can choose to either
create a link to that file or make a copy of it to be placed into the
folder as you see fit. A similar process is used to create new
folders, but folders created externally are not seen by the project
explorer.

## Adding Modules

MIKE starts to become more interesting when you right click a folder
and click **Add New File**. This provides access to all of the editors
available in the MIKE suite. The resulting dialogue box is seen
below. By adding a file for a particular purpose (such as the **Mesh
Generator**) the editor specific to the task to which that file
relates is started. Once a file is saved with the editor, it can then
be reopened by the same editor to continue work at a later date or be
used by another file type later in the simulation process.

![](/images/MIKE/MIKE_add_new_file.png)

## Saving your Work

That completes the introduction to starting a MIKE project. Note, the
project itself does not require saving, but the files being worked on
in the editors should be saved before you quit the program or work
will be lost. MIKE will prompt you about unsaved files should you quit
MIKE or close the current project without saving.
