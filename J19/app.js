// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */

function t1() {
    document.querySelector(".out-1").innerHTML = document.querySelector(".div-1").textContent;
}

document.querySelector(".div-1").onclick = () => {
    t1();
}

// ваше событие здесь!!!

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */

function t2() {
    document.querySelector(".out-2").innerHTML = document.querySelector(".div-2").textContent;
}

document.querySelector(".div-2").onclick = (event) => {
    if (event.altKey) {
        t2();
        return true;
    } else {
        return false;
    }
}

// ваше событие здесь!!!

// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;

function t3() {
    document.querySelector(".out-3").innerHTML = w3;
}

document.querySelector(".div-3").onclick = () => {
    w3 += 5;
    document.querySelector(".div-3").style.width = `${w3}px`;
    t3();
}

// ваше событие здесь!!!

// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */

function t4() {
    document.querySelector(".out-4").innerHTML = document.querySelector(".div-4").textContent;
    return document.querySelector(".div-4").textContent;
}

document.querySelector(".div-4").ondblclick = () => {
    t4();
}

// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */

function t5() {
    if (document.querySelector(".div-5").classList.contains("active")) {
        document.querySelector(".div-5").classList.remove("active");
    } else {
        document.querySelector(".div-5").classList.add("active");
    }
}

document.querySelector(".div-5").ondblclick = () => {
    t5();
}
// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

function t6() {
    if (document.querySelector(".ul-6").classList.contains("hide")) {
        document.querySelector(".ul-6").classList.remove("hide");
    } else {
        document.querySelector(".ul-6").classList.add("hide");
    }
}

document.querySelector(".div-6").ondblclick = () => {
    t6();
}

// ваше событие здесь!!!

// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

function t7() {
    if (document.querySelector(".div-7").classList.contains("active")) {
        document.querySelector(".div-7").classList.remove("active");
    } else {
        document.querySelector(".div-7").classList.add("active");
    }
}

document.querySelector(".div-7").oncontextmenu = () => {
    t7();
    return false;
}

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */

let isChanged = false;
function t8() {
    if (isChanged) {
        document.querySelector("html").oncontextmenu = () => {
            return true;
        }
        isChanged = false;
    } else {
        document.querySelector("html").oncontextmenu = () => {
            return false;
        }
        isChanged = true;
    }
}

document.querySelector(".ch-8").onchange = () => {
    t8();
}

// ваше событие здесь!!!

// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

function t9() {
    document.querySelector(".img-9").setAttribute("src", "images/2.png");
}

document.querySelector(".div-9").onclick = () => {
    t9();
}

// ваше событие здесь!!!

// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

function t10() {
    document.querySelector(".img-10").setAttribute("src", "images/2.png");
}

document.querySelector(".div-10").onmouseenter = () => {
    t10();
}

// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */

document.querySelector(".div-11").onmouseenter = () => {
    document.querySelector(".img-11").setAttribute("src", "images/2.png");
}

document.querySelector(".div-11").onmouseleave = () => {
    document.querySelector(".img-11").setAttribute("src", "images/1.png");
}

// ваше событие здесь!!!

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */

document.querySelector(".div-12").onmousedown = () => {
    document.querySelector(".div-12").classList.add("active");
}

// () => {
// }

// ваше событие здесь!!!

// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */

document.querySelector(".div-13").onmousedown = () => {
    document.querySelector(".div-13").classList.add("active");
}

document.querySelector(".div-13").onmouseup = () => {
    document.querySelector(".div-13").classList.remove("active");
}

// () =>  {
// }

// () =>  {
// }
// ваше событие здесь!!!

// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */

function t14() {
    document.querySelector(".div-14").onclick = () => {
        document.querySelector(".div-14").classList.add("active");
    }
}
document.querySelector('.b-14').onclick = t14;

// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */

document.querySelector(".div-15").onmousemove = () => {
    let number = (+document.querySelector(".div-15").textContent);
    number++;
    document.querySelector(".div-15").innerHTML = number;
}
// ваше событие здесь!!!

// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */

document.querySelector(".div-16").onmousemove = () => {
    let width = window.getComputedStyle(document.querySelector(".div-16")).width;
    width = (+width.slice(0, -2));
    width++;
    document.querySelector(".div-16").style.width = `${width}px`;
}
// ваше событие здесь!!!

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

function t17On() {
    document.querySelector(".div-16").onmousemove = () => {
        let width = window.getComputedStyle(document.querySelector(".div-16")).width;
        width = (+width.slice(0, -2));
        width++;
        document.querySelector(".div-16").style.width = `${width}px`;
    }
}
function t17Off() {
    document.querySelector(".div-16").onmousemove = () => {
        return false;
    }
}

document.querySelector(".b-17_on").onclick = () => {
    t17On();
}

document.querySelector(".b-17_off").onclick = () => {
    t17Off();
}
// ваше событие здесь!!!
// ваше событие здесь!!!

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */

document.querySelector(".div-18").onmouseenter = () => {
    let width = window.getComputedStyle(document.querySelector(".div-18")).width;
    width = (+width.slice(0, -2));
    document.querySelector(".div-18").innerHTML = width;
}

// ваше событие здесь!!!

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */
document.querySelector(".div-19").onmouseout = () => {
    document.querySelector(".div-19").innerHTML = "";
    for (let item of document.querySelector(".div-19").classList) {
        document.querySelector(".div-19").innerHTML += `${item}<br />`
    }
}
// ваше событие здесь!!!

// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */

document.querySelector("progress").onmousemove = () => {
    let number = (+document.querySelector("progress").getAttribute("value"));
    number++;
    document.querySelector("#value").innerHTML = number;
    document.querySelector("progress").setAttribute("value", number);
}
// ваше событие здесь!!!