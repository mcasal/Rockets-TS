"use strict";
var arrRockets = [];
// crear els rockets
function crearRocket(code, totalThruster, thrusters) {
    var rocketCreat = new Rocket(code, totalThruster, thrusters);
    arrRockets.push(rocketCreat);
    console.log(arrRockets);
}
// mostrar informació del rocket i botons d'accelerar i frenar
function showInfo(index) {
    var printRocket = document.getElementById('printRocket');
    printRocket.innerHTML = "\n        <div class=\"col-6 container mt-5\">\n            <p class=\"text-center pt-4 font-weight-bold text-lg\">Rocket " + (index + 1) + "</p>\n            <p class=\"text-center text-sm\">Code: " + arrRockets[index].code + "</p>\n            <p class=\"text-center text-sm\">Total thrusters: " + arrRockets[index].totalThruster + "</p>\n            <p class=\"text-center text-sm\">Max power: " + arrRockets[index].thrusters + "</p>\n            <p class=\"text-center text-sm\">Current Speed: <span id=\"currentSpeed" + (index + 1) + "\">" + arrRockets[index].startCounting() + "</span></p>\n            <p class=\"text-center text-sm\">Current Power: <span id=\"currentPower" + (index + 1) + "\">" + arrRockets[index].currentPower() + "</span></p>\n            <div class=\"text-center\">\n                <button type=\"button\" id=\"speedUpRocket" + (index + 1) + "\" class=\"btn btn-outline-light btn-sm mx-2 speed-up\">Speed Up</button>\n                <button type=\"button\" id=\"slowDownRocket" + (index + 1) + "\" class=\"btn btn-outline-light btn-sm mx-2 slow-down\">Slow Down</button>\n            </div>\n        </div>";
    // funcionament dels botons
    var btnSpeedUp = document.getElementById("speedUpRocket" + (index + 1));
    var btnSlowDown = document.getElementById("slowDownRocket" + (index + 1));
    var rocketCurrentSpeed = document.getElementById("currentSpeed" + (index + 1));
    var rocketCurrentPower = document.getElementById("currentPower" + (index + 1));
    btnSpeedUp.onclick = function () {
        rocketCurrentSpeed.innerText = "" + arrRockets[index].speedUp();
        rocketCurrentPower.innerText = "" + arrRockets[index].currentPower();
    };
    btnSlowDown.onclick = function () {
        rocketCurrentSpeed.innerText = "" + arrRockets[index].slowDown();
        rocketCurrentPower.innerText = "" + arrRockets[index].currentPower();
    };
}
// informació de tots els rockets
function showAll() {
    for (var i = 0; i < arrRockets.length; i++) {
        var printAllRockets = document.getElementById('printAllRockets');
        var printRocket = document.getElementById('printRocket');
        printRocket.classList.add("d-none");
        printAllRockets.innerHTML += "\n        <div class=\"col-6 container mt-5\">\n            <p class=\"text-center pt-4 font-weight-bold text-lg\" id=\"rocketNum" + (i + 1) + "\">Rocket " + (i + 1) + "</p>\n            <p class=\"text-center text-sm\" id=\"rocketCode" + (i + 1) + "\">Code: " + arrRockets[i].code + "</p>\n            <p class=\"text-center text-sm\" id=\"rocketThrusters" + (i + 1) + "\">Total thrusters: " + arrRockets[i].totalThruster + "</p>\n            <p class=\"text-center text-sm\" id=\"rocketPower" + (i + 1) + "\">Max power: " + arrRockets[i].thrusters + "</p>\n        </div>";
    }
}
