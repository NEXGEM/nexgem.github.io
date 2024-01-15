---
title: Team
nav:
  order: 2
  tooltip: About our team
---

# <i class="fas fa-microscope"></i>Principal Investigator
{% include section.html %}

Next Generation Medicine Lab studies ...

{%
  include list.html
  data="members"
  component="portrait"
  filters="role: pi"
%}

{% include section.html %}

# <i class="fas fa-microscope"></i>Postdoctoral researchers
{%
  include list.html
  data="members"
  component="portrait"
  filters="role: postdoc"
%}

# <i class="fas fa-users"></i>Researchers
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

# <i class="fas fa-users"></i>Intern
{%
  include list.html
  data="members"
  component="portrait"
  filters="role: undergrad"
%}

{:.center}

## Funding

Our work is made possible by funding from the following organizations.
{:.center}

{%
  include gallery.html

  image1="images/funding/skku.jpeg"
  link1="https://www.skku.edu/"
  tooltip1="SungKyunKwan university"
  
  image2="images/funding/samsung.png"
  link2="https://www.samsungstf.org/"
  tooltip2="Samsung Science & Technology"

%}
{:.center}
