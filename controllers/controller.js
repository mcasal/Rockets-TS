"use strict";
var arrRockets = [];
var rocket1 = new Rocket('32WESSDS', 3, [10, 30, 80]);
var rocket2 = new Rocket('LDSFJA32', 6, [30, 40, 50, 50, 30, 10]);
// function per a crear rockets
function crearRocket() {
    var createRocket1 = document.getElementById('createRocket1');
    var createRocket2 = document.getElementById('createRocket2');
    var addRocket1 = document.getElementById('addRocket1');
    var addRocket2 = document.getElementById('addRocket2');
    if ((event === null || event === void 0 ? void 0 : event.target).id == createRocket1.id) {
        arrRockets.push(rocket1);
        createRocket1.setAttribute('disabled', '');
        addRocket1.removeAttribute('disabled');
    }
    else if ((event === null || event === void 0 ? void 0 : event.target).id == createRocket2.id) {
        if (arrRockets.length == 0) {
            alert('Create Rocket 1 first!');
        }
        else {
            arrRockets.push(rocket2);
            createRocket2.setAttribute('disabled', '');
            addRocket2.removeAttribute('disabled');
        }
    }
}
// botons que afegeixen els rockets a la llista
var btnAddrockets = document.querySelectorAll('.addRocket');
btnAddrockets.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        if (e.target.id === 'addRocket1') { //e.target.id dóna problemes amb typescript
            addToList(rocket1);
        }
        else {
            addToList(rocket2);
        }
        ;
        btn.setAttribute("data-dismiss", "modal"); // tanca el modal després del click
    });
});
// printa els rockets com a llista
function addToList(rocket) {
    var rocketsList = document.getElementById('rocketsList');
    var index = arrRockets.indexOf(rocket);
    rocketsList.innerHTML = "\n        <div class=\"alert alert-info mt-4 row\">\n            <div class=\"text-left col-6 pt-2 monospace\">Rocket " + (index + 1) + ": " + rocket.code + "</div>\n            <div class=\"text-right col-6\">\n                <button type=\"button\" class=\"btn btn-outline-info mr-2 rounded\" data-toggle=\"modal\" data-target=\"#editRocket" + (index + 1) + "\"><i class=\"fas fa-edit mr-2\"></i>Edit</button>\n                <button type=\"button\" class=\"btn btn-outline-info ml-2 rounded\" onclick=\"showInfo(" + index + ")\"><i class=\"far fa-eye mr-2\"></i>Show</button>\n            </div>\n        </div>";
}
// botons per editar els coets
var btnUpdateRockets = document.querySelectorAll('.updateRocket');
btnUpdateRockets.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        if (e.target.id === 'btnUpdateR1') {
            updateRocket(rocket1);
        }
        else {
            updateRocket(rocket2);
        }
        ;
        btn.setAttribute("data-dismiss", "modal"); // tanca el modal després del click
    });
});
// actualitzar el coet
function updateRocket(rocket) {
    var index = arrRockets.indexOf(rocket);
    var updateTotalThrusters = Number(document.getElementById("totalThrustersR" + (index + 1)).value);
    var updateThrusters = document.getElementById("inputsThrustersR" + (index + 1)); // div amb els inputs
    var updateInputsValues = updateThrusters.querySelectorAll('.newValue');
    var newThrusters = [];
    //setters del rocket
    rocket.setTotalThrusters = updateTotalThrusters;
    updateInputsValues.forEach(function (inputs) {
        var inputsValue = Number(inputs.value);
        newThrusters.push(inputsValue);
    });
    rocket.setThrusters = newThrusters;
    console.log(rocket);
}
// crear inputs pels thrusters
function inputThrusters() {
    var totalThrustersRocket1 = Number(document.getElementById('totalThrustersR1').value);
    var totalThrustersRocket2 = Number(document.getElementById('totalThrustersR2').value);
    var inputsThrustersR1 = document.getElementById('inputsThrustersR1');
    var inputsThrustersR2 = document.getElementById('inputsThrustersR2');
    var totalThrusters;
    if ((event === null || event === void 0 ? void 0 : event.target).id === 'totalThrustersRocket1') {
        totalThrusters = totalThrustersRocket1;
        inputsThrustersR1.innerHTML = '';
        for (var i = 0; i < totalThrusters; i++) {
            inputsThrustersR1.innerHTML += "\n            <div class=\"form-row\">\n                <label class=\"col-form-label\">Thunder power: </label>\n                <input type=\"number\" min=\"10\" step=\"10\" class=\"form-control newValue\" value=\"10\">\n            </div>";
        }
    }
    else {
        totalThrusters = totalThrustersRocket2;
        inputsThrustersR2.innerHTML = '';
        for (var i = 0; i < totalThrusters; i++) {
            inputsThrustersR2.innerHTML += "\n            <div class=\"form-row\">\n                <label class=\"col-form-label\">Thunder power: </label>\n                <input type=\"number\" min=\"10\" step=\"10\" class=\"form-control newValue\" value=\"10\">\n            </div>";
        }
    }
    ;
}
// mostrar informació del rocket i botons d'accelerar i frenar
function showInfo(index) {
    var printRocket = document.getElementById('printRocket');
    printRocket.innerHTML = "\n        <div class=\"card text-center w-50 mx-auto mt-3\">\n            <div class=\"card-body bg-light monospace\">\n                <p class=\"text-center mt-3 mb-4 font-weight-bold text-lg\">Rocket " + (index + 1) + "</p>\n            <p class=\"text-center text-sm\">Code: " + arrRockets[index].code + "</p>\n            <p class=\"text-center text-sm\">Total thrusters: " + arrRockets[index].totalThruster + "</p>\n            <p class=\"text-center text-sm\">Max power: " + arrRockets[index].thrusters + "</p>\n            <p class=\"text-center text-sm\">Current Speed: <span id=\"currentSpeed" + (index + 1) + "\">" + arrRockets[index].startCounting() + "</span></p>\n            <p class=\"text-center text-sm\">Current Power: <span id=\"currentPower" + (index + 1) + "\">" + arrRockets[index].currentPower() + "</span></p>\n            <div class=\"text-center mt-5 mb-2\">\n                <button type=\"button\" id=\"speedUpRocket" + (index + 1) + "\" class=\"btn btn-outline-dark mx-2 speed-up\">Speed Up</button>\n                <button type=\"button\" id=\"slowDownRocket" + (index + 1) + "\" class=\"btn btn-outline-dark mx-2 slow-down\">Slow Down</button>\n            </div>\n            </div>\n        </div>";
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
    var printRocket = document.getElementById('printRocket');
    printRocket.innerHTML = '';
    for (var i = 0; i < arrRockets.length; i++) {
        printRocket.innerHTML += "\n        <div class=\"col-sm-6 mt-4\">\n            <div class=\"card bg-info\">\n                <div class=\"card-body monospace text-light text-center\">\n                    <h5 class=\"card-title font-weight-bold text-lg pt-3\" id=\"rocketNum" + (i + 1) + "\">Rocket " + (i + 1) + "</h5>\n                    <p class=\"text-sm\" id=\"rocketCode" + (i + 1) + "\">Code: " + arrRockets[i].code + "</p>\n                    <p class=\"text-sm\" id=\"rocketThrusters" + (i + 1) + "\">Total thrusters: " + arrRockets[i].totalThruster + "</p>\n                    <p class=\"text-sm\" id=\"rocketPower" + (i + 1) + "\">Max power: " + arrRockets[i].thrusters + "</p>\n                </div>\n            </div>\n        </div>";
    }
}
