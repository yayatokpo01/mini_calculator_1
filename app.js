

let my_buttons = document.querySelector(".my_buttons");
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let Add = document.querySelector(".Btn1");
let Minus = document.querySelector(".Btn2");
let Multiply = document.querySelector(".Btn3");
let Divide = document.querySelector(".Btn4");
let display_result = document.querySelector("#display_result");

Add.addEventListener("click", function(){
   let num_1 = parseInt(num1.value);
   let num_2 = parseInt(num2.value);
   display_result.innerHTML = AddTwoNumbers (num_1, num_2);
});

Minus.addEventListener("click", function(){
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);
    display_result.innerHTML = SubtractTwoNumbers (num_1, num_2);
 });

 Multiply.addEventListener("click", function(){
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);
    display_result.innerHTML = MultiplyTwoNumbers (num_1, num_2);
 });

 Divide.addEventListener("click", function(){
    let num_1 = parseInt(num1.value);
    let num_2 = parseInt(num2.value);
    display_result.innerHTML = DivideTwoNumbers (num_1, num_2);
 });

function AddTwoNumbers (a, b){
    let sum = a + b;
    return sum;
}
function SubtractTwoNumbers (a, b){
    let diff = a - b;
    return diff;
}
function MultiplyTwoNumbers (a, b){
    let product = a * b;
    return product;
}
function DivideTwoNumbers (a, b){
    let quotient = a / b;
    return quotient;
}
