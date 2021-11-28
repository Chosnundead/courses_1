// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

document.querySelector(".div-1").addEventListener("touchstart", () => {
    document.querySelector(".out-1").innerHTML = "touch";
});
// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */
let counter = 0;
document.querySelector(".div-2").addEventListener("touchstart", (event) => {
    document.querySelector(".out-2").innerHTML = ++counter;
});

// ваше событие здесь!!!

// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

for (let item of document.querySelectorAll(".block-3")) {
    item.addEventListener("touchstart", (event) => {
        document.querySelector(".out-3").innerHTML = item.getAttribute("data");
    });
}

// ваше событие здесь!!!

// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

function eventOfTouch(event) {
    document.querySelector(".out-4").innerHTML += "touch";
}

document.querySelector(".b-4").addEventListener("click", (event) => {
    document.querySelector(".div-4").addEventListener("touchstart", eventOfTouch);
});
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

document.querySelector(".b-5").addEventListener("click", (event) => {
    document.querySelector(".div-4").removeEventListener("touchstart", eventOfTouch);
});

// ваше событие здесь!!!

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

document.querySelector(".div-4").addEventListener("touchend", (event) => {
    document.querySelector(".out-6").innerHTML = "touchend";
});

// ваше событие здесь!!!

// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

document.querySelector(".div-7").addEventListener("touchstart", (event) => {
    document.querySelector(".div-7").style.backgroundColor = "red";
});

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

let a8 = ["red", "green", "blue", "orange", "pink", "yellow"];

document.querySelector(".div-8").addEventListener("touchstart", (event) => {
    let random = Math.round(Math.random() * (a8.length - 1));
    document.querySelector(".div-8").style.backgroundColor = a8[random];
});

// ваше событие здесь!!!

// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

document.querySelector(".div-9").addEventListener("touchstart", (event) => {
    document.querySelector(".out-9").innerHTML = event.touches.length;
});

// ваше событие здесь!!!

// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */

document.querySelector(".div-10").addEventListener("touchmove", () => {
    let w = (+(window.getComputedStyle(document.querySelector(".div-10")).width.slice(0, -2)));
    w++;
    document.querySelector(".div-10").style.width = `${w}px`;
});

// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

document.querySelector(".div-11").addEventListener("touchstart", (event) => {
    document.querySelector(".out-11").innerHTML = `radiusX == ${event.touches[0].radiusX}<br />radiusY == ${event.touches[0].radiusY}`;
});

// ваше событие здесь!!!

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll('.img-12-min');
let count = 0; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelector('.next');
next.addEventListener("touchstart", nextFunction);
next.addEventListener("click", nextFunction);

const prev = document.querySelector('.prev');
prev.addEventListener("touchstart", prevFunction);
prev.addEventListener("click", prevFunction);

const reset = document.querySelector(".reset");
reset.addEventListener("touchstart", resetFunction);
reset.addEventListener("click", resetFunction);

function nextFunction() {
    images[count].classList.remove("active-img");
    if (count == 5) {
        count = 0;
    } else {
        count++;
    }
    images[count].classList.add("active-img");
    document.querySelector(".img-12-max").setAttribute("src", images[count].getAttribute("src"));
}

function prevFunction() {
    images[count].classList.remove("active-img");
    if (count == 0) {
        count = 5;
    } else {
        count--;
    }
    images[count].classList.add("active-img");
    document.querySelector(".img-12-max").setAttribute("src", images[count].getAttribute("src"));
}

function resetFunction() {
    images[count].classList.remove("active-img");
    count = 0;
    images[count].classList.add("active-img");
    document.querySelector(".img-12-max").setAttribute("src", images[count].getAttribute("src"));
}

// ваше событие здесь!!!