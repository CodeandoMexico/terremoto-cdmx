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

var loadCSS = function() {
  // <link href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono" rel="stylesheet">
  var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://fonts.googleapis.com/css?family=Roboto|Roboto+Mono';
    link.media = 'all';
    head.appendChild(link);
}

function addEventListeners() {
	// Map Lazy Loading
	var mapFrame = '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=13B_gbt3e5RWk_6xQoQ15xxhGOFs&ll=19.373256300000023%2C-99.13833979999998&z=11&hootPostID=1f18a5617f5da88fa1f7bff84bf31a46" width="100%" height="480"></iframe>';

	var criticalMapFrame = '<iframe src="https://www.google.com/maps/d/u/0/embed?hl=en&mid=1PwJrCIjz5PNfKAFrY-EX-iEkWH8&ll=19.372169291390605%2C-99.16998963041652&z=14" width="100%" height="480"></iframe>';

	// Spreadsheet lazy loading
	var reportsFrame = '<iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6CChYk0cXlp_R_L2r9Enkar8qmDdGtu2CCE6dYYdU391PBt6zzePYQAkTJ5zJ6DHvkPsWu3Oty206/pubhtml?widget=true&amp;headers=false" width="100%" height="480"></iframe>';
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
window.events.push(loadCSS);
$(document).ready(function() {
	window.events.forEach(function(event) {
		event();
	});
});
