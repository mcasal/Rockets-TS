"use strict";
// es declara una variable de tipo class creada a rocket.js
var rocket;
var arrRockets = [];
var rocket1 = new Rocket('32WESSDS', 3, [10, 30, 80]);
var rocket2 = new Rocket('LDSFJA32', 6, [30, 40, 50, 50, 30, 10]);
arrRockets.push(rocket1);
arrRockets.push(rocket2);
var infoRockets = document.getElementById('infoRockets'); // div on fa print de tota la info de cada rocket
var counting = document.querySelector('#counting'); // span on fa print de la array que suma o resta potència
var currentPower = document.getElementById('currentPower'); // span on suma la potència total dels propulsors
for (var i = 0; i < arrRockets.length; i++) {
    infoRockets.classList.remove("d-none");
    infoRockets.innerHTML += "<div id=\"rocket" + (i + 1) + "\" class=\"col-6 container mt-5\"><p class=\"text-center pt-4 font-weight-bold text-lg\">Rocket " + (i + 1) + "</p><p class=\"text-center text-sm\">Code: " + arrRockets[i].code + "</p><p class=\"text-center text-sm\">Total thrusters: " + arrRockets[i].totalThruster + "</p><p class=\"text-center text-sm\">Max power: " + arrRockets[i].thrusters + "</p><p class=\"text-center text-sm\">Current Speed: <span id=\"counting\">" + arrRockets[i].startCounting() + "</span></p><p class=\"text-center text-sm\">Current Power: <span id=\"currentPower\">" + arrRockets[i].currentPower() + "</span></p><div class=\"text-center\"><button type=\"button\" class=\"btn btn-outline-light btn-sm mx-2\" onclick=\"" + arrRockets[i].speedUp() + "\">Speed Up</button><button type=\"button\" class=\"btn btn-outline-light btn-sm mx-2\" onclick=\"" + arrRockets[i].slowDown() + "\">Slow Down</button></div></div>";
}
