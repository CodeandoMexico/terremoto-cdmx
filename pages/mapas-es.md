---
title: Mapas
permalink: mapas
lang: es
layout: page
---

{% for mapa in site.data.mapas %}
<section class="container">
    <h2>{{ mapa.name }}</h2>
    <iframe src="{{ mapa.iframe }}" width="100%" height="400px"/>
</section>
{% endfor %}