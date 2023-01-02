// let n1 = document.getElementById("nam1").value;
// let n2 = document.getElementById("nam2").value;



// function add (num1, num2){
//     console.log(num1 + num2);
// }

// add(n1, n2);




function squareRoot() {
    const answerField = document.getElementById("answer");
    let result = Math.sqrt(answerField.value);
    answerField.value = result;
}

function del() {
    const answerField = document.getElementById("answer");
    let newValue = answerField.value.slice(0, answerField.value.length - 1);
    answerField.value = newValue;
}

function power() {
    const answerField = document.getElementById("answer");
    let newValue = Math.pow(answerField.value, 2);
    answerField.value = newValue;
}

function fraction() {
    const answerField = document.getElementById("answer");
    let newValue = 1 / answerField.value;
    answerField.value = newValue;
}

function signToggle() {
    const answerField = document.getElementById("answer");
    if(answerField.value > 0) {
        answerField.value = (-answerField.value);
    } else if(answerField.value < 0) {
        answerField.value = answerField.value.slice(1);
    } else {
        answerField.value = answerField.value;
    }
}

let count = 0;

function parentheses() {
    const answerField = document.getElementById("answer");
    count++;
    if(count == 1) {
        answerField.value = "(" + answerField.value;
    }
    console.log(count);
}