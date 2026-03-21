---
title: Publications
nav:
  order: 3
  tooltip: Published works
---

<section class="publications-hero">
  <p class="publications-kicker">Research Archive</p>
  <h1>Selected publications and ongoing scientific contributions</h1>
  <p class="publications-lead">
    Explore the lab's publication record through image-led citation cards designed to keep each paper's key figure visible, legible, and easy to scan.
  </p>
</section>

{% include section.html %}

<section class="publications-section">
  <div class="publications-section-head">
    <p class="publications-kicker">Highlighted</p>
    <h2>Featured publication</h2>
    <p>A closer look at one representative paper from the lab's recent work.</p>
  </div>

  {% include citation.html lookup="Synthetic lethality-mediated precision oncology via the tumor transcriptome" style="rich" %}
</section>

{% include section.html %}

<section class="publications-section">
  <div class="publications-section-head">
    <p class="publications-kicker">Browse All</p>
    <h2>Publication list</h2>
    <p>Search across the archive and browse publications by year.</p>
  </div>

  {% include search-box.html %}

  {% include search-info.html %}

  <div class="publications-list">
    {% include list.html data="citations" component="citation" style="rich" %}
  </div>
</section>
