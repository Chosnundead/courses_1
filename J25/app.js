// Task 1 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */

document.querySelector(".b-1").addEventListener("click", (event) => {
    let xmlHR1 = new XMLHttpRequest();
    xmlHR1.addEventListener("readystatechange", (event) => {
        if (xmlHR1.readyState == 4 && xmlHR1.status == 200) {
            document.querySelector(".out-1").innerHTML = xmlHR1.responseText;
        }
    });
    xmlHR1.open("GET", "http://getpost.itgid.info/index2.php?auth=bc4d74a9319730bc6a884298&action=1", true);
    xmlHR1.send();
});

// ваше событие здесь!!!

// Task 2 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */

document.querySelector(".b-2").addEventListener("click", (event) => {
    let xmlHR2 = new XMLHttpRequest();
    xmlHR2.addEventListener("readystatechange", (event) => {
        if (xmlHR2.status == 200 && xmlHR2.readyState == 4) {
            document.querySelector(".out-2").innerHTML = xmlHR2.responseText;
        }
    });
    xmlHR2.open("GET", "http://getpost.itgid.info/index2.php?auth=bc4d74a9319730bc6a884298&action=2&name=Denis", true);
    xmlHR2.send();
});

// ваше событие здесь!!!

// Task 3 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */

document.querySelector(".b-3").addEventListener("click", (event) => {
    let xmlHR3 = new XMLHttpRequest();
    xmlHR3.addEventListener("readystatechange", (event) => {
        if (xmlHR3.readyState == 4 && xmlHR3.status == 200) {
            document.querySelector(".out-3").innerHTML = xmlHR3.responseText;
        }
    });
    xmlHR3.open("GET", "http://getpost.itgid.info/index2.php?auth=bc4d74a9319730bc6a884298&action=3&num1=20&num2=1", true);
    xmlHR3.send();
});

// ваше событие здесь!!!

// Task 4 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */

document.querySelector(".b-4").addEventListener("click", (event) => {
    let xmlHR4 = new XMLHttpRequest();
    xmlHR4.addEventListener("readystatechange", (event) => {
        if (xmlHR4.readyState == 4 && xmlHR4.status == 200) {
            document.querySelector(".out-4").innerHTML = xmlHR4.responseText;
        }
    });
    xmlHR4.open("GET", "http://getpost.itgid.info/index2.php?auth=bc4d74a9319730bc6a884298&action=4&num1=1&num2=100", true);
    xmlHR4.send();
});

// ваше событие здесь!!!

// Task 5 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна по нажатию b-5. */

document.querySelector(".b-5").addEventListener("click", (event) => {
    let xmlHR5 = new XMLHttpRequest();
    xmlHR5.addEventListener("readystatechange", (event) => {
        if (xmlHR5.readyState == 4 && xmlHR5.status == 200) {
            document.querySelector(".out-5").innerHTML = xmlHR5.responseText;
        }
    });
    xmlHR5.open("GET", "http://getpost.itgid.info/index2.php?auth=bc4d74a9319730bc6a884298&action=5", true);
    xmlHR5.send();
});

// ваше событие здесь!!!

// Task 6 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */

document.querySelector(".b-6").addEventListener("click", (event) => {
    let xmlHR6 = new XMLHttpRequest();
    xmlHR6.addEventListener("readystatechange", (event) => {
        if (xmlHR6.readyState == 4 && xmlHR6.status == 200) {
            document.querySelector(".out-6").innerHTML = xmlHR6.responseText;
        }
    });
    xmlHR6.open("GET", "http://getpost.itgid.info/index2.php?auth=bc4d74a9319730bc6a884298&action=6&num1=2121&num2=666", true);
    xmlHR6.send();
});

// ваше событие здесь!!!

// Task 7 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */

document.querySelector(".b-7").addEventListener("click", (event) => {
    let xmlHR7 = new XMLHttpRequest();
    xmlHR7.addEventListener("readystatechange", (event) => {
        if (xmlHR7.readyState == 4 && xmlHR7.status == 200) {
            document.querySelector(".out-7").innerHTML = `<img src="${xmlHR7.responseText}" />`;
        }
    });
    xmlHR7.open("GET", "http://getpost.itgid.info/index2.php?auth=bc4d74a9319730bc6a884298&action=7", true);
    xmlHR7.send();
});

// ваше событие здесь!!!

// Task 8 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/

document.querySelector(".b-8").addEventListener("click", (event) => {
    let xmlHR8 = new XMLHttpRequest();
    xmlHR8.addEventListener("readystatechange", (event) => {
        if (xmlHR8.readyState == 4 && xmlHR8.status == 200) {
            document.querySelector(".out-8").innerHTML = xmlHR8.responseText;
        }
    });
    xmlHR8.open("GET", "http://getpost.itgid.info/index2.php?auth=bc4d74a9319730bc6a884298&action=8&year=2001", true);
    xmlHR8.send();
});

// ваше событие здесь!!!

// Task 9 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */

document.querySelector(".b-9").addEventListener("click", (event) => {
    let xmlHR9 = new XMLHttpRequest();
    xmlHR9.addEventListener("readystatechange", (event) => {
        if (xmlHR9.readyState == 4 && xmlHR9.status == 200) {
            document.querySelector(".out-9").innerHTML = xmlHR9.responseText;
        }
    });
    xmlHR9.open("GET", "http://getpost.itgid.info/index2.php?auth=bc4d74a9319730bc6a884298&action=9&m=1&d=1&y=1", true);
    xmlHR9.send();
});
// ваше событие здесь!!!

