---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

{% include_relative about_sections/about-me.md %}

{% include_relative about_sections/news.md %}

{% include_relative about_sections/publications.md %}

{% include_relative about_sections/honors-awards.md %}

{% include_relative about_sections/invited-talks.md %}

{% include_relative about_sections/experience.md %}

{% include_relative about_sections/academic-services.md %}

{% include_relative about_sections/misc.md %}
