package ja11;

public class Ja11 {

    public static int _sum(int firstNumber, int secondNumber) {
        return firstNumber + secondNumber;
    }

    public static int _sum(int firstNumber, int secondNumber, int thirdNumber) {
        return firstNumber + secondNumber + thirdNumber;
    }

    public static float _sum(float firstNumber, float secondNumber, float thirdNumber) {
        return firstNumber + secondNumber + thirdNumber;
    }

    public static void main(String[] args) {
        System.out.println(_sum(1, 3));
        System.out.println(_sum(1, 3, 21));
        System.out.println(_sum(1f, 3.21f, 21.0002f));

        int number = Math._mult(1, 5);
        System.out.println(number);

        Math Example = new Math();

        //Пример использования static
        System.out.println(Example.randomNumber);
        System.out.println(Math.randomNumber);
        Example.randomNumber = 2323;
        System.out.println(Example.randomNumber);
        System.out.println(Math.randomNumber);

        //Тут final обозначает константу
        final float pi = 3.14f;
    }
}
