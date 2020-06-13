let rangeMoney = document.getElementById('mRange');
let rangeYears = document.getElementById('yRange');

let outputMoney = document.getElementById('mValue');
let outputYears = document.getElementById('yValue');
let outputText = document.getElementById('textValue');

rangeMoney.onchange = calculate;
rangeYears.onchange = calculate;
rangeYears.onmousemove = years;

outputYears.innerHTML = rangeYears.value;
rangeYears.oninput = function () {
    let a = this.value;
    outputYears.innerHTML = a ;
}
outputMoney.innerHTML = rangeMoney.value;
rangeMoney.oninput = function () {
    outputMoney.innerHTML = this.value;
}


function years() {
    if (outputYears.innerHTML === 1) {
        return outputText.innerHTML = ' год';
    } else if (outputYears.innerHTML > 1 && outputYears.innerHTML <= 4) {
        return outputText.innerHTML = ' года';
    } else if (outputYears.innerHTML > 4 || outputYears.innerHTML === 0 ) {
        return outputText.innerHTML = ' лет';
    }
}

function calculate() {
    let sum = Math.ceil((rangeYears.value * (+rangeMoney.value * 0.1) + +rangeMoney.value) / (rangeYears.value * 12));
    let x = document.getElementById('resultValue');
    x.innerHTML = sum.toLocaleString('ru') + " ₽";
}

calculate();


rangeMoney.addEventListener('mousemove', function () {
    let x = rangeMoney.value;
    rangeMoney.style.background = 'linear-gradient(90deg, #b49263 ' + (x * 100 / 20000000) + '%, #d4d4d4 ' + (x * 100 / 20000000) + '%)';
})


rangeYears.addEventListener('mousemove', function () {
    let z = rangeYears.value;
    rangeYears.style.background = 'linear-gradient(90deg, #b49263 ' + ((z / 5 * 100)-40) + '%, #d4d4d4 ' + ((z / 5 * 100)-40) + '%)';
})

