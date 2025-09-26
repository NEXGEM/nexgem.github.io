---
title: Team
nav:
  order: 3
  tooltip: About our team
---

# <i class="fas fa-microscope"></i> **Principal Investigator**
{% include section.html %}

{%
  include list.html
  data="members"
  component="portrait"
  filters="role: pi"
%}

{% include section.html %}

# <i class="fas fa-microscope"></i> **Postdoctoral researchers**
{%
  include list.html
  data="members"
  component="portrait"
  filters="role: postdoc"
%}

# <i class="fas fa-users"></i> **Student researchers**
{%
  include list.html
  data="members"
  component="portrait"
  filters="role: phd"
%}
{%
  include list.html
  data="members"
  component="portrait"
  filters="role: mdphd"
%}

# <i class="fas fa-users"></i> **Intern**
{%
  include list.html
  data="members"
  component="portrait"
  filters="role: undergrad"
%}
{:.center}

{% include section.html background="images/banner.png" dark=true%}

Our lab is looking for ambitious individuals eager to advance scientific research. Join a team where innovation meets impact, in an environment fostering collaboration and diversity. Make your mark in a place where every contribution propels us forward. Apply now to be part of the change!

{% include button.html icon="fas fa-hands-helping" text="Join the Team" link="contact" %} {:.center}

