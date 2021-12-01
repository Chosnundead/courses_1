// Task 1 ============================================
/*
 <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция
    должна по нажатию b-1.</p>
*/

document.querySelector(".b-1").addEventListener("click", (event) => {
    let promise1 = new Promise((promise, reject) => {
        fetch("http://getpost.itgid.info/index2.php?auth=bc4d74a9319730bc6a884298&action=1")
            .then((data) => {
                promise(data.text());
            });
    });
    let promise2 = new Promise((promise, reject) => {
        fetch("http://getpost.itgid.info/index2.php?auth=bc4d74a9319730bc6a884298&action=2&name=Denis")
            .then((data) => {
                promise(data.text());
            });
    });
    Promise.all([promise1, promise2])
        .then((data) => {
            document.querySelector(".out-1").innerHTML = `Первый запрос: ${data[0]}<br />Второй запрос: ${data[1]}`;
        });
});

// ваше событие здесь!!!

// Task 2 ============================================
/*
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.</p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
заданном
диапазоне.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. </p>

*/

document.querySelector(".b-2").addEventListener("click", (data) => {
    let promise1 = new Promise((resolve, reject) => {
        fetch("http://getpost.itgid.info/index2.php?auth=bc4d74a9319730bc6a884298&action=3&num1=11&num2=10")
            .then((data) => {
                resolve(data.text());
            });
    });
    let promise2 = new Promise((resolve, reject) => {
        fetch("http://getpost.itgid.info/index2.php?auth=bc4d74a9319730bc6a884298&action=4&num1=1&num2=100")
            .then((data) => {
                resolve(data.text());
            });
    })
    Promise.all([promise1, promise2])
        .then((data) => {
            document.querySelector(".out-2").innerHTML = `Первый запрос: ${data[0]}<br />Второй запрос: ${data[1]}`;
        });
});

// ваше событие здесь!!!

// Task 3 ============================================
/*
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два
запроса объедините с помощью promiseAll.
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. </p>
                 */

document.querySelector(".b-3").addEventListener("click", (event) => {
    let promise1 = new Promise((resolve, reject) => {
        fetch("http://getpost.itgid.info/index2.php?auth=bc4d74a9319730bc6a884298&action=5")
            .then((data) => {
                resolve(data.text());
            });
    });
    let promise2 = new Promise((resolve, reject) => {
        fetch("http://getpost.itgid.info/index2.php?auth=bc4d74a9319730bc6a884298&action=6&num1=666&num2=2121")
            .then((data) => {
                resolve(data.text());
            });
    });
    Promise.all([promise1, promise2])
        .then((data) => {
            document.querySelector(".out-3").innerHTML = `Первый запрос: ${data[0]}<br />Второй запрос: ${data[1]}`;
        });
});

// ваше событие здесь!!!

// Task 4 ============================================
/*
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все
сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Выведите в out-4 результат. Запускаться функция должна по нажатию b-4.</p>

*/

document.querySelector(".b-4").addEventListener("click", (event) => {
    let promise1 = new Promise((resolve, reject) => {
        fetch("http://getpost.itgid.info/index2.php?auth=bc4d74a9319730bc6a884298&action=7")
            .then((data) => {
                resolve(data.text());
            });
    });
    let promise2 = new Promise((resolve, reject) => {
        fetch("http://getpost.itgid.info/index2.php?auth=bc4d74a9319730bc6a884298&action=8&year=2001")
            .then((data) => {
                resolve(data.text());
            });
    });
    Promise.all([promise1, promise2])
        .then((data) => {
            document.querySelector(".out-4").innerHTML = `Первый запрос: <img src="${data[0]}" /><br />Второй запрос: ${data[1]}`;
        });
});

// ваше событие здесь!!!

