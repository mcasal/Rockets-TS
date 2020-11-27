const arrRockets: Rocket[] = [];

// crear els rockets
function crearRocket(code: string, totalThruster: number, thrusters: Array<number>) {
    const rocketCreat = new Rocket(code, totalThruster, thrusters);
    arrRockets.push(rocketCreat);
    console.log(arrRockets);
}

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

// hi ha problemitas al show el num de rockets
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
// mostrar informació de rocket
//const infoRocket1 = document.getElementById('infoRocket1') as HTMLElement;
//const infoRocket2 = document.getElementById('infoRocket2') as HTMLElement;

/* for (let i = 0; i < arrRockets.length; i++) {
    const infoRockets = document.getElementById('infoRockets') as HTMLElement;
    // es crea un div per a cada rocket
    //infoRockets.classList.remove("d-none");
    infoRockets.innerHTML += `<div id="rocket${i + 1}"></div>`;

    //es printa dins del div de cada rocket una platilla on es volcarà tota la informació
    const rocketTemplate = document.getElementById(`rocket${i + 1}`) as HTMLElement;
    rocketTemplate.innerHTML = `
    <div class="col-6 container mt-5">
        <p class="text-center pt-4 font-weight-bold text-lg" id="rocketNum${i + 1}">Rocket ${i + 1}</p>
        <p class="text-center text-sm" id="rocketCode${i + 1}">Code: ${arrRockets[i].code}</p>
        <p class="text-center text-sm" id="rocketThrusters${i + 1}">Total thrusters: ${arrRockets[i].totalThruster}</p>
        <p class="text-center text-sm" id="rocketPower${i + 1}">Max power: ${arrRockets[i].thrusters}</p>
        <p class="text-center text-sm">Current Speed: <span id="currentSpeed${i + 1}">${arrRockets[i].startCounting()}</span></p>
        <p class="text-center text-sm">Current Power: <span id="currentPower${i + 1}">${arrRockets[i].currentPower()}</span></p>
        <div class="text-center">
            <button type="button" id="speedUpRocket${i + 1}" class="btn btn-outline-light btn-sm mx-2 speed-up">Speed Up</button>
            <button type="button" id="slowDownRocket${i + 1}" class="btn btn-outline-light btn-sm mx-2 slow-down">Slow Down</button>
        </div>
    </div>`;
} */

// addEventListeners no funcionen: Property 'addEventListener' does not exist on type 'HTMLCollectionOf<Element>'.
/* for (let i = 0; i < arrRockets.length; i++) {
    const btnSpeedUp: any = document.getElementsByClassName('speed-up') as HTMLCollectionOf<HTMLButtonElement>;
    const btnSlowDown: any = document.getElementsByClassName('slow-down') as HTMLCollectionOf<HTMLButtonElement>;

    const rocketCurrentSpeed = document.getElementById(`currentSpeed${i + 1}`) as HTMLElement;
    const rocketCurrentPower = document.getElementById(`currentPower${i + 1}`) as HTMLElement;

    btnSpeedUp[i].onclick = function () {
        rocketCurrentSpeed.innerText = `${arrRockets[i].speedUp()}`;
        rocketCurrentPower.innerText = `${arrRockets[i].currentPower()}`;
    }

    btnSlowDown[i].onclick = function () {
        rocketCurrentSpeed.innerText = `${arrRockets[i].slowDown()}`;
        rocketCurrentPower.innerText = `${arrRockets[i].currentPower()}`;
    }
} */