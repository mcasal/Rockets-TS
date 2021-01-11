class Rocket {
    code: string;
    totalThruster: number;
    thrusters: Array<number> = []; // array amb la potència establerta
    countingPower: Array<number> = []; // array que començarà de 0 i sumarà o restarà velocitat


    constructor(code: string, totalThruster: number, thrusters: Array<number>) {
        this.code = code;
        this.totalThruster = totalThruster;
        this.thrusters = thrusters;
        this.countingPower = [];
    }

    // SETTERS
    set setCountingPower(countingPower: Array<number>) {
        this.countingPower = [];
    }

    set setThrusters(thrusters: Array<number>) {
        this.thrusters = thrusters;
    }

    set setTotalThrusters(updateThruster: number) {
        this.totalThruster = updateThruster;
    }

    // GETTERS
    get getCountingPower() {
        return this.countingPower;
    }

    get getThrusters() {
        return this.thrusters;
    }

    // METHODS

    // posa els mateixos elements de la array del propulsors i inicialitza els valors a 0
    startCounting(): Array<number> {
        // const arrayMap = this.thrusters.map(i => i = 0);

        for (let i = 0; i < this.thrusters.length; i++) {
            this.countingPower[i] = 0;
        }

        return this.countingPower;
    }

    speedUp(): Array<number> {

        for (let i = 0; i < this.thrusters.length; i++) {
            if (this.thrusters[i] > this.countingPower[i]) {
                this.countingPower[i] += 10;
            }
        }

        return this.countingPower;
    }

    slowDown(): Array<number> {

        for (let i = 0; i < this.thrusters.length; i++) {
            if (this.thrusters[i] >= this.countingPower[i] && this.countingPower[i] > 0) {
                this.countingPower[i] -= 10;
            }
        }

        return this.countingPower;
    }

    // suma tots els valors de la array countingPower
    currentPower(): number {
        let total = 0;

        this.countingPower.forEach(element => {
            total += element;
        });

        return total;
    }
}