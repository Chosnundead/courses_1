package ja17;

import java.util.Scanner;
import java.io.*;

public class Ja17 {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.print("Введите путь(или абсолютный путь) до вашего файла: ");

        try {
            File file = new File(input.nextLine());
//            file.mkdirs();
            file.createNewFile();

            System.out.print("Запишите что-нибудь в файл: ");
            String text = input.nextLine();
            FileWriter fileW = new FileWriter(file);
            fileW.write(text);
            fileW.close();

            FileReader fileR = new FileReader(file);
            Scanner fileScanner = new Scanner(fileR);
            while (fileScanner.hasNextLine()) {
                System.out.println(fileScanner.nextLine());
            }
            fileR.close();
        } catch (Exception error) {
            System.out.println(error);
        } finally {
            System.out.println("Программа завершила работу!");
        }

    }
}
