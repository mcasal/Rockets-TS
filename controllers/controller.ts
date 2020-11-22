// es declara una variable de tipo class creada a rocket.js
let rocket: Rocket;
const arrRockets = [];
const rocket1 = new Rocket('32WESSDS', 3, [10, 30, 80]);
const rocket2 = new Rocket('LDSFJA32', 6, [30, 40, 50, 50, 30, 10]);

arrRockets.push(rocket1);
arrRockets.push(rocket2);

const infoRockets = document.getElementById('infoRockets') as HTMLElement; // div on fa print de tota la info de cada rocket
const counting = document.querySelector('#counting') as HTMLSpanElement; // span on fa print de la array que suma o resta potència
const currentPower = document.getElementById('currentPower') as HTMLSpanElement; // span on suma la potència total dels propulsors

for (let i = 0; i < arrRockets.length; i++) {
    infoRockets.classList.remove("d-none");

    infoRockets.innerHTML += `<div id="rocket${i + 1}" class="col-6 container mt-5"><p class="text-center pt-4 font-weight-bold text-lg">Rocket ${i + 1}</p><p class="text-center text-sm">Code: ${arrRockets[i].code}</p><p class="text-center text-sm">Total thrusters: ${arrRockets[i].totalThruster}</p><p class="text-center text-sm">Max power: ${arrRockets[i].thrusters}</p><p class="text-center text-sm">Current Speed: <span id="counting">${arrRockets[i].startCounting()}</span></p><p class="text-center text-sm">Current Power: <span id="currentPower">${arrRockets[i].currentPower()}</span></p><div class="text-center"><button type="button" class="btn btn-outline-light btn-sm mx-2" onclick="${arrRockets[i].speedUp()}">Speed Up</button><button type="button" class="btn btn-outline-light btn-sm mx-2" onclick="${arrRockets[i].slowDown()}">Slow Down</button></div></div>`;
}