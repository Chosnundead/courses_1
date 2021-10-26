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

document.querySelector("#b-11").onclick = () => {
    document.querySelector("#i-11-1").value = document.querySelector("#i-11-0").value;
}

document.querySelector("#b-12").onclick = () => {
    document.querySelector("#o-12").innerHTML = document.querySelector("#i-12").value;
}

document.querySelector("#i-13").oninput = () => {
    document.querySelector("#o-13").innerHTML = document.querySelector("#i-13").value;
}

document.querySelector("#b-14").onclick = () => {
    document.querySelector("#o-14").innerHTML = document.querySelector("#i-14").value;
}

document.querySelector("#b-15").onclick = () => {
    document.querySelector("#o-15-0").value = document.querySelector("#i-15").value;
    document.querySelector("#o-15-1").innerHTML = document.querySelector("#i-15").value;
}

document.querySelector("#b-16").onclick = () => {
    document.querySelector("#o-16").innerHTML = document.querySelector("#s-16").value;
}

document.querySelector("#s-17").onchange = () => {
    document.querySelector("#o-17").innerHTML = document.querySelector("#s-17").value;
}

document.querySelector("#s-18").onchange = () => {
    document.querySelector("#o-18").value = document.querySelector("#s-18").value;
}

document.querySelector("#o-19").value = document.querySelector("#i-19").textContent;

document.querySelector("#s-20").onchange = () => {
    document.querySelector("#o-20").value = document.querySelector("#s-20").value;
}