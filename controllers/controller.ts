const arrRockets: Rocket[] = [];
const rocket1 = new Rocket('32WESSDS', 3, [10, 30, 80]);
const rocket2 = new Rocket('LDSFJA32', 6, [30, 40, 50, 50, 30, 10]);

// function per a crear rockets
function crearRocket() {
    const createRocket1 = document.getElementById('createRocket1') as HTMLElement;
    const createRocket2 = document.getElementById('createRocket2') as HTMLElement;
    const addRocket1 = document.getElementById('addRocket1') as HTMLElement;
    const addRocket2 = document.getElementById('addRocket2') as HTMLElement;

    if ((<HTMLElement>event?.target).id == createRocket1.id) {
        arrRockets.push(rocket1);
        createRocket1.setAttribute('disabled', '')
        addRocket1.removeAttribute('disabled');
    } else if ((<HTMLElement>event?.target).id == createRocket2.id) {
        if (arrRockets.length == 0) {
            alert('Create Rocket 1 first!');
        } else {
            arrRockets.push(rocket2);
            createRocket2.setAttribute('disabled', '')
            addRocket2.removeAttribute('disabled');
        }
    }
}

// botons que afegeixen els rockets a la llista
const btnAddrockets = document.querySelectorAll('.addRocket');
btnAddrockets.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if ((<HTMLElement>e.target).id === 'addRocket1') { //e.target.id dóna problemes amb typescript
            addToList(rocket1);
        } else {
            addToList(rocket2);
        };
        btn.setAttribute("data-dismiss", "modal"); // tanca el modal després del click
    });
});

// printa els rockets com a llista
function addToList(rocket: any) {
    const rocketsList = document.getElementById('rocketsList') as HTMLElement;
    const index = arrRockets.indexOf(rocket);

    rocketsList.innerHTML = `
        <div class="alert alert-info mt-4 row">
            <div class="text-left col-6 pt-2 monospace">Rocket ${index + 1}: ${rocket.code}</div>
            <div class="text-right col-6">
                <button type="button" class="btn btn-outline-info mr-2 rounded" data-toggle="modal" data-target="#editRocket${index + 1}"><i class="fas fa-edit mr-2"></i>Edit</button>
                <button type="button" class="btn btn-outline-info ml-2 rounded" onclick="showInfo(${index})"><i class="far fa-eye mr-2"></i>Show</button>
            </div>
        </div>`
}

// botons per editar els coets
const btnUpdateRockets = document.querySelectorAll('.updateRocket');
btnUpdateRockets.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if ((<HTMLElement>e.target).id === 'btnUpdateR1') {
            updateRocket(rocket1);
        } else {
            updateRocket(rocket2);
        };
        btn.setAttribute("data-dismiss", "modal"); // tanca el modal després del click
    });
});

// actualitzar el coet
function updateRocket(rocket: any) {
    const index = arrRockets.indexOf(rocket);
    const updateTotalThrusters = Number((document.getElementById(`totalThrustersR${index + 1}`) as HTMLInputElement).value);
    const updateThrusters = document.getElementById(`inputsThrustersR${index + 1}`) as HTMLElement; // div amb els inputs
    const updateInputsValues = updateThrusters.querySelectorAll('.newValue');
    const newThrusters: Array<number> = [];

    //setters del rocket
    rocket.setTotalThrusters = updateTotalThrusters;

    updateInputsValues.forEach((inputs) => {
        let inputsValue = Number(inputs.value);
        newThrusters.push(inputsValue)
    });

    rocket.setThrusters = newThrusters;
    console.log(rocket);
}

// crear inputs pels thrusters
function inputThrusters() {
    const totalThrustersRocket1 = Number((document.getElementById('totalThrustersR1') as HTMLInputElement).value);
    const totalThrustersRocket2 = Number((document.getElementById('totalThrustersR2') as HTMLInputElement).value);
    const inputsThrustersR1 = document.getElementById('inputsThrustersR1') as HTMLElement;
    const inputsThrustersR2 = document.getElementById('inputsThrustersR2') as HTMLElement;
    let totalThrusters;

    if ((<HTMLElement>event?.target).id === 'totalThrustersRocket1') {
        totalThrusters = totalThrustersRocket1;
        inputsThrustersR1.innerHTML = '';
        for (let i = 0; i < totalThrusters; i++) {
            inputsThrustersR1.innerHTML += `
            <div class="form-row">
                <label class="col-form-label">Thunder power: </label>
                <input type="number" min="10" step="10" class="form-control newValue" value="10">
            </div>`;
        }
    } else {
        totalThrusters = totalThrustersRocket2;
        inputsThrustersR2.innerHTML = '';
        for (let i = 0; i < totalThrusters; i++) {
            inputsThrustersR2.innerHTML += `
            <div class="form-row">
                <label class="col-form-label">Thunder power: </label>
                <input type="number" min="10" step="10" class="form-control newValue" value="10">
            </div>`;
        }
    };
}


// mostrar informació del rocket i botons d'accelerar i frenar
function showInfo(index: number) {
    const printRocket = document.getElementById('printRocket') as HTMLElement;

    printRocket.innerHTML = `
        <div class="card text-center w-50 mx-auto mt-3">
            <div class="card-body bg-light monospace">
                <p class="text-center mt-3 mb-4 font-weight-bold text-lg">Rocket ${index + 1}</p>
            <p class="text-center text-sm">Code: ${arrRockets[index].code}</p>
            <p class="text-center text-sm">Total thrusters: ${arrRockets[index].totalThruster}</p>
            <p class="text-center text-sm">Max power: ${arrRockets[index].thrusters}</p>
            <p class="text-center text-sm">Current Speed: <span id="currentSpeed${index + 1}">${arrRockets[index].startCounting()}</span></p>
            <p class="text-center text-sm">Current Power: <span id="currentPower${index + 1}">${arrRockets[index].currentPower()}</span></p>
            <div class="text-center mt-5 mb-2">
                <button type="button" id="speedUpRocket${index + 1}" class="btn btn-outline-dark mx-2 speed-up">Speed Up</button>
                <button type="button" id="slowDownRocket${index + 1}" class="btn btn-outline-dark mx-2 slow-down">Slow Down</button>
            </div>
            </div>
        </div>`

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
    const printRocket = document.getElementById('printRocket') as HTMLElement;
    printRocket.innerHTML = '';

    for (let i = 0; i < arrRockets.length; i++) {
        printRocket.innerHTML += `
        <div class="col-sm-6 mt-4">
            <div class="card bg-info">
                <div class="card-body monospace text-light text-center">
                    <h5 class="card-title font-weight-bold text-lg pt-3" id="rocketNum${i + 1}">Rocket ${i + 1}</h5>
                    <p class="text-sm" id="rocketCode${i + 1}">Code: ${arrRockets[i].code}</p>
                    <p class="text-sm" id="rocketThrusters${i + 1}">Total thrusters: ${arrRockets[i].totalThruster}</p>
                    <p class="text-sm" id="rocketPower${i + 1}">Max power: ${arrRockets[i].thrusters}</p>
                </div>
            </div>
        </div>`
    }
}