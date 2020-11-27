const arrRockets: Rocket[] = [];

// crear els rockets
function crearRocket(code: string, totalThruster: number, thrusters: Array<number>) {
    const rocketCreat = new Rocket(code, totalThruster, thrusters);
    arrRockets.push(rocketCreat);
    console.log(arrRockets);
}

// mostrar informació del rocket i botons d'accelerar i frenar
function showInfo(index: number) {
    const printRocket = document.getElementById('printRocket') as HTMLElement;
    printRocket.innerHTML = `
        <div class="col-6 container mt-5">
            <p class="text-center pt-4 font-weight-bold text-lg">Rocket ${index + 1}</p>
            <p class="text-center text-sm">Code: ${arrRockets[index].code}</p>
            <p class="text-center text-sm">Total thrusters: ${arrRockets[index].totalThruster}</p>
            <p class="text-center text-sm">Max power: ${arrRockets[index].thrusters}</p>
            <p class="text-center text-sm">Current Speed: <span id="currentSpeed${index + 1}">${arrRockets[index].startCounting()}</span></p>
            <p class="text-center text-sm">Current Power: <span id="currentPower${index + 1}">${arrRockets[index].currentPower()}</span></p>
            <div class="text-center">
                <button type="button" id="speedUpRocket${index + 1}" class="btn btn-outline-light btn-sm mx-2 speed-up">Speed Up</button>
                <button type="button" id="slowDownRocket${index + 1}" class="btn btn-outline-light btn-sm mx-2 slow-down">Slow Down</button>
            </div>
        </div>`;

    // funcionament dels botons
    const btnSpeedUp: any = document.getElementById(`speedUpRocket${index + 1}`) as HTMLElement;
    const btnSlowDown: any = document.getElementById(`slowDownRocket${index + 1}`) as HTMLElement;

    const rocketCurrentSpeed = document.getElementById(`currentSpeed${index + 1}`) as HTMLElement;
    const rocketCurrentPower = document.getElementById(`currentPower${index + 1}`) as HTMLElement;

    btnSpeedUp.onclick = function () {
        rocketCurrentSpeed.innerText = `${arrRockets[index].speedUp()}`;
        rocketCurrentPower.innerText = `${arrRockets[index].currentPower()}`;
    }

    btnSlowDown.onclick = function () {
        rocketCurrentSpeed.innerText = `${arrRockets[index].slowDown()}`;
        rocketCurrentPower.innerText = `${arrRockets[index].currentPower()}`;
    }
}

// informació de tots els rockets
function showAll() {
    for (let i = 0; i < arrRockets.length; i++) {
        const printAllRockets = document.getElementById('printAllRockets') as HTMLElement;
        const printRocket = document.getElementById('printRocket') as HTMLElement;
        printRocket.classList.add("d-none");
        printAllRockets.innerHTML += `
        <div class="col-6 container mt-5">
            <p class="text-center pt-4 font-weight-bold text-lg" id="rocketNum${i + 1}">Rocket ${i + 1}</p>
            <p class="text-center text-sm" id="rocketCode${i + 1}">Code: ${arrRockets[i].code}</p>
            <p class="text-center text-sm" id="rocketThrusters${i + 1}">Total thrusters: ${arrRockets[i].totalThruster}</p>
            <p class="text-center text-sm" id="rocketPower${i + 1}">Max power: ${arrRockets[i].thrusters}</p>
        </div>`;
    }
}