document.querySelector("#b-1").onclick = () => {
    document.querySelector("#o-1").innerHTML = 1;
}

document.querySelector("#i-2").onclick = () => {
    document.querySelector("#o-2").innerHTML = 2;
}

document.querySelector("#p-3").onclick = () => {
    document.querySelector("#o-3").innerHTML = 3;
}

document.querySelector("#b-4").onclick = () => {
    document.querySelector("#o-4").innerHTML = document.querySelector("#i-4").checked;
}

document.querySelector("#b-5").onclick = () => {
    if (document.querySelector("#i-5").checked) {
        document.querySelector("#o-5").innerHTML = document.querySelector("#i-5").value;
    }
    else {
        document.querySelector("#o-5").innerHTML = document.querySelector("#i-5").checked;
    }
}

document.querySelector("#b-6").onclick = () => {
    document.querySelector("#o-6").innerHTML = document.querySelector("#i-6").value;
}

document.querySelector("#b-7").onclick = () => {
    document.querySelector("#o-7-0").innerHTML = document.querySelector("#i-7").value;
    if (document.querySelector("#i-7").value.length >= 6) {
        document.querySelector("#o-7-1").innerHTML = 1;
    }
    else {
        document.querySelector("#o-7-1").innerHTML = 0;
    }
}

document.querySelector("#b-8").onclick = () => {
    document.querySelector("#o-8").innerHTML = "<div class=\"js2\">new div</div>";
}

document.querySelector("#b-9").onclick = () => {
    if (document.querySelector("#i-9").checked) {
        document.querySelector("#o-9").innerHTML = document.querySelector("#i-9").value;
        document.querySelector("#i-9").checked = false;
    }
    else {
        document.querySelector("#o-9").innerHTML = document.querySelector("#i-9").checked;
    }
}

document.querySelector("#b-10").onclick = () => {
    document.querySelector("#o-10").style.backgroundColor = document.querySelector("#i-10").value;
}