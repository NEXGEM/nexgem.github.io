---
title: Publications
nav:
  order: 3
  tooltip: Published works
---

<section class="page-hero">
  <p class="page-kicker">Research Archive</p>
  <h1>Publications</h1>
  <p class="page-lead">
    Explore the lab's publication record through a featured visual highlight and a clean text-first publication archive.
  </p>
</section>

{% include section.html %}

<section class="publications-section">
  <div class="page-section-head">
    <p class="page-kicker">Highlighted</p>
    <h2>Featured publications</h2>
    <p>A closer look at representative papers from the lab's recent work.</p>
  </div>

  {% include citation.html lookup="Synthetic lethality-mediated precision oncology via the tumor transcriptome" style="rich" %}
  {% include citation.html lookup="Accurate Spatial Gene Expression Prediction by integrating Multi-resolution" style="rich" %}
</section>

{% include section.html %}

<section class="publications-section">
  <div class="page-section-head">
    <p class="page-kicker">Browse All</p>
    <h2>Publication list</h2>
    <p>Search across the archive and browse publications by year.</p>
  </div>

  {% include search-box.html %}

  {% include search-info.html %}

  <div class="publications-list">
    {% include list.html data="citations" component="citation" style="rich" no_image=true %}
  </div>
</section>
