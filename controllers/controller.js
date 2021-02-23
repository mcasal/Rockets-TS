"use strict";
var arrRockets = [];
var form = document.getElementById('formRocket1');
var totalThruster = Number(document.getElementById('totalThrustersR1').value);
var inputsThrustersR1 = document.getElementById('inputsThrustersR1');
var errorCode;
var errorThrusters;
// function per a crear rockets
function crearRocket() {
    var code = document.getElementById('rocketCode').value;
    var inputsThrusters = document.getElementById('inputsThrustersR1');
    var updateInputsValues = inputsThrusters === null || inputsThrusters === void 0 ? void 0 : inputsThrusters.querySelectorAll('.newValue');
    var thrusters = [];
    var rocketExists = false;
    validateCode(code);
    validateThrusters();
    for (var _i = 0, arrRockets_1 = arrRockets; _i < arrRockets_1.length; _i++) { //busca si el rocket existeix
        var rocket = arrRockets_1[_i];
        if (rocket.code == code) {
            rocketExists = true;
        }
    }
    if (!rocketExists && !errorCode && !errorThrusters) {
        var newRocket = new Rocket(code, totalThruster, thrusters);
        arrRockets.push(newRocket);
        addToList(newRocket);
        inputsThrustersR1.innerHTML = '';
        form.reset();
    }
    else {
        for (var _a = 0, arrRockets_2 = arrRockets; _a < arrRockets_2.length; _a++) {
            var rocket = arrRockets_2[_a];
            if (rocket.code == code) {
                alert("This rocket already exists!");
            }
        }
    }
    updateInputsValues === null || updateInputsValues === void 0 ? void 0 : updateInputsValues.forEach(function (inputs) {
        var inputsValue = Number(inputs.value);
        thrusters.push(inputsValue);
    });
}
function validateCode(codeRocket) {
    var code = document.getElementById('rocketCode');
    errorCode = false;
    if (codeRocket == "" || !validateCodeRegEx(codeRocket)) {
        code.classList.add('is-invalid');
        errorCode = true;
    }
    return errorCode;
}
form.addEventListener('blur', function (event) {
    if (event.target.value != '')
        event.target.classList.remove('is-invalid');
}, true);
function validateCodeRegEx(code) {
    var codeRegEx = /^[0-9a-zA-Z]{8}$/;
    return codeRegEx.test(code) ? true : false;
}
function validateThrusters() {
    var thrusters = document.getElementById('totalThrustersR1');
    var inputsThrusters = document.getElementById('inputsThrustersR1');
    var inputsThrustersLength = inputsThrusters.children.length;
    var thrustersValue = Number(thrusters.value);
    totalThruster = thrustersValue;
    if (inputsThrustersLength === thrustersValue) {
        thrusters.classList.remove('is-invalid');
        errorThrusters = false;
    }
    else if (inputsThrustersLength < thrustersValue || inputsThrustersLength > thrustersValue) {
        thrusters.classList.add('is-invalid');
        errorThrusters = true;
    }
    return errorThrusters;
}
// printa els rockets com a llista
function addToList(rocket) {
    var rocketsList = document.getElementById('rocketsList');
    var index = arrRockets.indexOf(rocket);
    rocketsList.innerHTML += "\n        <div class=\"alert alert-info mt-4 row\">\n            <div class=\"text-left col-6 pt-2 monospace\">Rocket " + (index + 1) + ": " + rocket.code + "</div>\n            <div class=\"text-right col-6\">\n                <button type=\"button\" class=\"btn btn-outline-info mr-2 rounded\" id=\"#editRocket" + (index + 1) + "\" onclick=\"editRocket(arrRockets[" + index + "])\"><i class=\"fas fa-edit mr-2\"></i>Edit</button>\n                <button type=\"button\" class=\"btn btn-outline-info ml-2 rounded\" onclick=\"showInfo(arrRockets[" + index + "])\"><i class=\"far fa-eye mr-2\"></i>Show</button>\n            </div>\n        </div>";
}
// crear inputs pels thrusters 
function inputThrusters() {
    var totalThrustersRocket = Number(document.getElementById('totalThrustersR1').value);
    inputsThrustersR1.innerHTML = '';
    var thrusters = document.getElementById('totalThrustersR1');
    thrusters.classList.remove('is-invalid');
    // edit rocket
    var editThrusters = document.getElementById('editThrusters');
    if (editThrusters) {
        var updateTotalThrusters = Number(document.getElementById('updateTotalThrusters').value);
        var inputsThrusters = document.getElementById('inputsThrusters');
        inputsThrusters.innerHTML = '';
        for (var i = 0; i < updateTotalThrusters; i++) {
            inputsThrusters.innerHTML += "\n                <div class=\"form-row\">\n                    <label class=\"col-form-label\">Thunder power: </label>\n                    <input type=\"number\" min=\"10\" step=\"10\" class=\"form-control newValue\" value=\"10\">\n                </div>";
        }
        ;
    }
    else {
        for (var i = 0; i < totalThrustersRocket; i++) {
            inputsThrustersR1.innerHTML += "\n                <div class=\"form-row\">\n                    <label class=\"col-form-label\">Thunder power: </label>\n                    <input type=\"number\" min=\"10\" step=\"10\" class=\"form-control newValue\" value=\"10\">\n                </div>";
        }
        ;
    }
}
// mostrar informació del rocket i botons d'accelerar i frenar
function showInfo(rocket) {
    var index = arrRockets.indexOf(rocket);
    var printRocket = document.getElementById('printRocket');
    printRocket.innerHTML = "\n        <div class=\"card text-center w-50 mx-auto mt-3\">\n            <div class=\"card-body bg-light monospace\">\n                <p class=\"text-center mt-3 mb-4 font-weight-bold text-lg\">Rocket " + (index + 1) + "</p>\n            <p class=\"text-center text-sm\">Code: " + rocket.code + "</p>\n            <p class=\"text-center text-sm\">Total thrusters: " + rocket.totalThruster + "</p>\n            <p class=\"text-center text-sm\">Max power: " + rocket.thrusters + "</p>\n            <p class=\"text-center text-sm\">Current Speed: <span id=\"currentSpeed" + (index + 1) + "\">" + rocket.startCounting() + "</span></p>\n            <p class=\"text-center text-sm\">Current Power: <span id=\"currentPower" + (index + 1) + "\">" + rocket.currentPower() + "</span></p>\n            <div class=\"text-center mt-5 mb-2\">\n                <button type=\"button\" id=\"speedUpRocket" + (index + 1) + "\" class=\"btn btn-outline-dark mx-2 speed-up\">Speed Up</button>\n                <button type=\"button\" id=\"slowDownRocket" + (index + 1) + "\" class=\"btn btn-outline-dark mx-2 slow-down\">Slow Down</button>\n            </div>\n            </div>\n        </div>";
    // funcionament dels botons
    var btnSpeedUp = document.getElementById("speedUpRocket" + (index + 1));
    var btnSlowDown = document.getElementById("slowDownRocket" + (index + 1));
    var rocketCurrentSpeed = document.getElementById("currentSpeed" + (index + 1));
    var rocketCurrentPower = document.getElementById("currentPower" + (index + 1));
    btnSpeedUp.onclick = function () {
        rocketCurrentSpeed.innerText = "" + rocket.speedUp();
        rocketCurrentPower.innerText = "" + rocket.currentPower();
    };
    btnSlowDown.onclick = function () {
        rocketCurrentSpeed.innerText = "" + rocket.slowDown();
        rocketCurrentPower.innerText = "" + rocket.currentPower();
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
function editRocket(rocket) {
    var index = arrRockets.indexOf(rocket);
    var printRocket = document.getElementById('printRocket');
    printRocket.innerHTML = '';
    printRocket.innerHTML = "\n    <div class=\"card w-50 mx-auto mt-3\">\n    <div class=\"card-body\">\n    <form id=\"formEditRocket\">\n        <div class=\"form-group\">\n            <label class=\"col-form-label\">Code: </label>\n            <input type=\"text\" class=\"form-control\" value=" + rocket.code + " disabled>\n        </div>\n        <div class=\"form-row\">\n            <div class=\"form-group col-8\">\n                <label class=\"col-form-label\">Total thrusters: </label>\n                <input type=\"number\" \n                        id=\"updateTotalThrusters\" \n                        class=\"form-control\" \n                        min=\"1\"\n                        value=" + rocket.totalThruster + ">\n            </div>\n            <div class=\"form-inline align-items-end mb-3 col-4\">\n                <button type=\"button\" \n                        id=\"editThrusters\"\n                        class=\"ml-3 btn btn-outline-info\" onclick=\"inputThrusters()\">Add thrusters\n                </button>\n            </div>\n        </div>\n        <div id=\"inputsThrusters\">\n        \n        </div>\n        </form>\n        </div>\n        \n        <div class=\"card-footer\">\n        <button type=\"button\" class=\"btn btn-outline-success float-right\" onclick=\"updateRocket(arrRockets[" + index + "])\">Update rocket</button>\n    </div>\n    </div>\n    ";
}
function updateRocket(rocket) {
    var updateTotalThrusters = document.getElementById('updateTotalThrusters').value;
    var updateThrusters = document.getElementById('inputsThrusters');
    var updateInputsValues = updateThrusters.querySelectorAll('.newValue');
    var newThrusters = [];
    var boolean = true;
    console.log(updateThrusters);
    if (updateTotalThrusters == "") {
        alert('The rocket must have at least one thruster!');
    }
    else if (updateTotalThrusters != rocket.totalThruster) { //
        rocket.setTotalThrusters = updateTotalThrusters;
        updateInputsValues.forEach(function (inputs) {
            newThrusters.push(inputs.value);
        });
        rocket.setCountingPower = newThrusters.length;
        rocket.setThrusters = newThrusters;
        alert('The rocket has been successfully updated!');
    }
    else {
        var powerThrusters = confirm("Do you want only to change the power?");
        if (powerThrusters) {
            updateInputsValues.forEach(function (inputs) {
                newThrusters.push(inputs.value);
            });
            rocket.setCountingPower = newThrusters.length;
            rocket.setThrusters = newThrusters;
            alert('The rocket has been successfully updated!');
        }
        else {
            alert('The rocket remains the same.');
        }
    }
}
