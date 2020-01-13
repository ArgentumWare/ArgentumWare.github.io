/*
document.getElementByID("dropdown1").onmouseover = function() {
  alert("Hover!");
}
document.getElementByID("dropdown1").onmouseout  = function() {
  alert("Out!");
}
*/
var list = document.getElementsByClassName("dropdown");
for (var i = 0; i < list.length; i++) {
    list[i].onmouseover = function(){alert("yay!");};
}
