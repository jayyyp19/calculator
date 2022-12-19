var e;
var x;
var y;
function addition(){
    e = document.getElementById("input1").children;
    x = parseInt(e[0].value);
    y = parseInt(e[3].value);
    document.getElementById("output").innerHTML = "Addition of "+ x + " and " + y + " is "+(x+y);
}
function subtraction(){
    e = document.getElementById("input1").children;
    x = parseInt(e[0].value);
    y = parseInt(e[3].value);
    document.getElementById("output").innerHTML = "Subtraction of "+ x +" and " + y + " is "+(x-y);
}
function multiplication(){
    e = document.getElementById("input1").children;
    x = parseInt(e[0].value);
    y = parseInt(e[3].value);
    document.getElementById("output").innerHTML = "Multiplication of "+ x +" and " + y + " is "+(x*y);
}
function division(){
    e = document.getElementById("input1").children;
    x = parseInt(e[0].value);
    y = parseInt(e[3].value);
    document.getElementById("output").innerHTML = "Division of "+ x +" and " + y + " is "+(x/y);
}