// Task 5 ============================================
/*
 <p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/

document.querySelector(".b-5").addEventListener("click", (event) => {
    let promise1 = new Promise((resolve, reject) => {
        fetch("http://getpost.itgid.info/index2.php", {
            method: "POST",
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            },
            body: "auth=bc4d74a9319730bc6a884298&action=1"
        })
            .then((data) => {
                resolve(data.text());
            });
    });
    let promise2 = new Promise((resolve, reject) => {
        fetch("http://getpost.itgid.info/index2.php", {
            method: "POST",
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            },
            body: "auth=bc4d74a9319730bc6a884298&action=2&name=Denis"
        })
            .then((data) => {
                resolve(data.text());
            });
    });
    Promise.all([promise1, promise2])
        .then((data) => {
            document.querySelector(".out-5").innerHTML = `Первый запрос: ${data[0]}<br />Второй запрос: ${data[1]}`;
        });
});

// ваше событие здесь!!!

// Task 6 ============================================
/*
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3.
    Добавьте
    параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. </p>
<p>Отправьте POST
    запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
    Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
    заданном
    диапазоне.</p>
<p> Два запроса объедините с помощью promiseAll.
    Выведите в
    out-6 результат. Запускаться функция должна по нажатию b-6. </p>
*/

document.querySelector(".b-6").addEventListener("click", (event) => {
    let promise1 = new Promise((resolve, reject) => {
        fetch("http://getpost.itgid.info/index2.php", {
            method: "POST",
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            },
            body: "auth=bc4d74a9319730bc6a884298&action=3&num1=6&num2=15"
        })
            .then((data) => {
                resolve(data.text());
            });
    });
    let promise2 = new Promise((resolve, reject) => {
        fetch("http://getpost.itgid.info/index2.php", {
            method: "POST",
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            },
            body: "auth=bc4d74a9319730bc6a884298&action=4&num1=1&num2=100"
        })
            .then((data) => {
                resolve(data.text());
            });
    });
    Promise.all([promise1, promise2])
        .then((data) => {
            document.querySelector(".out-6").innerHTML = `Первый запрос: ${data[0]}<br />Второй запрос: ${data[1]}`;
        });
});

// ваше событие здесь!!!

// Task 7 ============================================
/*
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. </p>

*/

document.querySelector(".b-7").addEventListener("click", (event) => {
    let promise1 = new Promise((resolve, reject) => {
        fetch("http://getpost.itgid.info/index2.php", {
            method: "POST",
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            },
            body: "auth=bc4d74a9319730bc6a884298&action=5"
        })
            .then((data) => {
                resolve(data.text());
            });
    });
    let promise2 = new Promise((resolve, reject) => {
        fetch("http://getpost.itgid.info/index2.php", {
            method: "POST",
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            },
            body: "auth=bc4d74a9319730bc6a884298&action=6&num1=666&num2=2121"
        })
            .then((data) => {
                resolve(data.text());
            });
    });
    Promise.all([promise1, promise2])
        .then((data) => {
            document.querySelector(".out-7").innerHTML = `Первый запрос: ${data[0]}<br />Второй запрос: ${data[1]}`;
        });
});

// ваше событие здесь!!!

// Task 8 ============================================
/*
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/

document.querySelector(".b-8").addEventListener("click", (event) => {
    let promise1 = new Promise((resolve, reject) => {
        fetch("http://getpost.itgid.info/index2.php", {
            method: "POST",
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            },
            body: "auth=bc4d74a9319730bc6a884298&action=7"
        })
            .then((data) => {
                resolve(data.text());
            });
    });
    let promise2 = new Promise((resolve, reject) => {
        fetch("http://getpost.itgid.info/index2.php", {
            method: "POST",
            headers: {
                "Content-type": "application/x-www-form-urlencoded"
            },
            body: "auth=bc4d74a9319730bc6a884298&action=8&year=2001"
        })
            .then((data) => {
                resolve(data.text());
            });
    });
    Promise.all([promise1, promise2])
        .then((data) => {
            document.querySelector(".out-8").innerHTML = `Первый запрос: <img src="${data[0]}" /><br />Второй запрос: ${data[1]}`;
        });
});
// ваше событие здесь!!!