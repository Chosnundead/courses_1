package ja2;

import java.util.Scanner;

public class Ja2 {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);

        System.out.print("number == ");
        int number = input.nextInt();

        boolean isTrue = number >= 10;
        number = number >= 10 ? 10 : 0;
        if (isTrue) {
            System.out.println("number is more than 10!");
        } else if (number == 0) {
            System.out.println("number is 0!");
        } else {
            System.out.println("number isnt more than 10 and not 0!");
        }
        switch (number) {
            case 0 ->
                System.out.println("number == 0");
            case 10 ->
                System.out.println("number == 10");
            default ->
                System.out.println("Error!");
        }
    }
}
