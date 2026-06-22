---
title: Media
nav:
  order: 4
  tooltip: Research in the news
---

<section class="page-hero">
  <p class="page-kicker">In The News</p>
  <h1>Media Coverage</h1>
  <p class="page-lead">
    News stories and institutional features covering NEXGEM-related research, collaborations, and published work.
  </p>
</section>

{% include section.html %}

<section class="page-section media-coverage-section">
  <div class="page-section-head">
    <p class="page-kicker">Coverage</p>
    <h2>Research news</h2>
    <p>Recent articles highlighting research connected to the lab.</p>
  </div>

  {% assign coverage_items = site.data.media_coverage | sort: "date" | reverse %}
  <div class="media-coverage-list">
    {% for item in coverage_items %}
      <article class="media-coverage-card">
        <div class="media-coverage-meta">
          <span>{{ item.source }}</span>
          <time datetime="{{ item.date | date: '%Y-%m-%d' }}">{{ item.date | date: "%B %-d, %Y" }}</time>
        </div>

        <h3>
          <a href="{{ item.url }}" target="_blank" rel="noopener noreferrer">
            {{ item.title }}
          </a>
        </h3>

        {% if item.paper %}
          <p class="media-coverage-paper">{{ item.paper }}</p>
        {% endif %}

        <p>{{ item.description }}</p>

        {% if item.tags %}
          <div class="media-coverage-tags">
            {% for tag in item.tags %}
              <span>{{ tag }}</span>
            {% endfor %}
          </div>
        {% endif %}
      </article>
    {% endfor %}
  </div>
</section>
