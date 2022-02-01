package ja4;

import java.util.Scanner;

public class Ja4 {

    public static void main(String[] args) {
//        float[] arr = new float[]{21.21f, 21f, 21f};
//        for (int i = 0; i < 3; i++) {
//            System.out.println(arr[i]);
//        }
        Scanner input = new Scanner(System.in);
        System.out.print("Enter number of arr: ");
        int size = input.nextInt();

        int[] arr = new int[size];
        for (int step = 0; step < size; step++) {
            System.out.print("arr[" + step + "]: ");
            arr[step] = input.nextInt();
        }

        for (int step = 0; step < size; step++) {
            System.out.println("arr[" + step + "] == " + arr[step]);
        }
    }
}
