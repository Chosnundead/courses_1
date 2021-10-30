document.querySelector("#b-1").onclick = () => {
    document.querySelector("#o-1").innerHTML = "";
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            document.querySelector("#o-1").innerHTML += "*";
        }
        document.querySelector("#o-1").innerHTML += "_";
    }
}

document.querySelector("#b-2").onclick = () => {
    document.querySelector("#o-2").innerHTML = "";
    for (let i = 0; i < 3; i++) {
        document.querySelector("#o-2").innerHTML += (i + 1) + "<br />";
        for (let j = 0; j < 3; j++) {
            document.querySelector("#o-2").innerHTML += "*_";
        }
        document.querySelector("#o-2").innerHTML += "<br />";
    }
}

document.querySelector("#b-3").onclick = () => {
    document.querySelector("#o-3").innerHTML = "";
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
            document.querySelector("#o-3").innerHTML += "*_";
        }
        document.querySelector("#o-3").innerHTML += "<br />";
    }
}

document.querySelector("#b-4").onclick = () => {
    document.querySelector("#o-4").innerHTML = "";
    for (let i = 0; i < 3; i++) {
        document.querySelector("#o-4").innerHTML += (i + 1) + "_";
        for (let j = 0; j < 5; j++) {
            document.querySelector("#o-4").innerHTML += (j + 1) + "*";
        }
    }
}

document.querySelector("#b-5").onclick = () => {
    document.querySelector("#o-5").innerHTML = "";
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 6; j++) {
            if (j % 2) {
                document.querySelector("#o-5").innerHTML += 0;
            } else {
                document.querySelector("#o-5").innerHTML += 1;
            }
        }
        document.querySelector("#o-5").innerHTML += "<br />";
    }
}

document.querySelector("#b-6").onclick = () => {
    document.querySelector("#o-6").innerHTML = "";
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 1; j++) {
            document.querySelector("#o-6").innerHTML += "10x01x";
        }
        document.querySelector("#o-6").innerHTML += "<br />";
    }
}

document.querySelector("#b-7").onclick = () => {
    document.querySelector("#o-7").innerHTML = "";
    let count = 1;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < count; j++) {
            document.querySelector("#o-7").innerHTML += "*";
        }
        document.querySelector("#o-7").innerHTML += "<br />";
        count++;
    }
}

document.querySelector("#b-8").onclick = () => {
    document.querySelector("#o-8").innerHTML = "";
    let count = 5;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < count; j++) {
            document.querySelector("#o-8").innerHTML += "*";
        }
        document.querySelector("#o-8").innerHTML += "<br />";
        count--;
    }
}

document.querySelector("#b-9").onclick = () => {
    document.querySelector("#o-9").innerHTML = "";
    let count = 1;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < count; j++) {
            document.querySelector("#o-9").innerHTML += (j + 1) + "_";
        }
        document.querySelector("#o-9").innerHTML += "<br />";
        count++;
    }
}

document.querySelector("#b-10").onclick = () => {
    document.querySelector("#o-10").innerHTML = "";
    let count = 1;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 10; j++) {
            if (count < 10) {
                document.querySelector("#o-10").innerHTML += "0";
            }
            document.querySelector("#o-10").innerHTML += count + "_";
            count++;
        }
        document.querySelector("#o-10").innerHTML += "<br />";
    }
}