"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(code, totalThruster, thrusters) {
        this.code = code;
        this.totalThruster = totalThruster;
        this.thrusters = thrusters;
        this.countingPower = [];
    }
    Object.defineProperty(Rocket.prototype, "setCountingPower", {
        // SETTERS
        set: function (countingPower) {
            this.countingPower = [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rocket.prototype, "getCountingPower", {
        // GETTERS
        get: function () {
            return this.countingPower;
        },
        enumerable: false,
        configurable: true
    });
    // METHODS
    // posa els mateixos elements de la array del propulsors i inicialitza els valors a 0
    Rocket.prototype.startCounting = function () {
        for (var i = 0; i < this.thrusters.length; i++) {
            this.countingPower[i] = 0;
        }
        return this.countingPower;
    };
    // suma tots els valors de la array Counting
    Rocket.prototype.currentPower = function () {
        var total = 0;
        this.countingPower.forEach(function (element) {
            total += element;
        });
        return total;
    };
    Rocket.prototype.speedUp = function () {
        for (var i = 0; i < this.thrusters.length; i++) {
            if (this.thrusters[i] > this.countingPower[i]) {
                this.countingPower[i] += 10;
            }
        }
        //return counting.textContent = this.countingPower.toString();
    };
    Rocket.prototype.slowDown = function () {
        for (var i = 0; i < this.thrusters.length; i++) {
            if (this.countingPower[i] > 0) {
                this.countingPower[i] -= 10;
            }
        }
        return this.countingPower;
    };
    return Rocket;
}());
