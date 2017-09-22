---
title: "Recursos"
bg: map
color: white
style: center
lang: es
---
<div class="row">
  <h1 class="title">Necesito <span class="black">Ayuda</span></h1>
</div>
<div class="row">
  <h3 class="subtitle pink">Teléfonos de Emergencia</h3>
  En estos momentos cualquier reporte puede marcar la diferencia. Reporta fugas de gas y agua, persona desaparecidas, incendios, entre otros.
</div>
<div class="row">
  <div class="column one-half">
    <h3>Ciudad de México</h3>

    {% include phoneList.html phoneList=site.data.emergencyPhones.ciudadDeMexico language="es" %}
  </div>
  <div class="column one-half">
    <h3>Estado de México</h3>

    {% include phoneList.html phoneList=site.data.emergencyPhones.estadoDeMexico language="es" %}
  </div>
</div>
<div class="row">
  <div class="column one-half">
    <h3>Morelos</h3>

    {% include phoneList.html phoneList=site.data.emergencyPhones.morelos language="es" %}
  </div>
  <div class="column one-half">
    <h3>Puebla</h3>

    {% include phoneList.html phoneList=site.data.emergencyPhones.puebla language="es" %}
  </div>
</div>
<div class="row">
  <div class="column one-half">
    <h3>Querétaro</h3>

    {% include phoneList.html phoneList=site.data.emergencyPhones.queretaro language="es" %}
  </div>
  <div class="column one-half">
    <h3>Oaxaca</h3>

    {% include phoneList.html phoneList=site.data.emergencyPhones.oaxaca language="es" %}
  </div>
</div>

<div class="row">
	<h2 class="subtitle pink">Estoy buscando a Alguien</h2>
	<div class="icontain">
		<a class="btn" href="https://google.org/personfinder/2017-puebla-mexico-earthquake" target="_blank" rel="noopener noreferrer">Google Person Finder</a>
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
				<a class="btn " id="critical-zones-btn">Mostrar mapa</a>
			</div>
		</div>
</div>
<div class="row" id="reports-sheet-container">
  <hr class="section-line">
	<h2 class="subtitle pink">Lista de reportes ciudadanos</h2>
	<a class="btn" href="#" id="reports-sheet-container-btn">Mostrar lista</a>
</div>
<div class="row">
	<div class="one-half column">
    <hr class="section-line">
		<h2 class="subtitle pink">Otros sitios de ayuda</h2>
		+ Guía de Emergencia <br>
		<a target="_blank" rel="noopener noreferrer" href="http://www.guiaemergencias.com/">http://www.guiaemergencias.com/</a> <br>
		+ Sismo México | Información y ligas del sismo de septiembre 19, 2017 <br>
		<a target="_blank" rel="noopener noreferrer" href="https://pliny-sismo-mx.firebaseapp.com">https://pliny-sismo-mx.firebaseapp.com</a> <br>
		+ Sismo México org<br>
		<a target="_blank" rel="noopener noreferrer" href="http://sismomexico.org/">http://sismomexico.org/</a> <br>
	</div>
	<div class="one-half column"></div>
	<h2 class="subtitle pink">Asesoría Jurídica</h2>
	<p> La <strong>Red Pro Bono de México,</strong> brigadas jurídicas para las personas afectadas.</p>
	<p>
		Llenar formato: en http://www.appleseedmexico.org/ong-2/ <br>
		Tel: 75839623, Whatsapp: 5530474513 <br>
		Correo: mvazquez@appleseedmexico.org

	</p>


</div>
