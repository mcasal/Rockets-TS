"use strict";
var rocket;
var arrRockets = [];
var rocket1 = new Rocket('32WESSDS', 3, [10, 30, 80]);
var rocket2 = new Rocket('LDSFJA32', 6, [30, 40, 50, 50, 30, 10]);
arrRockets.push(rocket1);
arrRockets.push(rocket2);
for (var i = 0; i < arrRockets.length; i++) {
    var infoRockets = document.getElementById('infoRockets');
    // es crea un div per a cada rocket
    infoRockets.classList.remove("d-none");
    infoRockets.innerHTML += "<div id=\"rocket" + (i + 1) + "\"></div>";
    //es printa dins del div de cada rocket una platilla on es volcarà tota la informació
    var rocketTemplate = document.getElementById("rocket" + (i + 1));
    rocketTemplate.innerHTML = "\n    <div class=\"col-6 container mt-5\">\n        <p class=\"text-center pt-4 font-weight-bold text-lg\" id=\"rocketNum" + (i + 1) + "\">Rocket " + (i + 1) + "</p>\n        <p class=\"text-center text-sm\" id=\"rocketCode" + (i + 1) + "\">Code: " + arrRockets[i].code + "</p>\n        <p class=\"text-center text-sm\" id=\"rocketThrusters" + (i + 1) + "\">Total thrusters: " + arrRockets[i].totalThruster + "</p>\n        <p class=\"text-center text-sm\" id=\"rocketPower" + (i + 1) + "\">Max power: " + arrRockets[i].thrusters + "</p>\n        <p class=\"text-center text-sm\">Current Speed: <span id=\"currentSpeed" + (i + 1) + "\">" + arrRockets[i].startCounting() + "</span></p>\n        <p class=\"text-center text-sm\">Current Power: <span id=\"currentPower" + (i + 1) + "\">" + arrRockets[i].currentPower() + "</span></p>\n        <div class=\"text-center\">\n            <button type=\"button\" id=\"speedUpRocket" + (i + 1) + "\" class=\"btn btn-outline-light btn-sm mx-2 speed-up\">Speed Up</button>\n            <button type=\"button\" id=\"slowDownRocket" + (i + 1) + "\" class=\"btn btn-outline-light btn-sm mx-2 slow-down\">Slow Down</button>\n        </div>\n    </div>";
}
var _loop_1 = function (i) {
    var btnSpeedUp = document.getElementsByClassName('speed-up');
    var btnSlowDown = document.getElementsByClassName('slow-down');
    var rocketCurrentSpeed = document.getElementById("currentSpeed" + (i + 1));
    var rocketCurrentPower = document.getElementById("currentPower" + (i + 1));
    btnSpeedUp[i].onclick = function () {
        rocketCurrentSpeed.innerText = "" + arrRockets[i].speedUp();
        rocketCurrentPower.innerText = "" + arrRockets[i].currentPower();
    };
    btnSlowDown[i].onclick = function () {
        rocketCurrentSpeed.innerText = "" + arrRockets[i].slowDown();
        rocketCurrentPower.innerText = "" + arrRockets[i].currentPower();
    };
};
// addEventListeners no funcionen: Property 'addEventListener' does not exist on type 'HTMLCollectionOf<Element>'.
for (var i = 0; i < arrRockets.length; i++) {
    _loop_1(i);
}
