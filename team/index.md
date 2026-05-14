---
title: Team
nav:
  order: 1
  tooltip: About our team
---

<section class="page-hero">
  <p class="page-kicker">People</p>
  <h1>Team</h1>
  <p class="page-lead">
    Meet the faculty, researchers, students, and staff shaping NEXGEM's work across computational oncology, cancer biology, and translational medicine.
  </p>
</section>

{% include section.html %}

<div class="team-content-shell">
  <div class="page-section team-section-card">
    <div class="page-section-head">
      <p class="page-kicker">Leadership</p>
      <h2>Principal investigator</h2>
      <p>The lab is led by a research program grounded in precision oncology, data science, and clinically meaningful biological discovery.</p>
    </div>
    <div class="page-people-grid">
      {%
        include list.html
        data="members"
      component="portrait"
      filters="role: pi"
    %}
  </div>
  </div>

  <div class="page-section team-section-card">
    <div class="page-section-head">
      <p class="page-kicker">Researchers</p>
      <h2>Postdoctoral researchers</h2>
      <p>Researchers building new methods, validating biological hypotheses, and extending the lab's translational portfolio.</p>
    </div>
    <div class="page-people-grid">
      {%
        include list.html
        data="members"
      component="portrait"
      filters="role: postdoc"
    %}
  </div>
  </div>

  <div class="page-section team-section-card">
    <div class="page-section-head">
      <p class="page-kicker">Trainees</p>
      <h2>Student researchers</h2>
      <p>Graduate and dual-degree trainees contributing to computational, molecular, and translational cancer research.</p>
    </div>
    <div class="page-people-grid">
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
  </div>
  </div>

  <div class="page-section team-section-card">
    <div class="page-section-head">
      <p class="page-kicker">Support</p>
      <h2>Research assistants</h2>
      <p>Team members supporting experiments, data generation, and the day-to-day continuity of the lab's research program.</p>
    </div>
    <div class="page-people-grid">
      {%
        include list.html
        data="members"
      component="portrait"
      filters="role: rast"
    %}
  </div>
  </div>

  <div class="page-section team-section-card">
    <div class="page-section-head">
      <p class="page-kicker">Visitors</p>
      <h2>Visiting researchers</h2>
      <p>Collaborators and visiting scholars who contribute to the lab through exchange, joint discussion, and short-term research engagement.</p>
    </div>
    <div class="page-people-grid">
      {%
        include list.html
        data="members"
        component="portrait"
        filters="role: visiting"
      %}
    </div>
  </div>

  <div class="page-section team-section-card">
    <div class="page-section-head">
      <p class="page-kicker">Operations</p>
      <h2>Administrative assistants</h2>
      <p>Staff members who support coordination, communication, and the administrative foundation of the lab.</p>
    </div>
    <div class="page-people-grid">
      {%
        include list.html
        data="members"
      component="portrait"
      filters="role: administrative"
    %}
  </div>
  </div>

  <div class="page-section team-section-card">
    <div class="page-section-head">
      <p class="page-kicker">Emerging Scholars</p>
      <h2>Undergraduate interns</h2>
      <p>Early-career trainees exploring research through hands-on participation in the lab's projects and culture.</p>
    </div>
    <div class="page-people-grid">
      {%
        include list.html
        data="members"
      component="portrait"
      filters="role: undergrad"
    %}
  </div>
  </div>

  <div class="page-section team-section-card">
    <div class="page-cta">
      <div class="page-cta-copy">
        <p class="page-kicker">Join Us</p>
        <h2>Interested in working with the lab?</h2>
        <p>We welcome ambitious researchers who want to contribute to impactful science in a collaborative and rigorous environment.</p>
      </div>
      {% include button.html icon="fas fa-hands-helping" text="Join the Team" link="contact" %}
    </div>
  </div>
</div>
