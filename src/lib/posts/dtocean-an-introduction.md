---
title: "DTOcean: An Introduction"
date: "2017-01-30"
updated: "2017-01-30"
coverImage: "/images/dtocean/capex-pie.png"
coverWidth: 500px
coverHeight: 375px
categories: [DTOcean, open source, ocean energy]
---

## What is DTOcean?

The official launch of the DTOcean software tool was announced on the 9th of
January 2017. This was the final official output of a 3 year, 6 million Euro
project to deliver a software tool to improve the decision making around designing
arrays of ocean energy (wave and tidal) devices. Alongside the press release
an installable graphical desktop tool (as seen above) and all its associated source code was
made available to download by the general public under various open source
licenses.

DTOcean is an ocean energy converter array planning tool that can be used to
evaluate the impact of design decisions against quantitative metrics such as the
levelised cost of energy. Various design choices can be evaluated using the 5
design modules: Hydrodynamics, Electrical Sub-systems, Moorings and Foundations,
Installation and Operations and Maintenance. The results of varying parameters
across these 5 modules can then be directly compared.

## Who Developed it?

DTOcean was developed across 18 institutions across Europe (please see
[the official DTOcean website](http://www.dtocean.eu/) for further details). The bulk of
the software development fell to about 8 of these, with [Tecnalia Research and
Innovation](http://www.tecnalia.com/en/), of the Basque Country, playing a key role. In late 2014, I started a
Marie Curie fellowship with the marine energy group of Tecnalia and I was
principally working on DTOcean until the end of my contract in December 2016.

![DTOcean Team](/images/dtocean/team-in-Antwerp.jpg)

My role on the project was to coordinate the integration of the design modules
and develop the framework for handling data between the modules, scheduling
their execution, and interacting with the user through a graphical user interface.
I also defined the unified data model that is observed and populated by the user
of the tool.

I was not responsible for the development of the computational modules
themselves or the supplementary database (they were led by other partners),
although I did contribute to these projects and tried to coordinate their
interactions with the other components of
the tool. I was also not the sole contributor to the integration process:
Vincenzo Nava, David Bould, Adam Collin, Rui Duarte and Francesco Ferri all
contributed to giving the software as much functionality as possible by configuring
and building upon the underlying framework.

## Building a Community

Currently the installers, source code and supplementary data can be downloaded
from [SETIS](https://setis.ec.europa.eu/dt-ocean), all of which corresponds to
the 1.0 release at the end of the project. Although this portal provides a
permanent home for these files it does not facilitate community engagement or
future development.

To begin the process of developing a user community around DTOcean, I have
placed all the source code onto the [GitHub][1]
repository service. The "organisation" [DTOcean][1]
contains a repository for each component (and subcomponent) of the tool and
an important additional repository called [dtocean-issues][2].

The [dtocean-issues][2] repository facilitates community engagement by
allowing users of the integrated graphical tool to submit bugs or questions
or even to suggest future improvements to the software. If you are using
DTOcean and want to provide some feedback I would encourage you to open an
issue.

![DTOcean GUI](/images/dtocean/github.png)

Although there is no formal, funded support for DTOcean at this point,
collecting the experiences of the users will be invaluable for assessing how
much interest the tool has among the ocean energy community and how it could
be improved should resources become available in the future.

## Building a Future

A lot of work remains to be completed to organise the future development and
exploitation of DTOcean. Currently, I am available to do a small amount of
unpaid work to help disseminate the tool and advise potential users, but it
is important for the future of the tool that some funding can be secured in
order to improve the stability and accuracy of the software and respond to
issues raised by the user community.

Although DTOcean has garnered significant interest from various actors such
as research institutions and device developers, neither the tool itself, or
the industry it is designed for, is mature enough to appeal to the utilities that
would pay for its full exploitation.

Even though the software itself is free, the investment
of time to develop and improve it is not. Ultimately, the success of
DTOcean will be judged on whether it can attract the funding required to
secure its future. Developing a strong user community is the first step to
achieving that goal.

[1]: https://github.com/DTOcean
[2]: https://github.com/DTOcean/dtocean-issues
