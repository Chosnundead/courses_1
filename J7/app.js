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