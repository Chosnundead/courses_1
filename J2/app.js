let a, b, c, d, e, f, e1, f1, e2, f2, e3, f3, e4, f4;
a = 7;
b = 9;
console.log(a * b);
c = 7;
d = 9;
document.querySelector("#one").innerHTML = c * d;
e = 3;
f = 5;
document.querySelector("#two").innerHTML = e + f;
e1 = '3';
f1 = 5;
document.querySelector("#three").innerHTML = e1 + f1;
e2 = 3;
f2 = 0;
document.querySelector("#four").innerHTML = e2 / f2;
e3 = 3;
f3 = "Hello";
document.querySelector("#five").innerHTML = e3 + f3;
e4 = 3;
f4 = "Hello";
document.querySelector("#six").innerHTML = e4 * f4;

let fu1 = document.querySelector("#bu1");
fu1.onclick = function () {
    document.querySelector("#an1").innerHTML = document.querySelector("#in1").value;
    console.log(document.querySelector("#in1").value);
    document.querySelector("#in1").value = '';
}

let fu2 = document.querySelector("#bu2");
fu2.onclick = function () {
    document.querySelector("#an2").innerHTML = +document.querySelector("#in2").value * 20;
    document.querySelector("#in2").value = '';
}

let fu3 = document.querySelector("#bu3");
fu3.onclick = function () {
    document.querySelector("#an3").innerHTML = document.querySelector("#in3").value + 55;
    document.querySelector("#in3").value = '';
}

let fu4 = document.querySelector("#bu4");
fu4.onclick = function () {
    document.querySelector("#an4").innerHTML += "Hello ";
    document.querySelector("#an4").innerHTML += document.querySelector("#in40").value;
    document.querySelector("#an4").innerHTML += ' ' + document.querySelector("#in41").value;
    document.querySelector("#in40").value = '';
    document.querySelector("#in41").value = '';
}

let fu5 = document.querySelector("#bu5");
fu5.onclick = function () {
    let number1 = +document.querySelector("#in50").value;
    let number2 = +document.querySelector("#in51").value;
    document.querySelector("#in50").value = '';
    document.querySelector("#in51").value = '';
    document.querySelector("#an5").innerHTML = number1 + number2;
}

let fu6 = document.querySelector("#bu6");
fu6.onclick = function () {
    document.querySelector("#in6").value = "Go";
}

let fu7 = document.querySelector("#bu7");
fu7.onclick = function () {
    document.querySelector("#in7").style = "border: 4px solid red;";
}

let fu8 = document.querySelector("#bu8");
fu8.onclick = function () {
    document.querySelector("#an8").innerHTML = document.querySelector("#in80").value + document.querySelector("#in81").value;
}

let fu9 = document.querySelector("#bu9");
fu9.onclick = function () {
    document.querySelector("#an9").innerHTML = parseFloat(document.querySelector("#in9").value);
    console.log(parseFloat(document.querySelector("#in9").value));
}

let temp1 = 0;
let fu10 = document.querySelector("#bu10");
fu10.onclick = function () {
    temp1++;
    document.querySelector("#an10").innerHTML = temp1;
}