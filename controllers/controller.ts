let rocket: Rocket;
const arrRockets: Rocket[] = [];
const rocket1 = new Rocket('32WESSDS', 3, [10, 30, 80]);
const rocket2 = new Rocket('LDSFJA32', 6, [30, 40, 50, 50, 30, 10]);

arrRockets.push(rocket1);
arrRockets.push(rocket2);

for (let i = 0; i < arrRockets.length; i++) {
    const infoRockets = document.getElementById('infoRockets') as HTMLElement;
    // es crea un div per a cada rocket
    infoRockets.classList.remove("d-none");
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
}

// addEventListeners no funcionen: Property 'addEventListener' does not exist on type 'HTMLCollectionOf<Element>'.
for (let i = 0; i < arrRockets.length; i++) {
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
}