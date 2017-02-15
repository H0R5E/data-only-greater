---
layout:     post
title:      DTOcean Installation Solution
categories: [latest, professional]
tags:       [DTOcean, open source, bugs, installation]
---

## Sporadic Installation Issues Reported

Following the release of DTOcean (see
[DTOcean: An Introduction]({{ site.baseurl }}{% post_url 2017-01-30-dtocean-introduction %}))
a significant number of users reported issues with the installer crashing. This
occurred after the main code installer had finished, when the hydrodynamic data
installer fails to find the chosen installation directory.

![Installation Error]({{ site.baseurl }}/assets/images/dtocean/directory-not-found.png)

## Missing Registry Key

The symptom of this error is clear. The hydrodynamic data installer is looking 
for a registry key that contains the installation directory. This key should be 
written by a small script which is executed at the termination of the first
installer. The registry key that should be written is
**HKEY\_CURRENT\_USER\\Software\\DTOcean**, subkey **INSTALL_DIR**, however it 
is evident that this key was not written for those suffering this bug.

![Missing Key]({{ site.baseurl }}/assets/images/dtocean/missing-key.png)

## Uncertain Causes

It is currently not clear why the post-install script is not working for some
systems whilst working for others. Some possibilities include:

* The script is failing. This could be from the commands not being recognised on
  certain systems (or within certain shells).
* The user does not have sufficient rights to either run the script or write to
  the registry
* Anti-virus software is blocking the execution of the script.

Without some logging from the script to see why it failed to execute properly,
it's hard to accurately diagnose the problem. To this end, I created an issue
for Anaconda Constructor [here](https://github.com/conda/constructor/issues/63).

## Temporary Solution

As the post-install script is not working in all cases, to solve this issue
the user must write the installation directory to the registry prior to
installing DTOcean.

To facilitate this, I have written a batch script which, when executed, will
prompt the user to enter the chosen directory.

![Pre-install Script]({{ site.baseurl }}/assets/images/dtocean/dtocean-pre-install.png)

The script can be downloaded using this
[link](https://gist.github.com/H0R5E/1b2f915f9f4e44ed179614e4b54e4d41/archive/4b2a0c6ad72db42d3f9392115f3e1c15eaf3e318.zip).
Once extracted, double click the _dtocean\_pre\_install.bat_ script and follow
the prompts, as shown in the image above.

Note, that the directory entered in the pre-install script must match exactly
the directory entered into the installer. Also, the installation directory
**must not exist** prior to beginning the installation. If the directory exists
following a failed installation, either attempt to uninstall or delete it
manually.

This solution should allow the current version of DTOcean (1.0) to be installed
while a more robust fix is developed for future releases.

### Notes

* The top image is courtesy of Sterling Olson of Sandia National Labs
* Follow the related issue on Github:
  [DTOcean/dtocean-issues#3](https://github.com/DTOcean/dtocean-issues/issues/3)
* Join the [DTOcean mailing list](https://groups.google.com/d/forum/dtocean)




