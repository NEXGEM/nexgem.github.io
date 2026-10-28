---
title: Research
nav:
  order: 2
  tooltip: Research Summary
---

<section class="page-hero">
  <p class="page-kicker">Research Program</p>
  <h1>Research</h1>
  <p class="page-lead">
    NEXGEM studies how large-scale molecular and pathology-derived data can be translated into better cancer treatment strategies through AI, data science, and experimental validation.
  </p>
</section>

{% include section.html %}

<div class="research-stack">
  <div class="research-theme-shell">
    <div class="page-section-head">
      <p class="page-kicker">Theme 01</p>
      <h2>Synthetic lethality-based precision cancer medicine</h2>
      <p>Building therapeutic strategies from genetic interactions, immunotherapy response, and patient-specific molecular context.</p>
    </div>
    <div class="page-split">
      <div class="page-rich-text">
        <p>Joo has led pioneering studies based on the concept of synthetic lethality, where disabling one gene alone has little effect, but disabling both simultaneously causes cell death.</p>
        <p>His work has focused on discovering drug targets with real clinical benefits, advancing immunotherapy, and enabling precision oncology by matching patients to effective drugs based on genetic profiles.</p>
        <h3>Samsung Foundation Grant: Introducing Triple Synthetic Lethality</h3>
        <p><a href="https://www.samsungstf.org/ssrfPr/researcher/viewResearcher.do?idx=715">Grant link</a></p>
        <p>Building on prior work, the lab is establishing a new concept: triple synthetic lethality, where cells die only if three genes are jointly inactivated.</p>
        <ul>
          <li>Provide a rational basis for selecting drugs for immunotherapy combinations.</li>
          <li>Identify biomarkers that help define the right patient groups.</li>
          <li>Support AI- and big data-driven therapeutic development in immuno-oncology.</li>
        </ul>
      </div>

      <div class="page-media-card page-media-card-emphasis">
        <div class="page-media-frame">
          <img src="{{ '/images/Research.Statement.v2.png' | relative_url }}" alt="Synthetic lethality research statement">
        </div>
      </div>
    </div>
  </div>

  <div class="research-theme-shell">
    <div class="page-section-head">
      <p class="page-kicker">Theme 02</p>
      <h2>From slides to spatial omics</h2>
      <p>Extending pathology into multi-layered molecular maps to support pathology-based precision cancer medicine.</p>
    </div>
    <div class="page-split">
      <div class="page-rich-text">
        <p>Cancer diagnosis has long depended on tissue slides reviewed under a microscope. Spatial omics now adds molecular context directly onto tissue architecture, creating a much richer map of tumor biology.</p>
        <p>By integrating histopathology with spatial omics, the lab studies how cancer cells interact with their environments and how those interactions may explain treatment response differences across patients.</p>
        <h3>BostonKorea Grant: 3D reconstruction of tumor microenvironment characterization</h3>
        <p><a href="https://kucrf.org/">Grant link</a></p>
        <p>We are developing AI models that predict spatial omics information and extend tissue understanding from 2D sections into 3D virtual reconstructions.</p>
        <p>The long-term aim is precision cancer medicine driven by detailed structural and molecular maps of tumors.</p>
      </div>

      <div class="page-media-card page-media-card-emphasis">
        <div class="page-media-frame">
          <img src="{{ '/images/Research.Statement.v2-2.png' | relative_url }}" alt="Spatial omics and pathology research statement">
        </div>
      </div>
    </div>
  </div>

  <section class="research-theme-shell research-cellularspace" id="cellularspace" aria-labelledby="cellularspace-title">
    <div class="page-section-head">
      <p class="page-kicker">Theme 03</p>
      <h2 id="cellularspace-title">CellularSpace: Multimodal foundation models</h2>
      <p>Connecting cellular morphology, molecular profiles, and tissue context to advance precision oncology.</p>
    </div>

    <div class="research-cellularspace-copy">
      <div class="page-rich-text">
        <h3>CellularSpace Grant</h3>
        <p>We are developing a single-cell-resolution foundation model that integrates histopathology, spatial transcriptomics, and spatial proteomics. By learning relationships between cells and their surrounding tissue, CellularSpace aims to connect molecular mechanisms with therapeutic response.</p>
        <p>Led by Sungkyunkwan University, the project brings together Ewha Womans University, Dongguk University, Pusan National University, and Samsung Medical Center.</p>
      </div>

      <div class="page-rich-text research-cellularspace-goals">
        <h3>From biological context to clinical insight</h3>
        <ul>
          <li>Predict antibody-drug conjugate (ADC) response and investigate treatment mechanisms.</li>
          <li>Discover therapeutic targets and digital biomarkers.</li>
          <li>Develop intelligent digital pathology and the Spatial-Web Insight research platform.</li>
        </ul>
      </div>
    </div>

    <figure class="research-cellularspace-figure">
      <a class="research-cellularspace-diagram" href="{{ '/images/cellularspace-overview.png' | relative_url }}" target="_blank" rel="noopener noreferrer" aria-label="Open the full-size CellularSpace research diagram in a new tab">
        <img src="{{ '/images/cellularspace-overview.png' | relative_url }}" width="1186" height="602" alt="CellularSpace integrates pathology images, spatial transcriptomics (ST), and spatial proteomics (SP) across tissue and cell scales to support ADC response prediction, intelligent pathology, and a research web platform." loading="lazy" decoding="async">
      </a>
      <figcaption>
        <span>CellularSpace research overview · ST: spatial transcriptomics · SP: spatial proteomics</span>
        <a href="{{ '/images/cellularspace-overview.png' | relative_url }}" target="_blank" rel="noopener noreferrer">View full-size diagram <span class="research-cellularspace-new-tab">(opens in a new tab)</span></a>
      </figcaption>
    </figure>

    <p class="research-cellularspace-support">Supported by the National Research Foundation of Korea · April 2026–December 2030</p>
  </section>

  <div class="research-theme-shell research-theme-shell-funding">
    <div class="page-section-head">
      <p class="page-kicker">Support</p>
      <h2>Funding</h2>
      <p>Our work is made possible by support from academic, philanthropic, and research funding partners.</p>
    </div>

    {%
      include gallery.html

      image1="images/funding/skku.jpeg"
      link1="https://www.skku.edu/"
      tooltip1="SungKyunKwan university"
      
      image2="images/funding/samsung_미래2.png"
      link2="https://www.samsungstf.org/"
      tooltip2="Samsung Science & Technology"

      image3="images/funding/posco_청암.png"
      link3="https://www.postf.org/"
      tooltip3="POSCO TJ Park Foundation"

      image4="images/funding/NRF.png"
      link4="https://www.nrf.re.kr/"
      tooltip4="National Research Foundation of Korea"

      image5="images/funding/kucrf_logo.png"
      link5="https://kucrf.org/"
      tooltip5="Korea US Collaborative Research Fund"

      image6="images/funding/yuhan.jpg"
      link6="https://www.yuhan.co.kr/Main/"
      tooltip6="YUHAN"
    %}
  </div>
</div>
