document.querySelector("#b-1").onclick = () => {
    for (let i = 1; i < 17; i++) {
        document.querySelector("#o-1").innerHTML += i + "_";
    }
}

document.querySelector("#b-2").onclick = () => {
    for (let i = 12; i <= 38; i += 2) {
        document.querySelector("#o-2").innerHTML += i + "_";
    }
}

document.querySelector("#b-3").onclick = () => {
    for (let i = 25; i >= 7; i--) {
        document.querySelector("#o-3").innerHTML += i + "_";
    }
}

document.querySelector("#b-4").onclick = () => {
    for (let i = 77; i >= 35; i -= 3) {
        document.querySelector("#o-4").innerHTML += i + "_";
    }
}

document.querySelector("#b-5").onclick = () => {
    for (let i = 1; i <= 17; i++) {
        document.querySelector("#o-5").innerHTML += i + "_";
        if (i % 2) {
            document.querySelector("#o-5").innerHTML += "*";
        }
        else {
            document.querySelector("#o-5").innerHTML += "**";
        }
    }
}

document.querySelector("#b-6").onclick = () => {
    for (let i = 0; i < 3; i++) {
        document.querySelector("#o-6").innerHTML += "******</br>";
    }
}

document.querySelector("#b-7").onclick = () => {
    document.querySelector("#o-7").innerHTML = "";
    for (let i = +document.querySelector("#i-7").value; i >= 0; i--) {
        document.querySelector("#o-7").innerHTML += i + "_";
    }
}

document.querySelector("#b-8").onclick = () => {
    document.querySelector("#o-8").innerHTML = "";
    for (let i = +document.querySelector("#i-8-0").value; i <= +document.querySelector("#i-8-1").value; i++) {
        document.querySelector("#o-8").innerHTML += i + "_";
    }
}

document.querySelector("#b-9").onclick = () => {
    let lower, higher;
    document.querySelector("#o-9").innerHTML = "";
    if (+document.querySelector("#i-9-0").value > +document.querySelector("#i-9-1").value) {
        lower = +document.querySelector("#i-9-1").value;
        higher = +document.querySelector("#i-9-0").value;
    }
    if (+document.querySelector("#i-9-0").value < +document.querySelector("#i-9-1").value) {
        lower = +document.querySelector("#i-9-0").value;
        higher = +document.querySelector("#i-9-1").value;
    }
    if (+document.querySelector("#i-9-0").value == +document.querySelector("#i-9-1").value) {
        console.log("Числа равны!");
        lower = 0;
        higher = 0;
    }
    for (let i = lower; i <= higher; i++) {
        document.querySelector("#o-9").innerHTML += i + "_";
    }
}

document.querySelector("#b-10").onclick = () => {
    document.querySelector("#o-10").innerHTML = "";
    for (let i = 1950; i <= 1970; i += 2) {
        document.querySelector("#o-10").innerHTML += i + "_";
    }
}

document.querySelector("#b-11").onclick = () => {
    document.querySelector("#o-11").innerHTML = "";
    for (let i = 0; i < document.querySelectorAll("#i-11").length; i++) {
        document.querySelector("#o-11").innerHTML += document.querySelectorAll("#i-11")[i].textContent + "_";
    }
}

document.querySelector("#b-12").onclick = () => {
    for (let i = 0; i < document.querySelectorAll("#i-12").length; i++) {
        document.querySelectorAll("#i-12")[i].style.backgroundColor = "orange";
    }
}

document.querySelector("#b-13").onclick = () => {
    for (let i = 0; i < document.querySelectorAll("#i-13").length; i++) {
        document.querySelectorAll("#i-13")[i].value = i + 1;
    }
}

document.querySelector("#b-14").onclick = () => {
    document.querySelector("#o-14").innerHTML = "";
    for (let i = 0; i < document.querySelectorAll("#i-14").length; i++) {
        if (document.querySelectorAll("#i-14")[i].checked) {
            document.querySelector("#o-14").innerHTML += document.querySelectorAll("#i-14")[i].value;
        }
    }
}

document.querySelector("#b-15").onclick = () => {
    document.querySelector("#o-15").innerHTML = "";
    for (let i = 10, j = 0; i >= 0; i--) {
        document.querySelector("#o-15").innerHTML += i + "_" + j + "_";
        j++;
    }
}