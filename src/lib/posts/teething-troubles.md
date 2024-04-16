---
title: "Teething Troubles: Responsive Menus in Hyde"
date: "2015-04-06"
updated: "2024-04-16"
coverImage: "/images/ipad_problems.png"
coverWidth: 1026px
coverHeight: 667px
categories: [dataonlygreater, web development, responsive, Hyde]
---

So, after looking so nice on desktop and mobile, it turns out that
dataonlygreater.com has some problems when it comes to ipads. I first noticed
this on my Dad's ipad, but there is also a neat online tool called
[Screenfly](http://quirktools.com/screenfly/) that will let you see your
website using the resolution of many different devices. The results of looking
at the [Academic](https://www.dataonlygreater.com/academic) page using ipad
resolutions were like this:

Now [Hyde](http://hyde.getpoole.com/) is a fully resposive template for
Jekyll, meaning that it should display well on all devices, by rearranging
itself or modifying the text size. I did make one change to the base Hyde
configuration, in this respect, changing a number of the "@media" CSS commands from

```css
@media (min-width: 48em);
```

to

```css
@media (min-width: 48em) and (min-height: 32em);
```

The main navigation is in the side menu, so the problem with the first command was that if the
screen height was small, and the width was wide, the menu would be lost and
you could not navigate the site any more. This was the only "flaw" I found in
the stock Hyde template.

Rather than Hyde, the problem that has shown itself with the navigation buttons
on ipads is of my own doing. These navigation buttons were one of
the last additions I made before launching the site (perhaps that's why I didn't
test it as well as I should have!) and are modifications of [Code a Responsive
Navigation Menu](http://designshack.net/articles/css/code-a-responsive-navigation-menu/) by Joshua Johnson.
To make them fit into the responsiveness method of Hyde, which uses min-widths,
I changed the CSS styles of the menus to this:

```css
@media (min-width: 48em) {
  .navmenu.academic nav li a {
    width: 31%;
    font:
      400 1.5rem "Luckiest Guy",
      cursive;
    margin: 4px;
  }
}
```

The problem here is that I have not been very sympathetic to the way that
Hyde changes with increasing width. There are, in fact, 3 different stages once
the sidebar is to the left, including a font size change and a margin size
change. These changes occur at 54em and 64em, with the switch to the left
sidebar starting at 48em. So, I needed to add more responsiveness in the
navigation buttons to cope with these changes.

My solution then was to keep the stacked menu until the font size changes at
54em and then add two more font size changes in the menu buttons at "full-screen"
(80em) and an intermediate stage (72em) where the font is becoming a bit lost
in the button. So the new CSS looks like this:

```css
@media (min-width: 58em) {
  .navmenu.academic nav li a {
    width: 32%;
    font:
      400 0.7rem "Luckiest Guy",
      cursive;
  }
  .navmenu.academic nav small {
    font:
      100 0.65rem Helvetica,
      sans-serif;
  }
}

@media (min-width: 72em) {
  .navmenu.academic nav li a {
    font:
      400 1rem "Luckiest Guy",
      cursive;
  }
  .navmenu.academic nav small {
    font:
      100 0.7rem Helvetica,
      sans-serif;
  }
}

@media (min-width: 80em) {
  .navmenu.academic nav li a {
    margin: 6px 2px;
    font:
      400 1.25rem "Luckiest Guy",
      cursive;
  }
  .navmenu.academic nav small {
    font:
      100 0.8rem Helvetica,
      sans-serif;
  }
}
```

Thus we now have a functioning 3-column in page navigation menu for Hyde, and
the [Software](https://www.dataonlygreater.com/software/) page has a 2-column
menu. Nonetheless, these menu solutions need a great deal of tailoring
depending on the contents and the environment they are deployed into, so,
sadly, I don't think this will ever be a simple cut and paste solution for
other Hyde bases projects.
