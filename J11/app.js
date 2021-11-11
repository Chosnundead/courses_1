let arr = [1, "two", 3, 'd', "may"];

function _showArr() {
    document.querySelector("#o-0").innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        if (i == (arr.length - 1)) {
            document.querySelector("#o-0").innerHTML += arr[i];
        } else {
            document.querySelector("#o-0").innerHTML += arr[i] + " | ";
        }
    }
}

document.querySelector("#b-0-0").onclick = () => {
    _showArr();
}

document.querySelector("#b-0-1").onclick = () => {
    if (+document.querySelector("#i-0").value) {
        arr.push((+document.querySelector("#i-0").value));
    } else {
        arr.push(document.querySelector("#i-0").value);
    }
    _showArr();
}

document.querySelector("#b-0-2").onclick = () => {
    arr.pop();
    _showArr();
}

document.querySelector("#b-0-3").onclick = () => {
    if (+document.querySelector("#i-0").value) {
        arr.unshift((+document.querySelector("#i-0").value));
    } else {
        arr.unshift(document.querySelector("#i-0").value);
    }
    _showArr();
}

document.querySelector("#b-0-4").onclick = () => {
    arr.shift();
    _showArr();
}

document.querySelector("#b-0-5").onclick = () => {
    if (+document.querySelector("#i-0").value) {
        arr[arr.length] = ((+document.querySelector("#i-0").value));
    } else {
        arr[arr.length] = (document.querySelector("#i-0").value);
    }
    _showArr();
}

document.querySelector("#b-0-6").onclick = () => {
    let temp = [];
    for (let i = 0; i < (arr.length - 1); i++) {
        temp[temp.length] = arr[i];
    }
    delete arr;
    arr = [];
    for (let i = 0; i < temp.length; i++) {
        arr[i] = temp[i];
    }
    _showArr();
}

document.querySelector("#b-0-7").onclick = () => {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        temp[temp.length] = arr[i];
    }
    delete arr;
    arr = [];
    if (+document.querySelector("#i-0").value) {
        arr[arr.length] = ((+document.querySelector("#i-0").value));
    } else {
        arr[arr.length] = (document.querySelector("#i-0").value);
    }
    for (let i = 0; i < temp.length; i++) {
        arr[arr.length] = temp[i];
    }
    _showArr();
}

document.querySelector("#b-0-8").onclick = () => {
    let temp = [];
    for (let i = 1; i < arr.length; i++) {
        temp[temp.length] = arr[i];
    }
    delete arr;
    arr = [];
    for (let i = 0; i < temp.length; i++) {
        arr[arr.length] = temp[i];
    }
    _showArr();
}

document.querySelector("#b-0-9").onclick = () => {
    arr.reverse();
    _showArr();
}

document.querySelector("#b-0-10").onclick = () => {
    document.querySelector("#o-0").innerHTML = "";
    if (+document.querySelector("#i-0").value) {
        document.querySelector("#o-0").innerHTML = arr.indexOf((+document.querySelector("#i-0").value));
    } else {
        document.querySelector("#o-0").innerHTML = arr.indexOf(document.querySelector("#i-0").value);
    }
}

document.querySelector("#b-0-11").onclick = () => {
    document.querySelector("#o-0").innerHTML = "";
    let temp;
    if (+document.querySelector("#i-0").value) {
        temp = ((+document.querySelector("#i-0").value));
    } else {
        temp = (document.querySelector("#i-0").value);
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === temp) {
            document.querySelector("#o-0").innerHTML = i;
            break;
        }
        if (i == (arr.length - 1)) {
            document.querySelector("#o-0").innerHTML = -1;
            break;
        }
    }
}

document.querySelector("#b-0-12").onclick = () => {
    let temp = [], counter = 0;
    for (let i = (arr.length - 1); i >= 0; i--) {
        temp[counter] = arr[i];
        counter++;
    }
    delete arr;
    arr = [];
    for (let i = 0; i < temp.length; i++) {
        arr[i] = temp[i];
    }
    _showArr();
}

document.querySelector("#b-0-13").onclick = () => {
    if (+document.querySelector("#i-0").value) {
        for (let i = 0; i < (+document.querySelector("#i-0").value); i++) {
            arr.push(1);
        }
    }
    _showArr();
}

document.querySelector("#b-0-14").onclick = () => {
    if (+document.querySelector("#i-0").value) {
        if (arr.indexOf((+document.querySelector("#i-0").value)) == -1) {
            arr.push((+document.querySelector("#i-0").value));
        }
    } else {
        if (arr.indexOf(document.querySelector("#i-0").value) == -1) {
            arr.push(document.querySelector("#i-0").value);
        }
    }
    _showArr();
}

document.querySelector("#b-0-15").onclick = () => {
    document.querySelector("#o-0").innerHTML = "";
    if (+document.querySelector("#i-0").value) {
        document.querySelector("#o-0").innerHTML = arr.includes((+document.querySelector("#i-0").value));
    } else {
        document.querySelector("#o-0").innerHTML = arr.includes(document.querySelector("#i-0").value);
    }
}

document.querySelector("#b-0-16").onclick = () => {
    document.querySelector("#o-0").innerHTML = "";
    let temp = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i].length) && (arr[i].length > temp)) {
            temp = arr[i].length;
        }
    }
    document.querySelector("#o-0").innerHTML = temp;
}

document.querySelector("#b-0-17").onclick = () => {
    document.querySelector("#o-0").innerHTML = "";
    document.querySelector("#o-0").innerHTML = arr.join("");
}

let arr1_0 = [2, 1, 2, 1];
let arr1_1 = ["two", "one", "two", "one"];

document.querySelector("#b-1-0").onclick = () => {
    console.log(arr1_0.concat(arr1_1));
}

document.querySelector("#b-1-1").onclick = () => {
    let temp = [];
    for (let i = 0; i < arr1_0.length; i++) {
        temp[temp.length] = arr1_0[i];
    }
    for (let i = 0; i < arr1_1.length; i++) {
        temp[temp.length] = arr1_1[i];
    }
    console.log(temp);
}