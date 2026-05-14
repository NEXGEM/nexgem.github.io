---
title: Resources
nav:
  order: 5
  tooltip: Lab equipment and infrastructure
---

<section class="page-hero">
  <p class="page-kicker">Lab Infrastructure</p>
  <h1>Resources</h1>
  <p class="page-lead">
    An overview of the lab's core infrastructure, including computing systems and experimental platforms that support computational oncology and translational cancer research.
  </p>
</section>

{% include section.html %}

<section class="page-section">
  <div class="page-section-head">
    <p class="page-kicker">Compute</p>
    <h2>Computing servers</h2>
    <p>An integrated HPC environment for large-scale data analysis, multimodal model training, shared storage, and coordinated job execution across the lab.</p>
  </div>

  <div class="resource-overview-grid">
    <article class="page-card resource-overview-card">
      <span class="resource-overview-label">CPU capacity</span>
      <strong>716+ cores</strong>
      <p></p>
    </article>
    <article class="page-card resource-overview-card">
      <span class="resource-overview-label">GPU capacity</span>
      <strong>62 GPUs</strong>
      <p></p>
    </article>
    <article class="page-card resource-overview-card">
      <span class="resource-overview-label">Memory</span>
      <strong>9+ TB RAM</strong>
      <p></p>
    </article>
    <article class="page-card resource-overview-card">
      <span class="resource-overview-label">Storage</span>
      <strong>727.6 TB</strong>
      <p></p>
    </article>
    <!-- <article class="page-card resource-overview-card">
      <span class="resource-overview-label">Cluster management</span>
      <strong>HPC system</strong>
      <p></p>
    </article> -->
  </div>

  <div class="resource-grid">
    <article class="page-card resource-card">
      <div class="resource-card-head">
        <div>
          <p class="resource-type">Accelerated HPC</p>
          <h3>GPU computing nodes</h3>
        </div>
        <span class="resource-status">Active</span>
      </div>
      <p class="resource-summary">A multi-generation GPU cluster for deep learning, pathology foundation models, spatial biology pipelines, and multimodal AI development.</p>
      <div class="page-pill-list">
        <span class="page-pill resource-pill resource-pill-strong">62 total GPUs</span>
        <span class="page-pill resource-pill resource-pill-strong">~5.4 TB RAM</span>
        <span class="page-pill resource-pill resource-pill-strong">H100 SXM × 8</span>
        <span class="page-pill resource-pill">RTX A6000 × 8</span>
        <span class="page-pill resource-pill">RTX A5000 × 38</span>
        <span class="page-pill resource-pill">RTX 2080 Ti × 8</span>
      </div>
      <div class="resource-meta">
        <span>The GPU tier combines shared compute nodes and dedicated servers, making it suitable for both large scheduled jobs and project-specific development.</span>
      </div>
    </article>

    <article class="page-card resource-card">
      <div class="resource-card-head">
        <div>
          <p class="resource-type">General HPC</p>
          <h3>CPU computing nodes</h3>
        </div>
        <span class="resource-status">Active</span>
      </div>
      <p class="resource-summary">Shared CPU nodes support preprocessing, statistical analysis, classical pipelines, simulation-heavy workflows, and cluster-wide orchestration.</p>
      <div class="page-pill-list">
        <span class="page-pill resource-pill resource-pill-strong">716+ total CPU cores</span>
        <span class="page-pill resource-pill resource-pill-strong">~3.7 TB RAM</span>
        <span class="page-pill resource-pill">Login node</span>
        <!-- <span class="page-pill resource-pill">Shared compute nodes</span>
        <span class="page-pill resource-pill">Dedicated servers</span> -->
      </div>
      <div class="resource-meta">
        <span>This layer provides the backbone for everyday analysis, queue management, environment setup, and long-running non-GPU workloads.</span>
      </div>
    </article>

    <article class="page-card resource-card">
      <div class="resource-card-head">
        <div>
          <p class="resource-type">Data Infrastructure</p>
          <h3>Storage and networking</h3>
        </div>
        <span class="resource-status">Active</span>
      </div>
      <p class="resource-summary">The cluster is supported by large-capacity HDD and NVMe SSD storage, together with high-speed switching for data movement across the HPC environment.</p>
      <div class="page-pill-list">
        <span class="page-pill resource-pill resource-pill-strong">574 TB HDD</span>
        <span class="page-pill resource-pill resource-pill-strong">153.6 TB NVMe SSD</span>
        <span class="page-pill resource-pill resource-pill-strong">200G InfiniBand</span>
        <span class="page-pill resource-pill">10G switch fabric</span>
      </div>
      <div class="resource-meta">
        <span>Storage and interconnect resources are organized to support large imaging datasets, shared archives, and high-throughput model training workflows.</span>
      </div>
    </article>

    <article class="page-card resource-card resource-card-emphasis">
      <div class="resource-card-head">
        <div>
          <p class="resource-type">Operations</p>
          <h3>NEXGEM HPC platform</h3>
        </div>
        <span class="resource-status">In operation</span>
      </div>
      <p class="resource-summary">The lab also maintains its own HPC software environment for monitoring, job submission, scheduling, and resource allocation across the integrated cluster.</p>
      <div class="page-pill-list">
        <span class="page-pill resource-pill">Job submission</span>
        <span class="page-pill resource-pill">Monitoring</span>
        <span class="page-pill resource-pill">Scheduling</span>
        <span class="page-pill resource-pill">Resource allocation</span>
      </div>
      <div class="resource-meta">
        <span>This software layer helps unify compute access across GPU, CPU, and storage resources so the infrastructure operates as one coordinated HPC system.</span>
      </div>
    </article>
  </div>
