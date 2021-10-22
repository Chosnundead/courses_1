let b1 = document.querySelector("#b-1");
b1.onclick = () => {
    if ((+(document.querySelector("#i-1").value)) == 4) {
        document.querySelector("#o-1").innerHTML = "true";
    } else {
        document.querySelector("#o-1").innerHTML = "false";
    }
}

let b2 = document.querySelector("#b-2");
b2.onclick = () => {
    if ((+(document.querySelector("#i-20").value)) > (+(document.querySelector("#i-21").value))) {
        document.querySelector("#o-2").innerHTML = document.querySelector("#i-20").value;
    } else {
        if ((+(document.querySelector("#i-20").value)) < (+(document.querySelector("#i-21").value))) {
            document.querySelector("#o-2").innerHTML = document.querySelector("#i-21").value;
        } else {
            document.querySelector("#o-2").innerHTML = "Числа равны!";
        }
    }
}

let b3 = document.querySelector("#b-3");
b3.onclick = () => {
    if ((2021 - (+(document.querySelector("#i-3").value))) >= 18) {
        document.querySelector("#o-3").innerHTML = true;
    } else {
        document.querySelector("#o-3").innerHTML = false;
    }
}

let b4 = document.querySelector("#b-4");
b4.onclick = () => {
    if ((+(document.querySelector("#i-4").value)) < 0) {
        document.querySelector("#o-4").innerHTML = 'm';
    } else {
        if ((+(document.querySelector("#i-4").value)) > 0) {
            document.querySelector("#o-4").innerHTML = 1;
        } else {
            document.querySelector("#o-4").innerHTML = 0;
        }
    }
}

let b5 = document.querySelector("#b-5");
b5.onclick = () => {
    if ((+(document.querySelector("#i-5").value)) % 2) {
        document.querySelector("#o-5").innerHTML = "odd";
    } else {
        document.querySelector("#o-5").innerHTML = "even";
    }
}

let b6 = document.querySelector("#b-6");
b6.onclick = () => {
    document.querySelector("#o-6").innerHTML = Math.pow((+(document.querySelector("#i-60").value)), (+(document.querySelector("#i-61").value)));
}

let b7 = document.querySelector("#b-7");
b7.onclick = () => {
    switch (+(document.querySelector("#s-7").value)) {
        case 1:
            document.querySelector("#o-7").innerHTML = "one";
            break;
        case 2:
            document.querySelector("#o-7").innerHTML = "two";
            break;
        case 3:
            document.querySelector("#o-7").innerHTML = "three";
            break;
    }
}

let b8 = document.querySelector("#b-8");
b8.onclick = () => {
    if (((+(document.querySelector("#i-8").value)) >= 1) && ((+(document.querySelector("#i-8").value)) <= 32)) {
        document.querySelector("#o-8").innerHTML = 1;
    } else {
        if (((+(document.querySelector("#i-8").value)) >= 33) && ((+(document.querySelector("#i-8").value)) <= 43)) {
            document.querySelector("#o-8").innerHTML = 2;
        } else {
            if (((+(document.querySelector("#i-8").value)) >= 44) && ((+(document.querySelector("#i-8").value)) <= 64)) {
                document.querySelector("#o-8").innerHTML = 3;
            } else {
                document.querySelector("#o-8").innerHTML = 0;
            }
        }
    }
}

let b9 = document.querySelector("#b-9");
b9.onclick = () => {
    switch (+(document.querySelector("#s-9").value)) {
        case 1:
            document.querySelector("#o-9").innerHTML = document.querySelector("#s-9").value;
            break;
        case 2:
            document.querySelector("#o-9").innerHTML = document.querySelector("#s-9").value;
            break;
        case 3:
            document.querySelector("#o-9").innerHTML = document.querySelector("#s-9").value;
            break;
    }
}

let b10 = document.querySelector("#s-10");
b10.onchange = () => {
    document.querySelector("#o-10").innerHTML = document.querySelector("#s-10").value;
}

let b11 = document.querySelector("#b-11");
b11.onclick = () => {
    document.querySelector("#o-11").innerHTML = typeof ((+(document.querySelector("#s-10").value)));
}

let b12 = document.querySelector("#b-12");
b12.onclick = () => {
    switch (document.querySelector("#s-12").value) {
        case '+':
            document.querySelector("#o-12").innerHTML = (+document.querySelector("#i-121").value) + (+document.querySelector("#i-122").value);
            break;
        case '-':
            document.querySelector("#o-12").innerHTML = (+document.querySelector("#i-121").value) - (+document.querySelector("#i-122").value);
            break;
        case '*':
            document.querySelector("#o-12").innerHTML = (+document.querySelector("#i-121").value) * (+document.querySelector("#i-122").value);
            break;
        case '/':
            document.querySelector("#o-12").innerHTML = (+document.querySelector("#i-121").value) / (+document.querySelector("#i-122").value);
            break;
    }
}

let b13 = document.querySelector("#b-13");
b13.onclick = () => {
    switch (document.querySelector("#s-131").value) {
        case "||":
            if ((+document.querySelector("#s-130").value) || (+document.querySelector("#s-132").value)) {
                document.querySelector("#o-13").innerHTML = 1;
            } else {
                document.querySelector("#o-13").innerHTML = 0;
            }
            break;
        case "&&":
            if ((+document.querySelector("#s-130").value) && (+document.querySelector("#s-132").value)) {
                document.querySelector("#o-13").innerHTML = 1;
            } else {
                document.querySelector("#o-13").innerHTML = 0;
            }
            break;
    }
}