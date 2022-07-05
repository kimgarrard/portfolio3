/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/


const foto1 = document.querySelector(".rij1");
const foto2 = document.querySelector(".rij2");
const foto3 = document.querySelector(".rij3");



var container = document.getElementById('container');
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var scrollArea = windowHeight;
var square1 = document.getElementsByClassName('square')[0];
var square2 = document.getElementsByClassName('square')[1];

var venster = document.querySelector(".fotos");


window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || window.scrollTop;
  var scrollPercent = scrollTop/scrollArea || 0;


  foto1.style.transform = "translateY(+" + scrollPercent*window.innerWidth*1.1 + "px)";
  foto2.style.transform = "translateY(-" + scrollPercent*window.innerWidth*0.1 + "px)";
  foto3.style.transform = "translateY(+" + scrollPercent*window.innerWidth*1.1 + "px)";

});


var button = document.querySelector(".button2");
var stralen = document.querySelector(".stralen");

button.addEventListener("mousover", function() {
  console.log("hoi");
  stralen.classList.add("straal");
});











// let hover = document.querySelector(".hover1");
// let foto = document.querySelector(".foto");
// let info = document.querySelector(".info");
//
//
//
// var hover = document.getElementsByClassName("hover"); // <- this gives you  a HTMLCollection
//
// for (var i = 0; i < hover.length; i++) {
//     hover[i].addEventListener('mouseover', function() {
//         console.log("hoi");
//         return $(this).contents();
//
//         foto.classList.add("hide");
//
//         // <div id="footright"><p>Circus</p></div>
//         // $( "#footright>p" ).replaceWith(function() { return $(this).contents(); });
//
//         // modalprod.style.display = "block";
//     })
// }







let hover11 = document.querySelector(".rij1 .hover1");
let foto11 = document.querySelector(".rij1 .foto1");
let info11 = document.querySelector(".rij1 .info1");

let hover12 = document.querySelector(".rij1 .hover2");
let foto12 = document.querySelector(".rij1 .foto2");
let info12 = document.querySelector(".rij1 .info2");

let hover13 = document.querySelector(".rij1 .hover3");
let foto13 = document.querySelector(".rij1 .foto3");
let info13 = document.querySelector(".rij1 .info3");


let hover21 = document.querySelector(".rij2 .hover1");
let foto21 = document.querySelector(".rij2 .foto1");
let info21 = document.querySelector(".rij2 .info1");

let hover22 = document.querySelector(".rij2 .hover2");
let foto22 = document.querySelector(".rij2 .foto2");
let info22 = document.querySelector(".rij2 .info2");

let hover23 = document.querySelector(".rij2 .hover3");
let foto23 = document.querySelector(".rij2 .foto3");
let info23 = document.querySelector(".rij2 .info3");


let hover31 = document.querySelector(".rij3 .hover1");
let foto31 = document.querySelector(".rij3 .foto1");
let info31 = document.querySelector(".rij3 .info1");

let hover32 = document.querySelector(".rij3 .hover2");
let foto32 = document.querySelector(".rij3 .foto2");
let info32 = document.querySelector(".rij3 .info2");

let hover33 = document.querySelector(".rij3 .hover3");
let foto33 = document.querySelector(".rij3 .foto3");
let info33 = document.querySelector(".rij3 .info3");


hover11.addEventListener('mouseover', function() {
  foto11.classList.add("hidefoto");
  info11.classList.remove("hide");
});

hover11.addEventListener('mouseout', function() {
  foto11.classList.remove("hidefoto");
  info11.classList.add("hide");
});

hover12.addEventListener('mouseover', function() {
  foto12.classList.add("hidefoto");
  info12.classList.remove("hide");
});

hover12.addEventListener('mouseout', function() {
  foto12.classList.remove("hidefoto");
  info12.classList.add("hide");
});

hover13.addEventListener('mouseover', function() {
  foto13.classList.add("hidefoto");
  info13.classList.remove("hide");
});

hover13.addEventListener('mouseout', function() {
  foto13.classList.remove("hidefoto");
  info13.classList.add("hide");
});


hover21.addEventListener('mouseover', function() {
  foto21.classList.add("hidefoto");
  info21.classList.remove("hide");
});

hover21.addEventListener('mouseout', function() {
  foto21.classList.remove("hidefoto");
  info21.classList.add("hide");
});

hover22.addEventListener('mouseover', function() {
  foto22.classList.add("hidefoto");
  info22.classList.remove("hide");
});

hover22.addEventListener('mouseout', function() {
  foto22.classList.remove("hidefoto");
  info22.classList.add("hide");
});

hover23.addEventListener('mouseover', function() {
  foto23.classList.add("hidefoto");
  info23.classList.remove("hide");
});

hover23.addEventListener('mouseout', function() {
  foto23.classList.remove("hidefoto");
  info23.classList.add("hide");
});


hover31.addEventListener('mouseover', function() {
  foto31.classList.add("hidefoto");
  info31.classList.remove("hide");
});

hover31.addEventListener('mouseout', function() {
  foto31.classList.remove("hidefoto");
  info31.classList.add("hide");
});

hover32.addEventListener('mouseover', function() {
  foto32.classList.add("hidefoto");
  info32.classList.remove("hide");
});

hover32.addEventListener('mouseout', function() {
  foto32.classList.remove("hidefoto");
  info32.classList.add("hide");
});

hover33.addEventListener('mouseover', function() {
  foto33.classList.add("hidefoto");
  info33.classList.remove("hide");
});

hover33.addEventListener('mouseout', function() {
  foto33.classList.remove("hidefoto");
  info33.classList.add("hide");
});
