---
title: "Resources"
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
  Right now, any information can make a difference. Report gas and water leaks, missing people, fires, and
  other events.
</div>
<div class="row">
  <div class="column one-half">
    <h3>Mexico City</h3>

    {% include phoneList.html phoneList=site.data.emergencyPhones.ciudadDeMexico language="en" %}
  </div>
  <div class="column one-half">
    <h3>State of Mexico</h3>

    {% include phoneList.html phoneList=site.data.emergencyPhones.estadoDeMexico language="en" %}
  </div>
</div>
<div class="row">
  <div class="column one-half">
    <h3>Morelos</h3>

    {% include phoneList.html phoneList=site.data.emergencyPhones.morelos language="en" %}
  </div>
  <div class="column one-half">
    <h3>Puebla</h3>

    {% include phoneList.html phoneList=site.data.emergencyPhones.puebla language="en" %}
  </div>
</div>
<div class="row">
  <div class="column one-half">
    <h3>Queretaro</h3>

    {% include phoneList.html phoneList=site.data.emergencyPhones.queretaro language="en" %}
  </div>
  <div class="column one-half">
    <h3>Oaxaca</h3>

    {% include phoneList.html phoneList=site.data.emergencyPhones.oaxaca language="en" %}
  </div>
</div>

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
    + Emergency Guide <br>
    <a target="_blank" rel="noopener noreferrer" href="http://www.guiaemergencias.com/">http://www.guiaemergencias.com/</a><br>
    + Mexican Earthquake | Information and links about the Septemper 19, 2017 earthquake <br>
    <a target="_blank" rel="noopener noreferrer" href="https://pliny-sismo-mx.firebaseapp.com">https://pliny-sismo-mx.firebaseapp.com</a><br>
    + SISMOMX<br>
    <a target="_blank" rel="noopener noreferrer" href="http://sismomexico.org/">http://sismomexico.org/</a><br>
  </div>

  <div class="one-half column">
    <h2 class="subtitle pink">Legal advice</h2>
    <p>In <a href="http://www.pequenocerdocapitalista.com/guia-reclamar-seguros-terremoto/" target="_blank"><strong>Pequeño cerdo capitalista</strong></a> they created a <a href="https://www.dropbox.com/s/pedizh9i2jivh3c/Guía%20para%20reclamar%20seguros%20por%20terremoto%20%202017.09.22.pdf?dl=1" target="_blank">Collaborative guide to claim earthquake damage insurance</a>.
    </p>
    <p> The <strong>Mexico Pro Bono Network</strong>, legal brigades for affected people.</p>
    <p>
      Fill in form here: <a href="http://www.appleseedmexico.org/ong-2" rel="noopener noreferrer" target="_blank">http://www.appleseedmexico.org/ong-2</a><br>
      Phone: <a href="tel:75839623">7583 9623</a>, WhatsApp: <a href="tel:5530474513">55 3047 4513</a> <br>
      Email: <a href="mailto:mvazquez@appleseedmexico.org">mvazquez@appleseedmexico.org</a>
    </p>
  </div>
</div>
