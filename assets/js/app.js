$(document).foundation();
$('#exampleModal1').foundation('open');
var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'side': 'right'
  });
  $('.toggle-button').addEventListener('click', function() {
  slideout.toggle();
});