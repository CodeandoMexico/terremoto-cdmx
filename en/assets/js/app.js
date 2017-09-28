window.events = window.events || [];
var triggerNav = function() {
	document.querySelector('.resToggle').addEventListener('click', function() {
		document.querySelector('.smx-navigation').classList.toggle('active')
	});
}

function appendFrameListener(config) {
	var el = document.getElementById(config.button);
	if (el) {
		el.addEventListener('click', function(event) {
			event.preventDefault();
			document.getElementById(config.container).innerHTML = config.frame;
		});
	}
}

function addEventListeners() {
	// Map Lazy Loading
	var mapFrame = '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=13B_gbt3e5RWk_6xQoQ15xxhGOFs&ll=19.373256300000023%2C-99.13833979999998&z=11&hootPostID=1f18a5617f5da88fa1f7bff84bf31a46" width="100%" height="480"></iframe>';

	var criticalMapFrame = '<iframe src="https://www.google.com/maps/d/u/0/embed?hl=en&mid=1PwJrCIjz5PNfKAFrY-EX-iEkWH8&ll=19.372169291390605%2C-99.16998963041652&z=14" width="100%" height="480"></iframe>';

	// Spreadsheet lazy loading
	var reportsFrame = '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6CChYk0cXlp_R_L2r9Enkar8qmDdGtu2CCE6dYYdU391PBt6zzePYQAkTJ5zJ6DHvkPsWu3Oty206/pubhtml?widget=true&headers=false" width="100%" height="480"></iframe>';
	var mappingFrame = '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6CChYk0cXlp_R_L2r9Enkar8qmDdGtu2CCE6dYYdU391PBt6zzePYQAkTJ5zJ6DHvkPsWu3Oty206/pubhtml?widget=true&amp;headers=false" width="100%" height="480"></iframe>';
	var rescuedFrame = '<iframe src="https://docs.google.com/spreadsheets/d/1-17hTtd6ft1CmEut-cb-brm7C1JA_lUgpoiVsPN2kkE/pubhtml?widget=true&amp;headers=false&amp;gid=0" width="100%" height="480"></iframe>';

	var sheetsConfig = [
		{
			button: 'map-container-btn',
			container: 'map-container',
			frame: mapFrame
		}, {
			button: 'critical-zones-btn',
			container: 'critical-zones-container',
			frame: criticalMapFrame
		}, {
			button: 'reports-sheet-container-btn',
			container: 'reports-sheet-container',
			frame: reportsFrame
		}, {
			button: 'mapping-sheet-container-btn',
			container: 'mapping-sheet-container',
			frame: mappingFrame
		}, {
			button: 'rescued-sheet-container-btn',
			container: 'rescued-sheet-container',
			frame: rescuedFrame
		}
	];

	for (var i = 0; i < sheetsConfig.length; i++) {
		appendFrameListener(sheetsConfig[i]);
	}
	$(document).on('click', '.open_as_iframe', function(event) {
		event.preventDefault();
		var me = $(event.target);
		var parent = me.parent();
		var iframeEL = '<iframe src="' + me.attr('href') + '" width="100%" height="480"></iframe>'
		parent.append(iframeEL);
		me.detach();
	});
}

window.events.push(addEventListeners);
window.events.push(triggerNav);
$(document).ready(function() {
	window.events.forEach(function(event) {
		event();
	});
});



// Obtener Entidad Federal
$(function obtenerEntidad(){
	$(".cdmx,.mor,.quer,.pue,.edo,.oax" ).css('display','none');
	$.getJSON("http://www.geoplugin.net/json.gp?jsoncallback=?", function(data) {

	var entidad = "";
	entidad += data.geoplugin_region;

	// Mostrar/ocultar teléfonos de emergencia de mi entidad
		 $("#shownear-list").click(function(event){
			 if (entidad == "The Federal District") {
				 $('.mor,.quer,.pue,.edo,.oax').css('display','none');
				 $(".cdmx").slideToggle();
			 }
			 else if (entidad == "Morelos") {
				 $('.cdmx,.quer,.pue,.edo,.oax').css('display','none');
				 $(".mor").slideToggle();
			 }
			 else if (entidad == "Querétaro") {
				 $('.cdmx,.mor,.pue,.edo,.oax').css('display','none');
				 $(".quer").slideToggle();
			 }
			 else if (entidad == "Puebla") {
				 $('.cdmx,.mor,.quer,.edo,.oax').css('display','none');
				 $(".pue").slideToggle();
			 }
			 else if (entidad == "México") {
				 $('.cdmx,.mor,.quer,.pue,.oax').css('display','none');
				 $(".edo").slideToggle();
			 }
			 else if (entidad == "Oaxaca") {
				 $('.cdmx,.mor,.quer,.pue,.edo').css('display','none');
				 $(".oax").slideToggle();
			 }
		 });

	// Mostrar/ocultar teléfonos de emergencia de otras entidades
	 $("#showfull-list").click(function(event){
			 $(".cdmx,.mor,.quer,.pue,.edo,.oax").slideToggle();
		});
	});
});

// Smooth-Scroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
