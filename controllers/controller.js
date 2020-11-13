"use strict";
// es declara una variable de tipo class creada a rocket.js
var rocket;
var arrRockets = [];
var rocket1 = new Rocket('32WESSDS', 3);
var rocket2 = new Rocket('LDSFJA32', 6);
arrRockets.push(rocket1);
arrRockets.push(rocket2);
//console.log(arrRockets);
//console.log(rocket1);
//console.log(rocket2);
var infoRockets = document.getElementById('infoRockets');
for (var i = 0; i < arrRockets.length; i++) {
    infoRockets.classList.remove("d-none");
    infoRockets.innerHTML += "<p class=\"text-center pt-4 font-weight-bold text-lg\">Rocket " + (i + 1) + "</p><p class=\"text-center text-sm\">Code: " + arrRockets[i].code + "</p><p class=\"text-center text-sm\">Thruster: " + arrRockets[i].thruster + "</p>";
}
