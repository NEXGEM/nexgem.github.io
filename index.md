---
title: Home
---

{% assign publication_count = site.data.sources | size %}
{% assign team_count = site.members | size %}
{% assign post_count = site.posts | size %}

<!--
  size: full;
-->
<div class="home-hero">
  <div class="home-hero-copy">
    <p class="home-kicker">NEXGEM</p>
    <h1><span class="home-title-lockup">Next Generation Medicine Lab</span></h1>
    <p class="home-lead">
      NEXGEM develops computational and experimental strategies that connect biological big data with clinically meaningful cancer treatment decisions.
    </p>
    <div class="home-actions">
      <a class="home-button" href="{{ '/research' | relative_url }}">Explore Research</a>
      <a class="home-button home-button-secondary" href="{{ '/publications' | relative_url }}">View Publications</a>
    </div>
  </div>

  <div class="home-hero-showcase">
    <div class="home-hero-photo-card">
      <div class="home-hero-photo">
        <img
          src="{{ 'images/main/main_photo.jpg' | relative_url }}"
          alt="NEXGEM group and research environment"
          loading="eager"
          {% include fallback.html %}
        >
      </div>
    </div>

    <div class="home-hero-brief-card">
      <div class="home-hero-brief">
        <strong>We build data-driven models that connect molecular mechanisms with clinical decision making.</strong>
        <p>
          Our work spans synthetic lethality, tumor microenvironment analysis, pathology-integrated modeling, and translational frameworks for precision oncology.
        </p>
      </div>
    </div>

    <div class="home-hero-list">
      <article>
        <span>01</span>
        <div>
          <strong>Mechanism to therapy</strong>
          <p>From biological signal to clinically actionable hypothesis.</p>
        </div>
      </article>
      <article>
        <span>02</span>
        <div>
          <strong>Multimodal data integration</strong>
          <p>Joint analysis of omics, pathology, and patient-scale evidence.</p>
        </div>
      </article>
      <article>
        <span>03</span>
        <div>
          <strong>Translational focus</strong>
          <p>Designed to support real-world oncology questions and collaborations.</p>
        </div>
      </article>
    </div>
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
</div>

{% include section.html %}

<div class="home-section">
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
</div>

<div class="home-section">
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
        <em>01</em>
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
        <em>02</em>
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
        <em>03</em>
        <strong>Blog</strong>
        <span>Browse the lab's visual archive of conferences, milestones, and day-to-day moments.</span>
      </span>
    </a>
  </div>
</div>

<div class="home-section">
  <div class="home-section-head">
    <p class="home-kicker">Latest Updates</p>
    <h2>NEXGEM in the news</h2>
    <p>
      Recent media coverage highlighting research connected to the lab.
    </p>
  </div>
  {% assign media_items = site.data.media_coverage | sort: "date" | reverse %}
  <div class="home-updates">
    {% for item in media_items limit: 3 %}
      <a class="home-update" href="{{ item.url }}" target="_blank" rel="noopener noreferrer">
        <span class="home-update-meta">{{ item.date | date: "%B %-d, %Y" }} · {{ item.source }}</span>
        <strong>{{ item.title }}</strong>
      </a>
    {% endfor %}
  </div>
</div>

{% assign lab_news_items = site.data.lab_news | sort: "date" | reverse %}
{% if lab_news_items.size > 0 %}
<div class="home-section">
  <div class="home-section-head">
    <p class="home-kicker">Lab News</p>
    <h2>Updates from NEXGEM</h2>
    <p>
      Milestones from the lab, including new members, paper acceptances, awards, and research activities.
    </p>
  </div>

  <div class="home-lab-news">
    {% for item in lab_news_items limit: 4 %}
      <article class="home-lab-news-card">
        <div class="home-lab-news-meta">
          <time datetime="{{ item.date | date: '%Y-%m-%d' }}">{{ item.date | date: "%B %-d, %Y" }}</time>
        </div>

        <div class="home-lab-news-body">
          <h3>
            {% if item.url %}
              <a href="{{ item.url }}" target="_blank" rel="noopener noreferrer">{{ item.title }}</a>
            {% else %}
              {{ item.title }}
            {% endif %}
          </h3>
          {% if item.category %}
            {% if item.url and item.category == "Publication" %}
              <a class="home-lab-news-category" href="{{ item.url }}" target="_blank" rel="noopener noreferrer">{{ item.category }}</a>
            {% else %}
              <span class="home-lab-news-category">{{ item.category }}</span>
            {% endif %}
          {% endif %}

        </div>
      </article>
    {% endfor %}
  </div>
</div>
{% endif %}

<div class="home-section home-section-compact">
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
</div>