</section>

<!-- <section class="page-section">
  <div class="page-section-head">
    <p class="page-kicker">Experiment</p>
    <h2>Experimental equipment</h2>
    <p>Representative wet-lab and translational research equipment used to generate, validate, and interpret biological data.</p>
  </div>

  <div class="resource-grid">
    <article class="page-card resource-card">
      <div class="resource-card-head">
        <div>
          <p class="resource-type">Experimental</p>
          <h3>Cell and Molecular Biology Setup</h3>
        </div>
        <span class="resource-status">In use</span>
      </div>
      <p class="resource-summary">Core experimental setup supporting routine molecular assays, validation work, and translational follow-up experiments.</p>
      <div class="page-pill-list">
        <span class="page-pill">Cell assays</span>
        <span class="page-pill">Molecular validation</span>
        <span class="page-pill">Sample prep</span>
      </div>
      <div class="resource-meta">
        <span>Instrument-level details and availability notes will be added as the resource catalog is expanded.</span>
      </div>
    </article>

    <article class="page-card resource-card">
      <div class="resource-card-head">
        <div>
          <p class="resource-type">Translational</p>
          <h3>Pathology and Imaging Support Equipment</h3>
        </div>
        <span class="resource-status">In use</span>
      </div>
      <p class="resource-summary">Equipment and supporting infrastructure used alongside pathology workflows, imaging-based interpretation, and spatial biology studies.</p>
      <div class="page-pill-list">
        <span class="page-pill">Histology support</span>
        <span class="page-pill">Imaging workflows</span>
        <span class="page-pill">Spatial studies</span>
      </div>
      <div class="resource-meta">
        <span>Specific instruments, models, and operating notes will be populated in a later update.</span>
      </div>
    </article>
  </div>
</section> -->

<section class="page-section">
  <div class="page-cta">
    <div class="page-cta-copy">
      <p class="page-kicker">More to come</p>
      <h2>Resource details will continue to expand</h2>
      <p>This page is designed to grow into a fuller infrastructure catalog with equipment specifications, access notes, and usage context.</p>
    </div>
    <a class="button" href="{{ '/contact' | relative_url }}">Ask about resources</a>
  </div>
</section>
