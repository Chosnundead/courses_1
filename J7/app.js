function task1(i, j) {
    return (i * j);
}

document.querySelector("#b-1").onclick = () => {
    let number1 = document.querySelector("#i-1-0").value;
    let number2 = document.querySelector("#i-1-1").value;
    document.querySelector("#o-1").innerHTML = "";
    document.querySelector("#o-1").innerHTML += task1(number1, number2);
}

function task4(i) {
    return (2021 - i);
}

function task5(i) {
    return (i.length);
}

function task6(i, j) {
    let number;
    do {
        number = (Math.random() * j) - (Math.random() * i);
    } while ((number < i) || (number > j));
    return number;
}

function task7() {
    let rgb = "rgb(";
    for (let i = 0; i < 3; i++) {
        if (i == 2) {
            rgb += parseInt(task6(0, 255)) + ");";
        } else {
            rgb += parseInt(task6(0, 255)) + ", ";
        }
    }
    return rgb;
}

function task8(i) {
    return (i.trim());
}

function task9(i) {
    if (i % 2) {
        return false;
    } else {
        return true;
    }
}

function task10(i, j) {
    if (i >= j) {
        return i;
    } else {
        return j;
    }
}