// Task 10 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по нажатию b-10.

*/

document.querySelector(".b-10").addEventListener("click", (event) => {
    let xmlHR10 = new XMLHttpRequest();
    xmlHR10.addEventListener("readystatechange", (event) => {
        if (xmlHR10.readyState == 4 && xmlHR10.status == 200) {
            document.querySelector(".out-10").innerHTML = xmlHR10.responseText;
        }
    });
    xmlHR10.open("POST", "http://getpost.itgid.info/index2.php", true);
    xmlHR10.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHR10.send("auth=bc4d74a9319730bc6a884298&action=1");
});
// Task 11 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */

document.querySelector(".b-11").addEventListener("click", (event) => {
    let xmlHR11 = new XMLHttpRequest();
    xmlHR11.addEventListener("readystatechange", (event) => {
        if (xmlHR11.readyState == 4 && xmlHR11.status == 200) {
            document.querySelector(".out-11").innerHTML = xmlHR11.responseText;
        }
    });
    xmlHR11.open("POST", "http://getpost.itgid.info/index2.php", true);
    xmlHR11.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHR11.send("auth=bc4d74a9319730bc6a884298&action=2&name=Denis");
});

// ваше событие здесь!!!

// Task 12 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/

document.querySelector(".b-12").addEventListener("click", (event) => {
    let xmlHR12 = new XMLHttpRequest();
    xmlHR12.addEventListener("readystatechange", (event) => {
        if (xmlHR12.readyState == 4 && xmlHR12.status == 200) {
            document.querySelector(".out-12").innerHTML = xmlHR12.responseText;
        }
    });
    xmlHR12.open("POST", "http://getpost.itgid.info/index2.php", true);
    xmlHR12.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHR12.send("auth=bc4d74a9319730bc6a884298&action=3&num1=1&num2=20");
});

// ваше событие здесь!!!

// Task 13 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/

document.querySelector(".b-13").addEventListener("click", (event) => {
    let xmlHR13 = new XMLHttpRequest();
    xmlHR13.addEventListener("readystatechange", (event) => {
        if (xmlHR13.readyState == 4 && xmlHR13.status == 200) {
            document.querySelector(".out-13").innerHTML = xmlHR13.responseText;
        }
    });
    xmlHR13.open("POST", "http://getpost.itgid.info/index2.php", true);
    xmlHR13.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHR13.send("auth=bc4d74a9319730bc6a884298&action=4&num1=1&num2=100");
});

// ваше событие здесь!!!

// Task 14 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/

document.querySelector(".b-14").addEventListener("click", (event) => {
    let xmlHR14 = new XMLHttpRequest();
    xmlHR14.addEventListener("readystatechange", (event) => {
        if (xmlHR14.readyState == 4 && xmlHR14.status == 200) {
            document.querySelector(".out-14").innerHTML = xmlHR14.responseText;
        }
    });
    xmlHR14.open("POST", "http://getpost.itgid.info/index2.php", true);
    xmlHR14.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHR14.send("auth=bc4d74a9319730bc6a884298&action=5");
});

// ваше событие здесь!!!

// Task 15============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */

document.querySelector(".b-15").addEventListener("click", (event) => {
    let xmlHR15 = new XMLHttpRequest();
    xmlHR15.addEventListener("readystatechange", (event) => {
        if (xmlHR15.readyState == 4 && xmlHR15.status == 200) {
            document.querySelector(".out-15").innerHTML = xmlHR15.responseText;
        }
    });
    xmlHR15.open("POST", "http://getpost.itgid.info/index2.php", true);
    xmlHR15.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHR15.send("auth=bc4d74a9319730bc6a884298&action=6&num1=2121&num2=666");
});

// ваше событие здесь!!!

// Task 16 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */

document.querySelector(".b-16").addEventListener("click", (event) => {
    let xmlHR16 = new XMLHttpRequest();
    xmlHR16.addEventListener("readystatechange", (event) => {
        if (xmlHR16.readyState == 4 && xmlHR16.status == 200) {
            document.querySelector(".out-16").innerHTML = `<img src="${xmlHR16.responseText}" />`;
        }
    });
    xmlHR16.open("POST", "http://getpost.itgid.info/index2.php", true);
    xmlHR16.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHR16.send("auth=bc4d74a9319730bc6a884298&action=7");
});

// ваше событие здесь!!!

// Task 17 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */

document.querySelector(".b-17").addEventListener("click", (event) => {
    let xmlHR17 = new XMLHttpRequest();
    xmlHR17.addEventListener("readystatechange", (event) => {
        if (xmlHR17.readyState == 4 && xmlHR17.status == 200) {
            document.querySelector(".out-17").innerHTML = xmlHR17.responseText;
        }
    });
    xmlHR17.open("POST", "http://getpost.itgid.info/index2.php", true);
    xmlHR17.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHR17.send("auth=bc4d74a9319730bc6a884298&action=8&year=2001");
});

// ваше событие здесь!!!

// Task 18 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна по нажатию b-18. */

document.querySelector(".b-18").addEventListener("click", (event) => {
    let xmlHR18 = new XMLHttpRequest();
    xmlHR18.addEventListener("readystatechange", (event) => {
        if (xmlHR18.readyState == 4 && xmlHR18.status == 200) {
            document.querySelector(".out-18").innerHTML = xmlHR18.responseText;
        }
    });
    xmlHR18.open("POST", "http://getpost.itgid.info/index2.php", true);
    xmlHR18.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlHR18.send("auth=bc4d74a9319730bc6a884298&action=9&m=1&d=1&y=1");
});

// ваше событие здесь!!!