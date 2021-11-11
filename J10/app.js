document.querySelector("#b-0").onclick = () => {
    arr = [true, "Hui", 21, 585, 210];
    for (let i = 0; i < arr.length; i++) {
        document.querySelector("#o-0").innerHTML += arr[i] + " ";
    }
    document.querySelector("#o-0").innerHTML += arr.length + " ";
    document.querySelector("#o-0").innerHTML += arr[3] + " ";
    document.querySelector("#o-0").innerHTML += arr[5] + " ";
    document.querySelector("#o-0").innerHTML += arr[8] + " ";
    document.querySelector("#o-0").innerHTML += (arr[0] + arr[2] + arr[3]);
}

document.querySelector("#b-1").onclick = () => {
    arr = ['china', 'india', 'brazil', 'japan', 'egypt'];
    arr.push("italy");
    arr.push("turkey");
    arr.push("vietnam");
    let temp = arr[3];
    arr[3] = arr[4];
    arr[4] = temp;
    for (let i = (arr.length - 1); i >= 0; i--) {
        document.querySelector("#o-1").innerHTML += arr[i] + " ";
    }
    arr0 = [100, 200, 300, 400, 700, 121];
    document.querySelector("#o-1").innerHTML += arr0[arr0.length - 1];
}

document.querySelector("#b-2").onclick = () => {
    arr = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
    arr_odd = [];
    arr_even = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2) {
            arr_odd.push(arr[i]);
        } else {
            arr_even.push(arr[i]);
        }
    }
    for (let i = 0; i < arr_odd.length; i++) {
        document.querySelector("#o-2").innerHTML += arr_odd[i] + " ";
    }
    document.querySelector("#o-2").innerHTML += "<br />";
    for (let i = 0; i < arr_even.length; i++) {
        document.querySelector("#o-2").innerHTML += arr_even[i] + " ";
    }
    document.querySelector("#o-2").innerHTML += "<br />";
}

document.querySelector("#b-3").onclick = () => {
    arr = [15, 24, 13, 78, 21, 4, 45, 67];
    temp = [];
    temp.push(arr[0]);
    temp.push(0);
    temp.push(0);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > temp[0]) {
            temp[0] = arr[i]
        }
        if (arr[i] < arr[temp[1]]) {
            temp[1] = i;
        }
        temp[2] += arr[i];
    }
    document.querySelector("#o-3").innerHTML = "Самый большой: " + temp[0] + ";Индекс самого малого: " + temp[1] + ";Сумма элементов: " + temp[2] + "<br />";
    document.querySelector("#o-3").innerHTML += arr;
}