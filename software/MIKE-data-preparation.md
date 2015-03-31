Wave Resource Estimation Using DHI MIKE - Data Preparation
==========================================================

This is a guide to preparing data for analysis using the SW modu= le of
DHI MIKE 21.

=20

=20

=20

**Table of Contents**

=20

=20

-   1 [Introduction](3D"#WaveResourceEstimationU=)
-   2 Starting a MIKE project
-   3 [Preparing a Coastline](3D"#WaveResourceEstimationU=)\<= /li\>=20
-   4 [Creating a Mesh Generator File and Importing the
    Coastline](3D"#WaveResourceEstimationU=)
-   5 [Completing the Model Boundaries and Generating a
    Mesh](3D"#WaveResourceEstimationU=)

=20

=20

=20

=20

= Introduction {#3D"WaveResourceEstimationUsingDHIMIKE-DataPreparation-Introduction"}
==============

=20

This is a guide to preparing data for analysis using the SW module of
th= e DHI MIKE 21 suite, which is part of the DHI MIKE Zero group of
applicatio= ns. The guide assumes that [DHI
MIKE](3D"http://www.mikebydhi.com/") is installed on a Windows opera=
ting system; note that a DHI licence is not required for the following
work= , but will be required to calculate the results of the simulation.
In addit= ion, while this guide shows the major stages of preparing a
simulation usin= g the MIKE Zero graphical interface, it is hoped that
much of this can be a= utomated using MATLAB or another programming tool
in order to reduce user d= ependence and improve stability for setting
up large simulations.

=20

The major steps in the process are as follows:

=20

1.  Import and prepare a coastline;
2.  Generate a mesh;
3.  Apply bathymetry data to the mesh;
4.  Set up boundary conditions;
5.  Add wind forcing information.

=20

These steps will be considered in greater detail in the following
sectio= ns. Where work is required externally from MIKE (for data
retrieval, etc) l= inks to other wiki pages detailing these processes
will be provided.

=20

Some of the information written here can be found in the *MIKE ZERO S=
tep-by-step training guide*, in fact many of the other training guides,=
such as the *MIKE 21 FLOW MODEL Step-by-step training guide*, requi= re
reference to this guide where knowledge is assumed. Unfortunately, no
tr= aining guide is provided for the Spectral Wave (SW) module of MIKE,
althoug= h a brief outline of the steps required is given in the *MIKE
21 SW User= Guide*. Possibly the most useful resource for the process
illustrated = here can be found in the *MESH GENERATOR* section of the
*MIKE ZE= RO PREPROCESSING & POSTPROCESSING User Guide*. It shows a
detailed = example of setting up a small mesh and this page follows the
same structure= . All the DHI MIKE documentation is provided with the
installed software.=20

Starting a MIKE project {#3D"WaveResourceEstimationUsingDHIMIKE-DataPreparation-StartingaMIKEp= roject"=""}
=======================

=20

=20 Icon=20

=20

This should probably be its own page.

=20

=20

=20

The graphical user interface (GUI) for DHI MIKE Zero is a little
counter= intuitive to the uninitiated. Thus, this section will briefly
describe the= steps for starting a MIKE Zero project. There is just one
interface to MIK= E and that is MIKE Zero. So no matter what simulations
you will be doing (M= IKE 21 HD, SW, etc, etc) it will all be controlled
from MIKE Zero. So, to b= egin, start MIKE Zero from the Windows All
Programs menu and you will be gr= eeted by the following screen:

=20

![](3D"34233fffeb695773b06b265f=)

=20

At this point, a short discussion regarding the operating methodology
of= MIKE Zero would be beneficial. The above start page looks rather
sparse an= d, actually, it does very little. This is because the MIKE
suite is control= led entirely by the files linked and created in a
project and, therefore, M= IKE has a number of modules that can do work
on those files. Our task as us= ers is to populate the required files
with the data we need to run a simula= tion.

=20

The collected project files are best organised by using the default
dire= ctory structure as suggested by MIKE. To do this click the **New
Proj= ect** button (highlighted in green in the above picture) and then
in= the resulting dialogue box select the **General** template an= d
provide a name for your project such as can be seen in the figure below.
= Click OK and a project file and directory structure will be set up.

=20

![](3D"7618e35ffe212a140da9d649=)

=20

Your project should now appear in the start page and the directory
struc= ture for your project can now be loaded by clicking on it. To
view, create,= and manipulate files within this directory structure
hover the mouse over = the **Project Explorer** tab to the right of
Start Page (seen = in green in the first figure of this section). An
example folder structure = populated with files from the training
example for the MIKE 21 HD model is = shown below.

=20

The various folders provide a structure for storing files related to
eac= h particular task in the simulation. The **External Data** fol= der
holds the data that will be imported into the model, the Model\<=
/strong\> directory holds the MIKE specific files themselves, the **Pr=
oject Documents** folder holds written reports and the **Resul= ts**
folder holds the results of the simulations. Other folders can = also be
created as suits the user. Note that files placed in this directory=
structure by an external program are not automatically recognised by
MIKE,= they must be linked by the MIKE project explorer.

=20

![](3D"004260c86a31176b0d54b7fd=)

=20

The basic operation of MIKE is to right click folders in the project
exp= lorer and select an appropriate task. To link existing files into
the direc= tories, right click the folder to which they belong and
select **Add = Existing File...**. The dialogue box can then be used to
locate the = file you wish to include and then you can choose to either
create a link to= that file or make a copy of it to be placed into the
folder as you see fit= . A similar process is used to create new
folders, but folders created exte= rnally are not seen by the project
explorer.

=20

MIKE starts to become more interesting when you right click a folder
and= click **Add New File**. This provides access to all of the ed=
itors available in the MIKE suite. The resulting dialogue box is seen
below= . By adding a file for a particular purpose (such as the **Mesh
Gener= ator**) the editor specific to the task to which that file
relates i= s started. Once a file is saved with the editor, it can then
be reopened by= the same editor to continue work at a later date or be
used by another fil= e type later in the simulation process.

=20

\
 ![](3D"afc047ad0a1f2293aedec4e5e90c05cc")

= =20

That completes the introduction to starting a MIKE project. Note, the
pr= oject itself does not require saving, but the files being worked on
in the = editors should be saved before you quit the program or work
will be lost. M= IKE will prompt you about unsaved files should you quit
MIKE or close the c= urrent project without saving.

=20

Preparing a Coastline {#3D"WaveResourceEstimationUsingDHIMIKE-DataPreparation-PreparingaCoas= tline"=""}
=====================

=20

The first step in producing a mesh for a MIKE 21 SW simulation is to
imp= ort and prepare a coastline. The fidelity of this coastline is
extremely im= portant as the MIKE meshing tool will match the grid to
each boundary point= provided. The mesher is capable of adding
additional boundary points but i= t is not capable of removing or
ignoring some. This manipulation must be do= ne by the user either in
advance of importing the mesh into MIKE or within = the MIKE mesh editor
itself.

=20

This restriction raises two important issues. Firstly, particularly for
= large simulations, various levels of refinement for coastline data may
be r= equired depending on the distance from the point of interest. This
means th= at work must be done manually to either merge coastline data
at different r= esolutions or manually edit the highest resolution maps
within MIKE itself.= This compounds the second issue which relates to
the examination of spatia= l grid convergence; if it takes a large
amount of human effort to prepare o= ne coastline then the additional
effort to prepare coastlines at three diff= erent resolutions may not be
available. Even if this effort could be reduce= d by mixing existing
coastline data sets, these only exist at a few differe= nt resolutions
so there are not many possible combinations.

=20

Ideally, an automated coastline generating database that could produce
a= whole coastline (or parts of a coastline) at a desired resolution
would be= available. Unfortunately, no such database currently exists
but the proces= s with which it would work is called \`[ca= rtographic
generalization](3D"http://en.wikipedia.org/wi=)'. This process reduces
the complication of ma= ps as the distance from the point of view
increases. Unfortunately, cartogr= aphic generalization is not perfect
as this point, but some existing softwa= re (such as GRASS GIS) is
capable of invoking a set of available methods an= d I will endeavour to
explore these in the future.

=20

More information about coastline optimisation can be found in *Append=
ix B - Optimising Mesh Design in MIKE FM* from *blah blah blah*.=

=20

Before we can do anything with the coastline data, we must retrieve it
a= nd put it into a form that can be imported into MIKE. This process is
descr= ibed on the [Retrieval and Manipulation of Data for Resource =
Modelling](3D"/display/iesscicomp/Retrieval+and+Manipulation+of+Da=)
page.

=20

Creating a Mesh Generator File and Im= porting the Coastline {#3D"WaveResourceEstimationUsingDHIMIKE-DataPreparation-CreatingaMeshG= eneratorfileandimportingthecoastline"=""}
============================================================

=20

Once the coastline has been prepared in a compatible xyz format, it is
r= eady to be imported into MIKE. First, create a directory to store the
prepa= red coastline data by right clicking the **External Data** fol=
der in the Project Explorer and selecting **Add Folder...**. C= all the
new folder **Bathymetry** and we will use this to stor= e all the
bathymetry data required for the simulation.

=20

=20

=20

=20

![](3D"c8a601816c470ecb3326c280=)

=20

=20

=20

Next, to add the data file to the folder, right click the **Bathym=
etry** folder and select **Add Existing File...**. Loca= te the
coastline data file created by MATLAB and then choose either Make copy
or **Create shortcut**. This is a judgemen= t call as to whether this
data will be changed or not, whether it is worth = the disk space to
copy the data or if there already is a copy in the direct= ory created
by another means. Given that the data is probably in a MATLAB f= older
and might be overwritten I would choose to select Make copy. If, in the
future, I told MATLAB to save coastlines in the new Bat= hymetry folder
then I would just create shortcuts to them. Click **OK=**. The coastline
data file should appear in the directory structure= .

=20

So now we can create a mesh file. To do this right click on the **=
Model Inputs** folder and create another sub-folder called **B=
athymetry**. Once that's made, right click on the **Bathymetry=** folder
and select **Add File...**. The **New F= ile** dialogue box ([as seen in
the figure above](3D"#WaveResourceEstimationUsingDHIMIKE-D=)) should
appear. Fr= om the **MIKE Zero** window, select **Mesh Generator (.m=
df)**.

=20

=20 Icon=20

=20

Some information about various map projections would be useful here. =20

=20

=20

You'll be asked for a map projection. The coastline data can be
converte= d to whatever projection you are working in, so you can simply
choose the m= ost appropriate for the problem you're working in. A blank
workspace will o= pen in the mesh editor. The coastline data can now be
imported. I used a ve= ry rough outline of the UK, Ireland and northern
France in a file called [low\_coast\_40=
W4E40N60N.xyz](3D"/download/attachments/146524553/low_coast_40W4E40N60N.xyz?=).
This is attached to this page if you want to tr= y it out.

=20

With the coastline data fie linked into your project explorer, you can
n= ow import it into the workspace. To do this go to the **Data**= menu
and select **Import Boundary...**. Find the file and cli= ck **Open**. A
dialogue box should appear, thus:

=20

![](3D"e250826749e5e7f0c17119b1=)

=20

The important part to watch for here is the **Projection** = drop down
box. In the case of low\_coast\_40W4E40N60N.xyz this should be set = to
**LONG/LAT**, but this depends on the projection that your = land data
was produced using. Everything else should work with the defaults= .

=20

=20

=20

Click **OK**. You should end up with some coastline like th= e one on
the right.

=20

Our next task is to prepare this coastline and the other boundaries of
t= he simulation so that a mesh can be generated. It is worth expanding
the wo= rkspace to see the whole area that we wish to model rather than
just the ar= ea containing the coastline data.

=20

=20 Icon=20

=20

To change the workspace area go to **Options** \> Workspace.

=20

=20

=20

At this point it is recommended to save the mesh generator file.
Remembe= r to save it into the **Model** \> Bathymetry folder.

=20

I named it **north\_atlantic\_mesh.mdf**.

=20

=20

=20

![](3D"25fbdf627b9516461143df10=)

=20

=20

Completing the Model Boundaries and Gener= ating a Mesh {#3D"WaveResourceEstimationUsingDHIMIKE-DataPreparation-CompletingtheM= odelboundariesandgeneratingamesh"=""}
=======================================================
