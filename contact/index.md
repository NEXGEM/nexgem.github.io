---
title: Contact
nav:
  order: 5
  tooltip: Email, address, and location
---

<section class="page-hero">
  <p class="page-kicker">Connect</p>
  <h1>Contact</h1>
  <p class="page-lead">
    We welcome inquiries about collaboration, recruitment, and research opportunities related to computational oncology and experimental cancer biology.
  </p>
</section>

{% include section.html %}

<section class="page-section">
  <div class="page-section-head">
    <p class="page-kicker">Recruitment</p>
    <h2>Current opening</h2>
    <p>We are currently recruiting experimental cancer biologists with an M.S. degree for mouse experiment-centered research projects.</p>
  </div>
  <div class="page-contact-list">
    {%
      include button.html
      type="email"
      text="joosang.lee@skku.edu"
      link="joosang.lee@skku.edu"
    %}
    {%
      include button.html
      type="phone"
      text="031-299-6107"
      link="031-299-6107"
    %}
  </div>
</section>

<section class="page-section">
  <div class="page-section-head">
    <p class="page-kicker">Visit</p>
    <h2>Lab contact information</h2>
    <p>Reach out directly or use the map link for directions to the lab and affiliated campus locations.</p>
  </div>
  <div class="page-contact-list">
    {%
      include button.html
      type="phone"
      text="031-299-6110"
      link="031-299-6110"
    %}
    {%
      include button.html
      type="address"
      tooltip="Our location on Google Maps for easy navigation"
      link="https://goo.gl/maps/esAoSh75Xyfkknra8"
    %}
  </div>
</section>

<section class="page-section">
  <div class="page-section-head">
    <p class="page-kicker">Campus</p>
    <h2>Location highlights</h2>
    <p>A quick visual reference for the campus and medical school environment surrounding the lab.</p>
  </div>
  <div class="page-image-grid">
    <div class="page-media-card">
      {%
        include figure.html
        image="images/성균관대정문.jpg"
        caption=""
      %}
    </div>
    <div class="page-media-card">
      {%
        include figure.html
        image="images/성균관대의대.jpg"
      %}
    </div>
  </div>
</section>
