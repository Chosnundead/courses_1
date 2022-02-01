
import java.util.Scanner;

public class main {

    public static void main(String[] args) {
        System.out.print("Hello World!");
        System.out.println("Hello World!");
        byte number1 = 127;
        short number2 = 32000;
        int number3 = 1234567890;
        long number4 = 1234567890;
        float number5 = 23.23f;
        double number6 = 23.212121212121d;
        boolean isTrue = false;
        char sym = 'R';
        String str = "Hello World!";
        System.out.println("byte: " + number1);
        System.out.println("short: " + number2);
        System.out.println("int: " + number3);
        System.out.println("long: " + number4);
        System.out.println("float: " + number5);
        System.out.println("double: " + number6);
        System.out.println("boolean: " + isTrue);
        System.out.println("char: " + sym);
        System.out.println("String: " + str);
        Scanner input = new Scanner(System.in);
        System.out.println("Your string is: " + input.nextLine());
        int first, second, result;
        System.out.print("Please, input first number: ");
        first = input.nextInt();
        System.out.print("Please, input second number: ");
        second = input.nextInt();
        result = first + second;
        System.out.println("Result is: " + result);
    }
}
