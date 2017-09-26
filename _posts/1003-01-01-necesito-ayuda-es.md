---
title: Recursos
bg: map
color: white
style: center
lang: es
---

<div class="row">
  <h1 class="title">Necesito <span class="black">Ayuda</span></h1>
</div>
<div class="row">
  <h2 class="subtitle pink">Teléfonos de Emergencia</h2>
  En estos momentos cualquier reporte puede marcar la diferencia. Reporta fugas de gas y agua, personas
  desaparecidas, incendios, entre otros, a los teléfonos de emergencia de tu ciudad:
</div>

<!-- Idea de https://stackoverflow.com/a/45340994/88311 -->
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
	<h2 class="subtitle pink">Estoy buscando a Alguien</h2>
	<div class="icontain">
		<a class="btn" href="https://google.org/personfinder/2017-puebla-mexico-earthquake"
       target="_blank" rel="noopener noreferrer">Google Person Finder</a>
		<br>
		<br>
		<a class="btn" href="#" id="rescued-sheet-container-btn">Mostrar lista de rescatados</a>
	</div>
</div>

<div class="row">
	<div id="rescued-sheet-container"></div>
</div>

<div class="row">
  <hr class="section-line">
  <h2 class="subtitle pink">Busco albergues o centros de ayuda</h2>
  <div class="icontain">
    <div id="critical-zones-container">
      <a class="btn" id="critical-zones-btn">Mostrar mapa</a>
    </div>
  </div>
</div>

<div class="row" id="reports-sheet-container">
  <hr class="section-line">
	<h2 class="subtitle pink">Lsta de reportes ciudadanos</h2>
	<a class="btn" href="#" id="reports-sheet-container-btn">Mostrar lista</a>
</div>

<hr class="section-line">

<div class="row">
  <div class="one-half column">
		<h2 class="subtitle pink">Otros sitios de ayuda</h2>
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
		<h2 class="subtitle pink">Asesoría Jurídica</h2>
		<p>La <strong>Red Pro Bono de México,</strong> brigadas jurídicas para las personas afectadas.</p>
    <p>Llena <a href="http://www.appleseedmexico.org/ong-2" rel="noopener noreferrer" target="_blank">el formato</a> ó contáctalos via:</p>
    <ul>
			<li>Teléfono: <a href="tel:75839623">7583 9623</a></li>
      <li>WhatsApp: <a href="tel:5530474513">55 3047 4513</a></li>
      <li>Correo: <a href="mailto:mvazquez@appleseedmexico.org">mvazquez@appleseedmexico.org</a></li>
		</ul>
	</div>
</div>
