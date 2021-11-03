document.querySelector("#b-0").onclick = () => {
    document.querySelector("#o-0").innerHTML = "";
    for (let i = 1; i <= 50; i++) {
        document.querySelector("#o-0").innerHTML += i + "_";
    }
}

document.querySelector("#b-1").onclick = () => {
    document.querySelector("#o-1").innerHTML = "";
    for (let i = 2; i <= 46; (i += 2)) {
        document.querySelector("#o-1").innerHTML += i + "_";
    }
}

document.querySelector("#b-2").onclick = () => {
    let i = 25
    document.querySelector("#o-2").innerHTML = "";
    while (i >= 7) {
        document.querySelector("#o-2").innerHTML += i + "_";
        i--;
    }
}

document.querySelector("#b-3").onclick = () => {
    let i = 77
    document.querySelector("#o-3").innerHTML = "";
    while (i >= 35) {
        document.querySelector("#o-3").innerHTML += i + "_";
        i -= 3;
    }
}

document.querySelector("#b-4").onclick = () => {
    let i = 1
    document.querySelector("#o-4").innerHTML = "";
    while (i <= 17) {
        document.querySelector("#o-4").innerHTML += i + "_";
        if (i % 2) {
            document.querySelector("#o-4").innerHTML += "*";
        } else {
            document.querySelector("#o-4").innerHTML += "**";
        }
        i++;
    }
}

document.querySelector("#b-5").onclick = () => {
    let i = 0
    document.querySelector("#o-5").innerHTML = "";
    while (i < 3) {
        document.querySelector("#o-5").innerHTML += "******" + "<br />";
        i++;
    }
}

document.querySelector("#i-6").onchange = () => {
    let i = +document.querySelector("#i-6").value;
    document.querySelector("#o-6").innerHTML = "";
    while (i >= 0) {
        document.querySelector("#o-6").innerHTML += i + "_";
        i--;
    }
}

document.querySelector("#b-7").onclick = () => {
    let i, j;
    if ((+document.querySelector("#i-7-0").value) < (+document.querySelector("#i-7-1").value)) {
        i = +document.querySelector("#i-7-0").value;
        j = +document.querySelector("#i-7-1").value;
    } else {
        j = +document.querySelector("#i-7-0").value;
        i = +document.querySelector("#i-7-1").value;
    }
    document.querySelector("#o-7").innerHTML = "";
    while (i <= j) {
        document.querySelector("#o-7").innerHTML += i + "_";
        i++;
    }
}

document.querySelector("#b-8").onclick = () => {
    let i = 1950;
    document.querySelector("#o-8").innerHTML = "";
    while (i <= 1966) {
        document.querySelector("#o-8").innerHTML += i + "_";
        i += 2;
    }
}

document.querySelector("#b-9").onclick = () => {
    document.querySelector("#o-9").innerHTML = "";
    let arr = document.querySelectorAll(".i-9");
    for (let i = 0; i < arr.length; i++) {
        document.querySelector("#o-9").innerHTML += arr[i].innerHTML + "_";
        arr[i].style.backgroundColor = "darkred";
        arr[i].value = (i + 1);
        console.log(arr[i].checked);
    }
}

document.querySelector("#b-9").onclick = () => {
    document.querySelector("#o-9").innerHTML = "";
    let arr = document.querySelectorAll(".i-9");
    for (let i = 0; i < arr.length; i++) {
        document.querySelector("#o-9").innerHTML += arr[i].innerHTML + "_";
        arr[i].style.backgroundColor = "darkred";
        arr[i].value = (i + 1);
        console.log(arr[i].checked);
    }
}

document.querySelector("#b-10").onclick = () => {
    document.querySelector("#o-10").innerHTML = "";
    let number = 77;
    for (let i = 0; i < 9; i++) {
        document.querySelector("#o-10").innerHTML += number + "_";
        if (number >= 99) {
            number = 77;
        } else {
            number += 11;
        }
    }
}