package ja5;

import java.util.Scanner;

public class Ja5 {

    public static void main(String[] args) {
//        float[][] arr = new float[][]{{21.21f, 23.23f, 0f}, {21.21f, 23.23f, 0f}};
        //Динамический трёхмерный массив
        Scanner input = new Scanner(System.in);
        int number = input.nextInt();
        char[][][] arr;
        arr = new char[number][][];
        for (int i = 0; i < arr.length; i++) {
            arr[i] = new char[(i + 1)][];
            for (int j = 0; j < arr[i].length; j++) {
                arr[i][j] = new char[(number + 7)];
            }
        }
        arr[0][0][0] = 'Q';
        System.out.println(arr[0][0]);
    }
}
