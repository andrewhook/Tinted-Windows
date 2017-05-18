var els = document.getElementsByTagName("*");
for(var i = 0; i < els.length; i++) {
  var el = els[i];
  el.classList.add('overlay-transparent-bg');
}
