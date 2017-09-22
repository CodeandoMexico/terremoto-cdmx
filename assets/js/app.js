window.events = window.events || [];
var triggerNav = function() {
  document.querySelector('.resToggle').addEventListener('click', function() {
    document.querySelector('.smx-navigation').classList.toggle('active')
  });
}
var addEventListeners = function() {
  $(document).on('click', '.open_as_iframe',  function(event){
    event.preventDefault();
    var me = $(event.target);
    var parent = me.parent();
    var iframeEL = '<iframe src="'+ me.attr('href') +'" width="100%" height="480"></iframe>'
    parent.append(iframeEL);
    me.detach();
  });

};
window.events.push(addEventListeners);
window.events.push(triggerNav);
$(document).ready(function (){
  console.log('shit');
  window.events.forEach(function(event){
    event();
  });
});
