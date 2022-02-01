package ja6;

import java.util.Scanner;

public class Ja6 {

    public static void main(String[] args) {
        System.out.println("2^2 == " + _pow(2f, 2));
        System.out.println("2^0 == " + _pow(2f, 0));
        System.out.println("2^-2 == " + _pow(2f, -2));
        int[] arr = _readArr();
        System.out.println(arr[0]);
    }

    public static float _pow(float firstNumber, int secondNumber) {
        if (secondNumber == 0) {
            return 1f;
        } else if (secondNumber < 0) {
            firstNumber = 1 / firstNumber;
            secondNumber = -secondNumber;
        }

        float result = firstNumber;
        for (int step = 1; step < secondNumber; step++) {
            result *= firstNumber;
        }

        return result;
    }

    public static int[] _readArr() {
        int[] arr;
        Scanner input = new Scanner(System.in);
        System.out.print("size == ");
        int size = input.nextInt();
        arr = new int[size];

        for (int step = 0; step < size; step++) {
            System.out.print("arr[" + step + "] == ");
            arr[step] = input.nextInt();
        }

        return arr;
    }
}
