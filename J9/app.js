document.querySelector("#b-0").onclick = () => {
    document.querySelector("#o-0").style.width = "200px";
    document.querySelector("#o-0").style.height = "90px";
}

document.querySelector("#b-1").onclick = () => {
    document.querySelector("#o-1").classList.toggle("bg");
}

document.querySelector("#b-2").onclick = () => {
    document.querySelector("#o-2").classList.remove("bg");
}

document.querySelector("#b-3").onclick = () => {
    if ("bg" == document.querySelector("#o-1").classList[0]) {
        console.log(true);
    } else {
        console.log(false);
    }
}

for (let i = 0; i < document.querySelectorAll("#i-4 > .i-4").length; i++) {
    document.querySelectorAll("#i-4 > .i-4")[i].onclick = () => {
        document.querySelectorAll("#i-4 > .i-4")[i].classList.toggle("bg");
    }
}

document.querySelector("#b-4").onclick = () => {
    document.querySelector("#o-4").innerHTML = "";
    document.querySelector("#o-4").innerHTML += document.querySelectorAll(".i-4").length;
    for (let i = 0; i < document.querySelectorAll("#i-4 > .i-4").length; i++) {
        document.querySelectorAll("#i-4 > .i-4")[i].classList.toggle("bg");
    }
}

document.querySelector("#b-5").onclick = () => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("bg");
    newDiv.innerHTML = 21;
    console.log(newDiv);
    newDiv.onclick = () => {
        console.log("Хуй");
    }
    document.querySelector("#o-5").appendChild(newDiv);
}

let counter = 0;
document.querySelector("#b-6").onclick = () => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("bg");
    newDiv.innerHTML = 666;
    if (counter <= 2) {
        switch (counter) {
            case 0:
                document.querySelector("#o-6").after(newDiv);
                break;
            case 1:
                document.querySelector("#o-6").before(newDiv);
                break;
            case 2:
                document.querySelector("#o-6").replaceWith(newDiv);
                break;
        }
        counter++;
    }
}

document.querySelector("#b-7").onclick = () => {
    document.querySelector("#o-7").innerHTML = "";
    for (let i = 0; i < document.querySelectorAll("#blia").length; i++) {
        document.querySelector("#o-7").innerHTML += document.querySelectorAll("#blia")[i].getAttribute("data") + "_";
        document.querySelectorAll("#blia")[i].setAttribute("data-xyi", ("xyi" + i));
    }
}