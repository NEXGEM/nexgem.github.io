---
title: Team
nav:
  order: 2
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

{% include link.html icon="fas fa-hands-helping" text="Join the Team" link="contact" style="button" %} {:.center}


{% include section.html %}

## **Funding**

Our work is made possible by funding from the following organizations.
{:.center}

{%
  include gallery.html

  image1="images/funding/skku.jpeg"
  link1="https://www.skku.edu/"
  tooltip1="SungKyunKwan university"
  
  image2="images/funding/samsung_미래2.png"
  link2="https://www.samsungstf.org/"
  tooltip2="Samsung Science & Technology"

  image3="images/funding/posco_청암.png"
  link3="https://www.postf.org/"
  tooltip3="POSCO TJ Park Foundation"

  image4="images/funding/NRF.png"
  link4="https://www.nrf.re.kr/"
  tooltip4="National Research Foundation of Korea"

%}
{:.center}
