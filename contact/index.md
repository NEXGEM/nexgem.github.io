---
title: Contact
nav:
  order: 5
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact

We are currently recruiting experimental cancer biologists with M.S degree for mouse experiments. 

{%
  include button.html
  type="email"
  text="lee.joosang@gmail.com"
  link="lee.joosang@gmail.com"
%}
{%
  include button.html
  type="phone"
  text="010-9711-7459"
  link="010-9711-7459"
%}
{%
  include button.html
  type="address"
  tooltip="Our location on Google Maps for easy navigation"
  link="https://goo.gl/maps/esAoSh75Xyfkknra8"
%}

{% include section.html %}

{% capture col1 %}

{%
  include figure.html
  image="images/skku_logo.png"
  caption=""
%}

{% endcapture %}

{% capture col2 %}

{%
  include figure.html
  image="images/skku_med.jpeg"
  caption="Medical school"
%}

{% endcapture %}

{% include cols.html col1=col1 col2=col2 %}

{% include section.html dark=true %}

{% capture col1 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% capture col2 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% capture col3 %}
Lorem ipsum dolor sit amet  
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}
