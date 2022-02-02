package ja11;

//Тут final обозначает не возможность наследования из данного класса
public final class Math {

    public static int randomNumber = 2121;

    //Тут final обозначает не возможность переопределения функции(к примеру в дочернем классе)
    public final static int _sum(int firstNumber, int secondNumber) {
        return firstNumber + secondNumber;
    }

    public static int _mult(int firstNumber, int secondNumber) {
        return firstNumber * secondNumber;
    }
}
