---
---

# Next Generation Medicine Lab

Next Genernation Medicine Lab (NEXGEM) aims to integrate the biological big-data with AI and data science approaches and cutting-edge experimental techniques to find a better way to treat cancer patients. Our research covers highly translationally important questions in multiple fields of cancer biology including cancer immunotherapy. In particular, we focus on precision cancer medicine, tailoring the cancer treatments based on the molecular markup of individual patients from the perspective of AI and data science.

{% include section.html %}

## Highlights

{% capture text %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.


{%
  include gallery.html
  style="square"

  image1="images/ikc.jpg"
  link1="research"
  tooltip1="Ecological monitoring"

  image2="images/ikc.jpg"
  link2="research"
  tooltip2="Sustainable seafood"

  image3="images/ikc.jpg"
  link3="research"
  tooltip3="Extreme events"

  image4="images/ikc.jpg"
  link4="research"
  tooltip4="Socio-ecological dynamics"



%}


{%
  include button.html
  link="research"
  text="See our publications"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/select2.jpg"
  link="research"
  title="Our Research"
  text=text
%}

{% capture text %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

{%
  include button.html
  link="tools"
  text="Browse our projects"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/photo.jpg"
  link="projects"
  title="Our Projects"
  flip=true
  style="bare"
  text=text
%}

{% capture text %}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

{%
  include button.html
  link="team"
  text="Meet our team"
  icon="fa-solid fa-arrow-right"
  flip=true
  style="bare"
%}

{% endcapture %}

{%
  include feature.html
  image="images/photo.jpg"
  link="team"
  title="Our Team"
  text=text
%}
