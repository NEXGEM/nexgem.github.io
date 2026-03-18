---
title: Home
---

{% assign publication_count = site.data.sources | size %}
{% assign team_count = site.members | size %}
{% assign post_count = site.posts | size %}

<section class="home-hero">
  <div class="home-hero-copy">
    <p class="home-kicker">NEXGEM</p>
    <h1>Next Generation Medicine Lab</h1>
    <p class="home-lead">
      NEXGEM develops computational and experimental strategies that connect biological big data with clinically meaningful cancer treatment decisions.
    </p>
    <div class="home-actions">
      <a class="home-button" href="{{ '/research' | relative_url }}">Explore Research</a>
      <a class="home-button home-button-secondary" href="{{ '/publications' | relative_url }}">View Publications</a>
    </div>
  </div>
  <div class="home-hero-panel">
    <img
      src="{{ 'images/main/DSC02964.jpg' | relative_url }}"
      alt="NEXGEM research overview"
      loading="eager"
      {% include fallback.html %}
    >
  </div>
  <div class="home-stats">
    <article>
      <strong>{{ publication_count }}+</strong>
      <span>Selected publications and research outputs</span>
    </article>
    <article>
      <strong>{{ team_count }}</strong>
      <span>Faculty, students, and trainees</span>
    </article>
    <article>
      <strong>{{ post_count }}</strong>
      <span>Lab stories and photo archive updates</span>
    </article>
  </div>
</section>

<section class="home-section">
  <div class="home-section-head">
    <p class="home-kicker">Research Focus</p>
    <h2>Three themes shaping our work</h2>
    <p>
      Our lab is organized around questions that move from biological mechanism to clinically actionable insight.
    </p>
  </div>
  <div class="home-pillars">
    <article class="home-pillar">
      <h3>Synthetic lethality</h3>
      <ul>
        <li>Identify targetable genetic interactions in cancer</li>
        <li>Guide rational combination therapy design</li>
        <li>Support precision treatment strategies</li>
      </ul>
    </article>
    <article class="home-pillar">
      <h3>Spatial omics and pathology</h3>
      <ul>
        <li>Integrate histopathology with spatial omics</li>
        <li>Map tumor ecosystems with higher resolution</li>
        <li>Connect tissue structure to molecular context</li>
      </ul>
    </article>
    <article class="home-pillar">
      <h3>Translational AI</h3>
      <ul>
        <li>Model patient-scale molecular and clinical data</li>
        <li>Translate data science into therapeutic insight</li>
        <li>Bridge computational discovery and oncology practice</li>
      </ul>
    </article>
  </div>
</section>

<section class="home-section">
  <div class="home-section-head">
    <p class="home-kicker">Explore</p>
    <h2>Navigate the lab at a glance</h2>
    <p>
      Start with the area that matters most to you, whether that is our science, our people, or recent activity.
    </p>
  </div>
  <div class="home-pathways">
    <a class="home-pathway" href="{{ '/research' | relative_url }}">
      <span class="home-pathway-image">
        <img
          src="{{ 'images/main/select4.jpg' | relative_url }}"
          alt="Research projects"
          loading="lazy"
          {% include fallback.html %}
        >
      </span>
      <span class="home-pathway-body">
        <strong>Research</strong>
        <span>Read our current scientific directions, translational questions, and funded projects.</span>
      </span>
    </a>
    <a class="home-pathway" href="{{ '/team' | relative_url }}">
      <span class="home-pathway-image">
        <img
          src="{{ 'images/main/JACR2.jpg' | relative_url }}"
          alt="Team members"
          loading="lazy"
          {% include fallback.html %}
        >
      </span>
      <span class="home-pathway-body">
        <strong>Team</strong>
        <span>Meet the faculty, students, and trainees contributing to the lab's research program.</span>
      </span>
    </a>
    <a class="home-pathway" href="{{ '/blog' | relative_url }}">
      <span class="home-pathway-image">
        <img
          src="{{ 'images/main/sumok3.jpeg' | relative_url }}"
          alt="Lab blog and gallery"
          loading="lazy"
          {% include fallback.html %}
        >
      </span>
      <span class="home-pathway-body">
        <strong>Blog</strong>
        <span>Browse the lab's visual archive of conferences, milestones, and day-to-day moments.</span>
      </span>
    </a>
  </div>
</section>

<section class="home-section">
  <div class="home-section-head">
    <p class="home-kicker">Latest Updates</p>
    <h2>Recent stories from the lab</h2>
    <p>
      A quick view of recent activity before diving into the full archive.
    </p>
  </div>
  <div class="home-updates">
    {% for post in site.posts limit: 3 %}
      <a class="home-update" href="{{ post.url | relative_url }}">
        <span class="home-update-meta">{{ post.date | date: "%B %-d, %Y" }}</span>
        <strong>{{ post.title }}</strong>
      </a>
    {% endfor %}
  </div>
</section>

<section class="home-section home-section-compact">
  <div class="home-contact">
    <div>
      <p class="home-kicker">Contact</p>
      <h2>Interested in collaboration or learning more?</h2>
      <p>
        We welcome opportunities to connect around computational oncology, cancer biology, and translational data science.
      </p>
    </div>
    <a class="home-button" href="{{ '/contact' | relative_url }}">Get in&nbsp;Touch</a>
  </div>
</section>
