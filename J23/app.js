// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */
const key = ["5", "a4", "a7"];
document.querySelector(".b-1").addEventListener("click", (event) => {
    localStorage.setItem(key[0], 11);
});

// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-2. */
document.querySelector(".b-2").addEventListener("click", (event) => {
    const arr = [7, 6, 5]
    console.log(JSON.parse(localStorage.getItem(key[0])));
    localStorage.setItem(key[0], JSON.stringify(arr));
});

// ваше событие здесь!!!

// Task 3 ============================================
/*  При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел значение перенос строки.  */
document.querySelector(".b-3").addEventListener("click", (event) => {
    let temp = JSON.parse(localStorage.getItem(key[0]));
    for (let keyz in temp) {
        document.querySelector(".out-3").innerHTML += `${keyz} : ${temp[keyz]}<br />`;
    }
});

// ваше событие здесь!!!

// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-4.*/

document.querySelector(".b-4").addEventListener("click", (event) => {
    let a4 = {
        hello: "world",
        hi: "mahai"
    }
    localStorage.setItem(key[1], JSON.stringify(a4));
});

// ваше событие здесь!!!

// Task 5 ============================================
/*   При нажатии кнопки b-5 выведите из LS сохранненный массив a4. Выведите в out-5 в формате ключ пробел значение перенос строки. */

document.querySelector(".b-5").addEventListener("click", (event) => {
    let temp = JSON.parse(localStorage.getItem(key[1]));
    for (let keyz in temp) {
        document.querySelector(".out-5").innerHTML += `${keyz} : ${temp[keyz]}<br />`;
    }
});

// ваше событие здесь!!!

// Task 6 ============================================
/*  Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6*/

document.querySelector(".b-6").addEventListener("click", (event) => {
    localStorage.clear();
});

// ваше событие здесь!!!

// Task 7 ============================================
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда пользователь нажимает кнопку b-7 число должно добавляться в массив. Массив должен сохраняться в LS с ключем a7.*/

document.querySelector(".b-7").addEventListener("click", (event) => {
    let arrz = JSON.parse(localStorage.getItem(key[2]));
    let input = Number((+document.querySelector(".i-7").value));
    if (isNaN(input)) {
        input = document.querySelector(".i-7").value;
    } else {
        input = (+document.querySelector(".i-7").value);
    }
    try {
        arrz.push(input);
    } catch (err) {
        arrz = [];
        arrz.push(input);
    }
    localStorage.setItem(key[2], JSON.stringify(arrz));
});

// ваше событие здесь!!!

// Task 8 ============================================
/*   Создайте функцию t8 при запуске которой из a7 удаляется последний элемент. После чего массив сохраняется в LS с ключем a7. Использовать массив из предыдущего задания. */

document.querySelector(".b-8").addEventListener("click", (event) => {
    let arrz = JSON.parse(localStorage.getItem(key[2]));
    arrz.pop();
    localStorage.setItem(key[2], JSON.stringify(arrz));
});

// ваше событие здесь!!!