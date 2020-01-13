/*
document.getElementByID("dropdown1").onmouseover = function() {
  alert("Hover!");
}
document.getElementByID("dropdown1").onmouseout  = function() {
  alert("Out!");
}
*/
console.log("started");
var list = document.getElementsByClassName("dropdown");
console.log("got elements");
for (var i = 0; i < list.length; i++) {
  console.log("element" + i);
  list[i].onmouseover = function(){alert("yay!");};
}
