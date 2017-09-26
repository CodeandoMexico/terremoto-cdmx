---
title: Resources
bg: map
color: white
style: center
lang: en
---

<div class="row">
  <h1 class="title">I need <span class="black">help</span></h1>
</div>
<div class="row">
  <h3 class="subtitle pink">Emergency service phone numbers</h3>
  Right now, any information can make a difference. Report gas and water leaks, missing people, fires, and other events.
</div>

{% assign rows = site.data.emergencyPhones.index.size | divided_by: 2.0 | ceil %}
{% for i in (1..rows) %}
  {% assign offset = forloop.index0 | times: 2 %}
  <div class="row">
    {% for place in site.data.emergencyPhones.index limit:2 offset:offset %}
      <div class="column one-half">
        <h3>{{ place.label.es }}</h3>
        {% assign data = site.data.emergencyPhones[place.file] %}
        {% include phoneList.html phoneList=data %}
      </div>
    {% endfor %}
  </div>
{% endfor %}

<div class="row">
  <hr class="section-line">
  <h2 class="subtitle pink">I'm looking for someone</h2>
  <div class="icontain">
    <a class="btn" href="https://google.org/personfinder/2017-puebla-mexico-earthquake"
       target="_blank" rel="noopener noreferrer">Google Person Finder</a>
    <br>
    <br>
    <a class="btn" href="#" id="rescued-sheet-container-btn">Show list of rescued people</a>
  </div>
</div>
<div class="row">
  <div id="rescued-sheet-container"></div>
</div>
<div class="row">
  <hr class="section-line">
  <h2 class="subtitle pink">I'm looking for shelter or help centers</h2>
  <div class="icontain">
    <div id="critical-zones-container">
      <a class="btn" id="critical-zones-btn">Show map</a>
    </div>
  </div>
</div>
<div class="row" id="reports-sheet-container">
  <hr class="section-line">
  <h2 class="subtitle pink">Citizen report list</h2>
  <a class="btn" href="#" id="reports-sheet-container-btn">Show list</a>
</div>

<hr class="section-line">

<div class="row">
  <div class="one-half column">
    <h2 class="subtitle pink">Other help sites</h2>

    <ul class="websites">
      {% for item in site.data.links %}
      <li class="website">
        <a target="_blank" rel="noopener noreferrer" href="{{ item.url }}">
          {{ item.label[site.active_lang] }}
        </a>
      </li>
      {% endfor %}
    </ul>

  </div>

  <div class="one-half column">
    <h2 class="subtitle pink">Legal advice</h2>

    <p>The <strong>Red Pro Bono México</strong>: legal brigades for affected people.</p>
    <p>Fill in <a href="http://www.appleseedmexico.org/ong-2" rel="noopener noreferrer" target="_blank">the form</a> or contact them via:</p>

    <ul>
      <li>Phone: <a href="tel:75839623">7583 9623</a></li>
      <li>WhatsApp: <a href="tel:5530474513">55 3047 4513</a></li>
      <li>E-mail: <a href="mailto:mvazquez@appleseedmexico.org">mvazquez@appleseedmexico.org</a></li>
    </ul>
  </div>
</div>
