const arrRockets: Rocket[] = [];
const form = document.getElementById('formRocket1') as HTMLFormElement;
let totalThruster: number = Number((document.getElementById('totalThrustersR1') as HTMLInputElement).value);
const inputsThrustersR1 = document.getElementById('inputsThrustersR1') as HTMLElement;
let errorCode: boolean;
let errorThrusters: boolean;

// function per a crear rockets
function crearRocket() {
    const code: string = (document.getElementById('rocketCode') as HTMLInputElement).value;
    const inputsThrusters = document.getElementById('inputsThrustersR1');
    const updateInputsValues = inputsThrusters?.querySelectorAll('.newValue');
    const thrusters: Array<number> = [];
    let rocketExists: boolean = false;

    validateCode(code);
    validateThrusters();

    for (let rocket of arrRockets) { //busca si el rocket existeix
        if (rocket.code == code) {
            rocketExists = true;
        }
    }

    if (!rocketExists && !errorCode && !errorThrusters) {
        let newRocket = new Rocket(code, totalThruster, thrusters);
        arrRockets.push(newRocket);
        addToList(newRocket);
        inputsThrustersR1.innerHTML = '';
        form.reset();
    } else {
        for (let rocket of arrRockets) {
            if (rocket.code == code) {
                alert("This rocket already exists!");
            }
        }
    }

    updateInputsValues?.forEach((inputs: any) => {
        let inputsValue = Number(inputs.value);
        thrusters.push(inputsValue)
    });

}

function validateCode(codeRocket: any) {
    const code: any = document.getElementById('rocketCode') as HTMLInputElement;

    errorCode = false;

    if (codeRocket == "" || !validateCodeRegEx(codeRocket)) {
        code.classList.add('is-invalid');
        errorCode = true;
    }

    return errorCode;
}

form.addEventListener('blur', (event: any) => {
    if (event.target.value != '') event.target.classList.remove('is-invalid');
}, true);

function validateCodeRegEx(code: any) {
    let codeRegEx: any = /^[0-9a-zA-Z]{8}$/;
    return codeRegEx.test(code) ? true : false;
}

function validateThrusters() {
    const thrusters: any = document.getElementById('totalThrustersR1') as HTMLInputElement;
    const inputsThrusters = document.getElementById('inputsThrustersR1') as HTMLInputElement;
    const inputsThrustersLength = inputsThrusters.children.length;
    const thrustersValue = Number(thrusters.value);
    totalThruster = thrustersValue;


    if (inputsThrustersLength === thrustersValue) {
        thrusters.classList.remove('is-invalid');
        errorThrusters = false;
    } else if (inputsThrustersLength < thrustersValue || inputsThrustersLength > thrustersValue) {
        thrusters.classList.add('is-invalid');
        errorThrusters = true;
    }

    return errorThrusters;
}

// printa els rockets com a llista
function addToList(rocket: any) {
    const rocketsList = document.getElementById('rocketsList') as HTMLElement;
    const index = arrRockets.indexOf(rocket);

    rocketsList.innerHTML += `
        <div class="alert alert-info mt-4 row">
            <div class="text-left col-6 pt-2 monospace">Rocket ${index + 1}: ${rocket.code}</div>
            <div class="text-right col-6">
                <button type="button" class="btn btn-outline-info mr-2 rounded" id="#editRocket${index + 1}" onclick="editRocket(arrRockets[${index}])"><i class="fas fa-edit mr-2"></i>Edit</button>
                <button type="button" class="btn btn-outline-info ml-2 rounded" onclick="showInfo(arrRockets[${index}])"><i class="far fa-eye mr-2"></i>Show</button>
            </div>
        </div>`
}

// crear inputs pels thrusters 
function inputThrusters() {
    const totalThrustersRocket = Number((document.getElementById('totalThrustersR1') as HTMLInputElement).value);
    inputsThrustersR1.innerHTML = '';
    const thrusters: any = document.getElementById('totalThrustersR1') as HTMLInputElement;
    thrusters.classList.remove('is-invalid');

    // edit rocket
    const editThrusters = document.getElementById('editThrusters') as HTMLElement;

    if (editThrusters) {
        const updateTotalThrusters = Number((document.getElementById('updateTotalThrusters') as HTMLInputElement).value);
        const inputsThrusters = document.getElementById('inputsThrusters') as HTMLElement;
        inputsThrusters.innerHTML = '';
        for (let i = 0; i < updateTotalThrusters; i++) {
            inputsThrusters.innerHTML += `
                <div class="form-row">
                    <label class="col-form-label">Thunder power: </label>
                    <input type="number" min="10" step="10" class="form-control newValue" value="10">
                </div>`;
        };
    } else {
        for (let i = 0; i < totalThrustersRocket; i++) {
            inputsThrustersR1.innerHTML += `
                <div class="form-row">
                    <label class="col-form-label">Thunder power: </label>
                    <input type="number" min="10" step="10" class="form-control newValue" value="10">
                </div>`;
        };
    }

}

