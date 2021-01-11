"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(code, totalThruster, thrusters) {
        this.thrusters = []; // array amb la potència establerta
        this.countingPower = []; // array que començarà de 0 i sumarà o restarà velocitat
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
    Object.defineProperty(Rocket.prototype, "setThrusters", {
        set: function (thrusters) {
            this.thrusters = thrusters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rocket.prototype, "setTotalThrusters", {
        set: function (updateThruster) {
            this.totalThruster = updateThruster;
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
    Object.defineProperty(Rocket.prototype, "getThrusters", {
        get: function () {
            return this.thrusters;
        },
        enumerable: false,
        configurable: true
    });
    // METHODS
    // posa els mateixos elements de la array del propulsors i inicialitza els valors a 0
    Rocket.prototype.startCounting = function () {
        // const arrayMap = this.thrusters.map(i => i = 0);
        for (var i = 0; i < this.thrusters.length; i++) {
            this.countingPower[i] = 0;
        }
        return this.countingPower;
    };
    Rocket.prototype.speedUp = function () {
        for (var i = 0; i < this.thrusters.length; i++) {
            if (this.thrusters[i] > this.countingPower[i]) {
                this.countingPower[i] += 10;
            }
        }
        return this.countingPower;
    };
    Rocket.prototype.slowDown = function () {
        for (var i = 0; i < this.thrusters.length; i++) {
            if (this.thrusters[i] >= this.countingPower[i] && this.countingPower[i] > 0) {
                this.countingPower[i] -= 10;
            }
        }
        return this.countingPower;
    };
    // suma tots els valors de la array countingPower
    Rocket.prototype.currentPower = function () {
        var total = 0;
        this.countingPower.forEach(function (element) {
            total += element;
        });
        return total;
    };
    return Rocket;
}());
