document.getElementByID("dropdown1").onmouseover = function() {
  alert("Hover!");
}
document.getElementByID("dropdown1")[0].onmouseout  = function() {
  alert("Out!");
}
