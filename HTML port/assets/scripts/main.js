/*
 * Asset Builder has a quirk that allows custom scripts 
 * to load before Bower scripts during concatenation. 
 * To get around this, use one of the following methods.
 *
 * IIFE
 * (function(){ code goes here }());
 *
 * Self-executing anonymous function
 * var foo = function() { code goes here };
 *
 * document.ready (jQuery)
 * $(document).ready(function() { code goes here });
 * $(function() { code goes here });
 *
 * window.onload (Javascript)
 * window.onload = function() { code goes here };
 *
 *
 *
 */
$('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
window.onLoad = initVar();
function initVar(){
jQuery.globalEval( "var state = 0;" );
}
//funcion para cambiar de mapa 

function changeMap(){
	var map1 = '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=13B_gbt3e5RWk_6xQoQ15xxhGOFs&ll=19.373256300000023%2C-99.13833979999998&z=11&hootPostID=1f18a5617f5da88fa1f7bff84bf31a46" width="100%" height="500"></iframe>';
	var map2 = '<iframe src="https://www.google.com/maps/d/u/0/embed?hl=en&mid=1PwJrCIjz5PNfKAFrY-EX-iEkWH8&ll=19.372169291390605%2C-99.16998963041652&z=14" width="100%" height="500"></iframe>';
	if (state==0){
		$("#mapa").html(map2);
		jQuery.globalEval( "var state = 1;" );
	} else {
		$("#mapa").html(map1);
		jQuery.globalEval( "var state = 0;" );
	}
}

    $('#mapa').click(function () {
        $('#mapa iframe').css("pointer-events", "auto");
    });
    
    $( "#mapa" ).mouseleave(function() {
      $('#mapa iframe').css("pointer-events", "none"); 
    });
                