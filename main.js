let number1 = Math.floor(Math.random()*100 +1);
let number2 = Math.floor(Math.random()*100 +1);

document.getElementById("add1").value = number1;
document.getElementById("add2").value = number2;

let total = number1 + number2;

let buttons = document.getElementById("btn");

buttons.addEventListener("click", testesResultes);

function testesResultes(){

    let answereses = document.getElementById("answers").value;

    if(answereses == total){
        window.alert("Your answer is correct");
    }else{
        window.alert(`Your answer is incorrect so the correct answer is ${total}`);
    }

    document.getElementById("answers").value = "";

    let number1 = Math.floor(Math.random()*100 +1);
    let number2 = Math.floor(Math.random()*100 +1);

    document.getElementById("add1").value = number1;
    document.getElementById("add2").value = number2;

    total = number1 + number2;

}