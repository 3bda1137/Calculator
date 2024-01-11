var expration =document.getElementsByClassName("expration")[0];
var output = document.getElementById("input");

function enterdZero() {
    //output.innerHTML = 0;
    expration.innerHTML+="0";
    var result=eval(expration.innerHTML).toFixed(2);
    console.log(result);
    output.innerHTML = result;
}
function enterdOne() { 
    //output.innerHTML = 1;
    expration.innerHTML+="1";
    var result=eval(expration.innerHTML).toFixed(2);
    console.log(result);
    output.innerHTML = result;
}
function enterdTwo() {
    //output.innerHTML = 2;
    expration.innerHTML+="2";
    var result=eval(expration.innerHTML).toFixed(2);
    console.log(result);
    output.innerHTML = result;
 }
function enterdThree() {
   // output.innerHTML = 3;
    expration.innerHTML+="3";
    var result=eval(expration.innerHTML).toFixed(2);
    console.log(result);
    output.innerHTML = result;
 }
function enterdFour() { 
    //output.innerHTML = 4;
    expration.innerHTML+="4";
    var result=eval(expration.innerHTML).toFixed(2);
    console.log(result);
    output.innerHTML = result;
}
function enterdFive() { 
    //output.innerHTML = 5;
    expration.innerHTML+="5";
    var result=eval(expration.innerHTML).toFixed(2);
    console.log(result);
    output.innerHTML = result;
}
function enterdSix() { 
    //output.innerHTML = 6;
    expration.innerHTML+="6";
    var result=eval(expration.innerHTML).toFixed(2);
    console.log(result);
    output.innerHTML = result;
}
function enterdSeven() {
    //output.innerHTML = 7;
    expration.innerHTML+="7";
    var result=eval(expration.innerHTML).toFixed(2);
    console.log(result);
    output.innerHTML = result;
 }
function enterdEight() {
    //output.innerHTML = 8;
    expration.innerHTML+="8";
    var result=eval(expration.innerHTML).toFixed(2);
    console.log(result);
    output.innerHTML = result;
 }
function enterdNine() { 
    //output.innerHTML = 9;
    expration.innerHTML+="9";
    var result=eval(expration.innerHTML).toFixed(2);
    console.log(result);
    output.innerHTML = result;
}
function enterdDivide() {
    //output.innerHTML = "/";
    expration.innerHTML+="/";
 }
function enterdMultiply() {
    //output.innerHTML = "*";
    expration.innerHTML+="*";
 }
function enterdSum() {
    //output.innerHTML = "+";
    expration.innerHTML+="+";
 }
function enterdSub() {
    //output.innerHTML = "-";
    expration.innerHTML+="-";
 }
function enterdEqual() { 
    var result=eval(expration.innerHTML).toFixed(2);
    console.log(result);
    output.innerHTML = result;
    expration.innerHTML="";
}
function enterdAC() { 
    output.innerHTML = "0";
    expration.innerHTML="";
}