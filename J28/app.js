// Task 1
// Создайте класс Goods. Класс должен содержать свойства name, amount. Создайте на его основе объект goods. Выведите в консоль созданный объект. Помните, все классы - в отдельных файлах. Имена классов с большой буквы.
class Goods {
    constructor(n, a, i, c) {
        this.name = n;
        this.amount = a;
        this.icon = i;
        this.count = c;
    }
    _draw(element) {
        document.querySelector(element).innerHTML += `<img src="${this.icon}" />`;
    }
    _show() {
        console.log(`${this.name} стоит ${this.amount}рублей`);
    }
    _debug() {
        console.log(this);
    }
}

let goods = new Goods("Жизнь", 21, "https://www.bobrlife.by/wp-content/uploads/2020/01/Lifehourglass.jpg", 6);
goods._debug();
goods._draw(".out-4");

//Task 2.
//  Добавьте в класс Goods свойства image и count - картинка и количество на складе.

//Task 3.
//  Добавьте в класс Goods метод draw, который будет выводить div с изображением, названием товара, ценой - в указанный элемент (дозапись).

// Task 4.
// Создайте на основе класса Goods объект goods2, заполните свойства, примените метод draw для вывода товара на страницу в блок out-4.

//Task 5.
// Создайте класс Goods2, который наследуется от Goods. Добавьте ему свойство sale равное true или false. Перезапишите метод draw так, чтобы он выводил информацию о распродажах.

class Goods2 extends Goods {
    constructor(n, a, i, c, sale) {
        super(n, a, i, c);
        this.sale = sale;
    }
    _draw(element) {
        document.querySelector(element).innerHTML += `<img src="${this.icon}" /><br />`;
        if (this.sale) {
            document.querySelector(element).innerHTML += `Проводиться распрадажа!`;
        } else {
            document.querySelector(element).innerHTML += `Распродажи нет.`;
        }
    }
}

let goods2 = new Goods2("Смерть", 2, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBm4qy2upY79apRy59XbzBhApqyYd4KjUq7g&usqp=CAU", 666, true);
goods2._draw(".out-6");

// Task 6.
// Создайте на основе класса Goods2 объект goods3. Заполните все поля. Выведите товар на страницу с помощью метода draw. Вывод осуществить в out-6.

// Task 7.
// Создайте класс Valid, который содержит свойства email, password, isValid. И метод validate. Метод validate должен проверять длину пароля и писать false в isValid если длина меньше 6 и true если больше. Изначально свойство isValid равно false.

let valid = [];

class Valid {
    constructor(email, password) {
        this.email = email;
        this.password = password;
        if (password.toString().length < 6) {
            this.isValid = false;
        } else {
            this.isValid = true;
        }
    }
    _debug() {
        console.log(this);
    }
}

valid.push(new Valid("gmail", 1999));
valid.push(new Valid("mailru", 212133214532));
console.log(valid);

//Task 8.
// Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 5 символов. Запустите метод validate() и выведите в консоль свойство isValid.

//Task 9.
// Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 7 символов. Запустите метод validate() и выведите в консоль свойство isValid.

//Task 10.
// Унаследуйтесь от класса Valid и создайте класс Valid2. Расширьте его свойствами emaiError, passwordError. По умолчанию, они равны пустой строке. Перезапишите метод validate(), помимо проверки пароля, он должен содержать еще проверку свойства email на пустоту. Если поле email пустое - то isValid - false. Также, в случае ошибки валидации в поле emailError пишется сообщение ‘email empty’, в поле passwordError - ‘min length 6’.

class Valid2 extends Valid {
    constructor(email, password) {
        super(email, password);
        if ((email != "") && (email != null) && (this.isValid == true)) {
            this.isValid = true;
        } else {
            this.isValid = false;
        }
        if (!(this.isValid)) {
            if (password.toString().length < 6) {
                console.log("passwordError!");
            }
            if (!((email != "") && (email != null))) {
                console.log("emailError!");
            }
        }
    }
}

//Task 11.
// Создайте на основе класса Valid2 объект valid2 и задайте пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.

//Task 12.
// Создайте на основе класса Valid2 объект valid3 и задайте не пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.

let valid2 = [];
valid2.push(new Valid2("", 2123));
valid2.push(new Valid2("", 21232312412421));
valid2.push(new Valid2("2e12e12e12", 2123));
valid2.push(new Valid2("cewdvre", 212321213123));
console.log(valid2);