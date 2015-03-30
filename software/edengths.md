---
layout: simple
title:  Engineering Latex Thesis Template
---

<div class="isa_success">
     <i class="fa fa-check"></i>
     <p>
     On <b>03/05/13</b> the way that the template reproduces hyperlink colours was improved.
     </p>
</div>

<div class="isa_success">
     <i class="fa fa-check"></i>
     <p>
     On <b>19/04/13</b> the template has been updated to correctly format
     <a href="http://en.wikibooks.org/wiki/LaTeX/Document_Structure#Sectioning_commands"><b>parts</b></a>.
     </p>
</div>

This page describes how to download and compile the engineering thesis
latex template.


Introduction
============

This page is for recording information about the usage of the latex
thesis template that was authored by Mathew Topper over 2010 and 2011.
This template is appropriate for the current thesis regulations which
**[can be found
here](http://www.ed.ac.uk/schools-departments/academic-services/policies-regulations/regulations/assessment)**
and, yes, they do want a Sans font for the titles. Fortunately, the
template has a number of built in options (which can use just serif
fonts, for instance) so there is a level of customisation available.
These options will be explained in greater detail, along with
installation and usage instructions, below.

Installation
============

<div class="isa_warning">
     <i class="fa fa-warning"></i>
     <p>
     <b>19/04/13</b> The paths to the edengths template have changed due to 
     account migration. The new paths are listed below.
     </p>
</div>

Standard Version
----------------

The template is easily downloaded via a linux terminal. If you don't
know what a linux terminal is then [this
page](/display/iesscicomp/Starting+a+Linux+Program) might help. The
template is stored in a Subversion (SVN) repository and to make a copy
of the main code (trunk) issue the command:

    svn export https://svn.ecdf.ed.ac.uk/repo/user/mtopper/latex/edengths/trunk edengths

This will create a folder called "edengths" within the directory which
you ran the above command. This folder contains all the files to run the
template and all latex commands should be run in this directory.

If you are using Windows, then I am going to produce "builds" of the
files for download from my personal webspace. To get hold of these go to:

[http://www.see.ed.ac.uk/\~mtopper/public\_download/edengths-builds/](http://www.see.ed.ac.uk/~mtopper/public_download/edengths-builds/)

The standard template is in the *edengths-trunk.zip* file which, once
downloaded, can be extracted to the folder of your choice.

Nomenclature Version
--------------------

<div class="isa_success">
     <i class="fa fa-check"></i>
     <p>
     There are some additional compilation stages required with this template
     which are detailed below the normal compilation.
     </p>
</div>

There is a version of edengths which is set up to use the nomencl
package (don't worry if you don't know what a package is yet), which
allows you to build a nomenclature as you are writing your thesis. The
effect of including this on the template was deemed significant enough
to give this version of the code its own home (branch) and therefore it
must be retrieved in a different manner. It get it via SVN, issue the
command:

     svn export https://svn.ecdf.ed.ac.uk/repo/user/mtopper/latex/edengths/branches/nomencl edengths

and the build in
[http://www.see.ed.ac.uk/\~mtopper/public\_download/edengths-builds/](http://www.see.ed.ac.uk/~mtopper/public_download/edengths-builds/)
will be named *edengths-nomencl.zip*.

Choosing an Editor and Compiling
================================

If you've never done latex before then it can be a bit daunting. Some
people never really get it, but if you do then the strength of this
excellent typesetting system will enable you to make professional
looking, quality documents with relative ease. The main trick is to
treat it like a programming language, so if you're reading this on this
scientific computing wiki, then you should be all right. Anyway, a lot
of the hard stuff has been done for you in the template and it will
produce something without you needing to change anything. This section
will describe various methods to *compile* the template.

Choosing an editor is an important part of the process. A dedicated
latex editor makes the whole process a lot easier by providing menus and
shortcuts to commands that you will need to format and prepare the
document. In Linux, the best latex editor is Kile, which comes as part
of the KDE desktop. For windows, there is a choice between TeXnicCenter
and TexMaker (both available through Machination). Although an editor is
a must for compiling your documents in Windows, you don't actually need
one to do it in Linux. So, after describing how to compile the document
in Kile, and TeXnicCenter, I will describe how it can be done just with
the Linux terminal.

<div class="isa_error">
   <i class="fa fa-times-circle"></i>
   <p>
   The terminal only approach still needs to be written.
   </p>
</div>


In addition, the LyX editor is a convenient alternative to working
directly with latex source code.  LyX is a WYSIWYG-like front end to
LaTeX that may be of interest to users who are more comfortable with
Word.  It is available in Linux but not on Windows Machination.
Unfortunately, this template has not been ported to Lyx.

<div class="isa_info">
   <i class="fa fa-info-circle"></i>
   <p>
   If someone would like to port the template to Lyx, the author would be
   most grateful.
   </p>
</div>

Kile (Linux)
------------

Assuming that you are comfortable starting a Linux program (if not you
can look [here](/display/iesscicomp/Starting+a+Linux+Program)), the you
need to start Kile, either through the start menu or using a terminal.
Kile looks like this:

![]({{ site.baseurl }}/assets/images/kile_front_boxes.png)

The highlighted regions are for the purposes of the following steps. The
blue box is for opening files, the red box is the group of buttons for
compiling, and the green box shows the area where the results of the
compilation are displayed. The next three sections will demonstrate how
to open and compile the template.

**Open the edengths.tex file.**

Click the open file icon seen in the blue box in the above picture and
find the folder with the edengths template within it. Within that folder
is a file called **edengths.tex** (this is the master file which will
load all of the other files that go into making the document. This file
also provides the highest level control on the style of the document via
the available options as will be discussed later on this page). Once the
file is open the main window should fill with text the second line
saying "*%% edengths.tex - LaTeX2e thesis driver*". The file is heavily
commented in order to compensate for not having made much other
documentation for it yet. The comments *should* explain what each
command in the file is for. Note that the first command doesn't appear
until the 91st line! Anyway, you don't need to do anything to this file
right now, the next stage is to compile it.

**Choose a compilation route**

Depending on certain choices, there are a few different routes that can
be used to produce a pdf of a latex document. One key choice is the
format of images that are used. If jpg or pdf images are what you want
to use the pdflatex is what you need, or if you wish to use eps files
then standard latex is required. Both approaches have their
advantages/dissadvantages and some graphics packages (such as pstricks)
need to take the latex route. The template will compile via either
route, but you should make a decision about which of these you are going
to use as you can not have a mix of eps and jpg or pdf images.
Nonetheless, in Kile, all of these routes can be controlled with the
following buttons.

![]({{ site.baseurl }}/assets/images/kile_compile_notes.png)

I shall now describe these routes.

###### Blue: Latex, PDF (pdfLaTeX)

PdfLaTeX will compile a Latex file directly into a PDF document. As can
be seen this is the shortest route to compilation of Latex. If the user
wishes to use PDFLatex then they must make sure all diagrams are either
in JPG or PDF format. JPGs don't scale as nicely as the traditional EPS
format graphics used by Latex, but EPS can be converted to PDF which
will allow scalable output.

One disadvantage of this route is that some latex packages work at the
DVI (device independent file format) stage of the traditional
compilation route. Notably a drawing package called pstricks can create
drawings (such as flow charts) when the DVI is converted to a postscript
file (PS). If you want to use pstricks then pdfLatex is not appropriate.

###### Red: Latex, DVI, Postscript, PDF

This is the traditional route for compiling a Latex document (before
PDFs were invented). The standard Latex command makes a DVI, then the
DVI is converted to a Postscript file (PS) and then finally the PS is
converted to a PDF. When the original Latex command is used only EPS
diagrams may be used - no bitmaps. Generally this method is the most
reliable and will allow all Latex packages (like pstricks) to be used.

###### Green: Latex, DVI, PDF (dvipdfmx)

If you like EPS diagrams (some of us weirdos do) but don't need a
postscript stage, then there is a converter that can turn a DVI into a
PDF called DVIPDFMx. This reduces the amount of clicking by one but
precludes the use of packages like pstricks. So it's a bit like pdfLatex
but for EPS diagrams.

**Compile the bibliography with bibTeX**

The thesis template uses bibTeX to manage bibliographical entries. This
is one of the great strengths of Latex, but it does add an extra step to
the compilation route. Once Latex or pdfLatex has been called there will
be a number of errors regarding unknown references. This is when the
bibtex file contained in the template must be compiled.

To do this **BibTeX** must be run from the **Build** \> **Compile** menu
as seen in the figure below:

![]({{ site.baseurl }}/assets/images/kile_bibtex.png)

After the compilation was successful, Latex or Pdflatex will need to be
run **twice** in order to finish the cross referencing.

<div class="isa_info">
   <i class="fa fa-info-circle"></i>
   <p>
   Its probably of interest to write something about the referencing
   capabilities of latex and about Jabref.
   </p>
</div>

TeXnicCenter (Windows)
----------------------

<div class="isa_warning">
   <i class="fa fa-warning"></i>
   <p>
   Windows uses the MiKTeX Latex distribution as the backend to the
   editors. The default installation of MiKTeX does not work properly with
   TeXnicCenter, so the following changes must be made first.
   </p>
</div>

**Preparing the MiKTeX distribution**

TeXnicCenter uses MiKTeX as its Latex backend; it will call commands
provided by MiKTeX to compile your documents. **It is not fully
compatible with TeXnicCenter using its default settings.** MiKTeX has a
clever package management system that will download missing Latex
packages automatically. Unfortunately, by default MiKTex is set to ask
the user whether they want the package to be downloaded. TeXnicCenter
can't handle this dialogue box so fails without giving an error, you
just get:

> LaTeX-Result: 0 Error(s), 0 Warning(s), 0 Bad Box(es), 0 Page(s)

To stop this behaviour the settings of the MiKTeX distribution must be
changed. To find them, go to **Start \> All Programs \> MiKTeX 2.9 \>
Maintenance \> Settings**. There may be a warning that the distribution
can't be found but just do what it says and this will sort itself out.
Finally, you will get a screen like this:

![]({{ site.baseurl }}/assets/images/MiKTex_Settings2.png)

<div class="isa_success">
   <i class="fa fa-check"></i>
   <p>
  To fix the problem go to the <b>General</b> tab and change the value in the 
  drop down box for <b>Package installation</b> from <b>Ask me first</b> to 
  <b>Yes</b>. 
   </p>
</div>

Now when TeXnicCenter is run MiKTeX will automatically download missing
packages and you should see this happen in the output window.

<div class="isa_info">
   <i class="fa fa-info-circle"></i>
   <p>
  The above fix was suggested by
  <a href="http://miktex.org/2.9/issues">http://miktex.org/2.9/issues</a>.
   </p>
</div>

**Setting up TeXnicCenter**

When TeXnicCenter is first starting it needs to know the location of the
Latex distribution.

<div class="isa_success">
   <i class="fa fa-check"></i>
   <p>
    Once the setup wizard has started then choose the path to the latex
    executables as **C:\\texmf\\miktex\\bin**.
   </p>
</div>

It will also ask for the path to other viewers. If you want a postscript
viewer you will have to install **GhostView 4.9**. The path to the
exucatable for ghostview is **C:\\Program Files\\gsview\\gsview32.exe**.

**Open the template and choose a compilation route**

Similar to the method used for
[\#Kile](#EngineeringLatexThesisTemplate-Kile) there are a number of
compilation routes that can be chosen. Start by opening the main
**edengths.tex** file in the top directory of template structure. The
compilation options are then available in the drop-down menu marked in
red in the figure below:

![]({{ site.baseurl }}/assets/images/TeXnicCenter_compile.png)

These options are identical to the routes that can be used to compile
the document using [\#Kile](#EngineeringLatexThesisTemplate-Kile), so I
won't describe their differences again. Once an appropriate route has
been chosen the three buttons in the green box in the figure can be used
to compile and view the output. The button on the far right of the three
does the compilation and opens the viewer in one step, which is good for
PDFlatex, but this might not be appropriate if you have many stages of
compilation to go through (or need to run BibTeX).

Note that new compilation routes can be added to TeXnicCenter which
could be handy if you wanted to do Latex =\> DVI =\> PDF, for instance.
It will also do multiple conversion in one go which the current version
of kile is not capable of.

**Compile the Bibliography with BibTeX**

Again, to get the references and bibliography correct in the template,
BibTeX must be run after Latex has been called. There is no button for
BiBTeX, so it must be called through the menus as illustrated below:

![]({{ site.baseurl }}/assets/images/TeXnicCenter_bibtex.png)

Assuming BibTeX compiled successfully, LateX will need to be run
**twice** more before all of the cross referencing is completed.

Compiling the Nomenclature Version
==================================

Generally the compilation for the Nomenclature version of the template
follows the steps above for the standard version. In addition to the
above, there is another step which must be taken to prepare the
nomenclature for inclusion in the document. This process is similar but
different in Linux and Windows so I will now describe both separately.
In both cases a special invocation of the program "makeindex" is
required.

Linux
-----

For Linux I have prepared a bash script that will make the necessary
call. Once latex or pdf latex had been called once, [open a
terminal](/display/iesscicomp/Starting+a+Linux+Program) and change the
working directory to the template directory ie.

    >> cd some/path/to/the/template/edengths

Once you're in the right directory run the makenomencl.sh script by
typing

    >> ./makenomencl.sh

If this doesn't work it might be because the file has not been given the
correct permissions. To fix this type:

    >> chmod 777 makenomencl.sh


If the script has run successfully you should see output like this:

    This is makeindex, version 2.14 [02-Oct-2002] (kpathsea + Thai support).
    Scanning style file /usr/share/texmf/makeindex/nomencl/nomencl.ist..
    ........done (10 attributes redefined, 3 ignored).
    Scanning input file edengths.nlo....done (5 entries accepted, 0 rejected).
    Sorting entries....done (13 comparisons).
    Generating output file edengths.nls....done (11 lines written, 0 warnings).
    Output written in edengths.nls.
    Transcript written in edengths.ilg.

Finally, in a similar manner to bibtex, you will need to run latex or
pdflatex **twice** more to finish the nomenclature.

Windows - TeXnicCenter
----------------------

For using TeXnicCenter we need to create a special build profile that will
invoke makeindex in the correct fashion. This is not too hard to  do.
Firstly, open the **Define Output \*Profiles...** dialogue box by using the
**Build** menu as seen in the diagram to the left.

When the dialogue box is open, we need to make a new profile based on
the compilation route you want to use. I've chosen the Latex =\> PDF
route to make a copy of as seen below:

![]({{ site.baseurl }}/assets/images/TexNic_copy_profile.png)

Click **Copy** and call the profile name something like **LaTeX =\> PDF
=\> MakeIndex**. The next stage is to add the MakeIndex command to this
profile.

![]({{ site.baseurl }}/assets/images/TexNic_new_post.png)

Referring to the above figure, select the new profile (in blue) and
click the **Postprocessor** tab (in green). The select the **New
(insert)** button (in red). Given the new command a name like
**MakeIndex**.

The final stage is to fill in the commands for MakeIndex. The end result 
can be seen in the diagram to the right. For the **Executable** box click
the **...** button (seen in green) and find **makeindex** (the full path
can be seen in the diagram). Next, in the **Arguments** box, enter the code:
    
    -s nomencl.ist "%tm.nlo" -o "%tm.nls" 

Finally click **OK** and the profile will be set up.

Similarly to bibtex it will be necessary to run the new profile **at least
twice maybe three times** for the compilation to complete. 

This section was reproduced from
[http://eldemet.wordpress.com/2009/08/06/using-nomenclatures-in-texniccenter/](http://eldemet.wordpress.com/2009/08/06/using-nomenclatures-in-texniccenter/)