// mostrar informació del rocket i botons d'accelerar i frenar
function showInfo(rocket: any) {
    const index = arrRockets.indexOf(rocket);
    const printRocket = document.getElementById('printRocket') as HTMLElement;

    printRocket.innerHTML = `
        <div class="card text-center w-50 mx-auto mt-3">
            <div class="card-body bg-light monospace">
                <p class="text-center mt-3 mb-4 font-weight-bold text-lg">Rocket ${index + 1}</p>
            <p class="text-center text-sm">Code: ${rocket.code}</p>
            <p class="text-center text-sm">Total thrusters: ${rocket.totalThruster}</p>
            <p class="text-center text-sm">Max power: ${rocket.thrusters}</p>
            <p class="text-center text-sm">Current Speed: <span id="currentSpeed${index + 1}">${rocket.startCounting()}</span></p>
            <p class="text-center text-sm">Current Power: <span id="currentPower${index + 1}">${rocket.currentPower()}</span></p>
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
        rocketCurrentSpeed.innerText = `${rocket.speedUp()}`;
        rocketCurrentPower.innerText = `${rocket.currentPower()}`;
    }

    btnSlowDown.onclick = function () {
        rocketCurrentSpeed.innerText = `${rocket.slowDown()}`;
        rocketCurrentPower.innerText = `${rocket.currentPower()}`;
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

function editRocket(rocket: any) {
    const index = arrRockets.indexOf(rocket);
    const printRocket = document.getElementById('printRocket') as HTMLElement;
    printRocket.innerHTML = '';

    printRocket.innerHTML = `
    <div class="card w-50 mx-auto mt-3">
    <div class="card-body">
    <form id="formEditRocket">
        <div class="form-group">
            <label class="col-form-label">Code: </label>
            <input type="text" class="form-control" value=${rocket.code} disabled>
        </div>
        <div class="form-row">
            <div class="form-group col-8">
                <label class="col-form-label">Total thrusters: </label>
                <input type="number" 
                        id="updateTotalThrusters" 
                        class="form-control" 
                        min="1"
                        value=${rocket.totalThruster}>
            </div>
            <div class="form-inline align-items-end mb-3 col-4">
                <button type="button" 
                        id="editThrusters"
                        class="ml-3 btn btn-outline-info" onclick="inputThrusters()">Add thrusters
                </button>
            </div>
        </div>
        <div id="inputsThrusters">
        
        </div>
        </form>
        </div>
        
        <div class="card-footer">
        <button type="button" class="btn btn-outline-success float-right" onclick="updateRocket(arrRockets[${index}])">Update rocket</button>
    </div>
    </div>
    `
}

function updateRocket(rocket: any) {
    const updateTotalThrusters = (document.getElementById('updateTotalThrusters') as HTMLInputElement).value;
    const updateThrusters = document.getElementById('inputsThrusters') as HTMLElement;
    const updateInputsValues = updateThrusters.querySelectorAll('.newValue');
    const newThrusters: Array<number> = [];
    let boolean: boolean = true;
    console.log(updateThrusters);

    if (updateTotalThrusters == "") {
        alert('The rocket must have at least one thruster!')
    } else if (updateTotalThrusters != rocket.totalThruster) { //
        rocket.setTotalThrusters = updateTotalThrusters;
        updateInputsValues.forEach((inputs: any) => {
            newThrusters.push(inputs.value)
        });
        rocket.setCountingPower = newThrusters.length;
        rocket.setThrusters = newThrusters;
        alert('The rocket has been successfully updated!')
    } else {
        let powerThrusters = confirm("Do you want only to change the power?");
        if (powerThrusters) {
            updateInputsValues.forEach((inputs: any) => {
                newThrusters.push(inputs.value)
            });
            rocket.setCountingPower = newThrusters.length;
            rocket.setThrusters = newThrusters;
            alert('The rocket has been successfully updated!')
        } else {
            alert('The rocket remains the same.')
        }
    }
}