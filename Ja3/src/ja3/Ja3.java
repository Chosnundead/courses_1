package ja3;

public class Ja3 {

    public static void main(String[] args) {

        int i = 100;
        while (i >= 10) {
            System.out.println(i);
            i -= 10;
            if (i < 50) {
                break;
            }
        }

        for (int j = 100; j >= 10; j -= 10) {
            if (j >= 50) {
                continue;
            }
            System.out.println(j);
        }

        i = 100;
        do {
            System.out.println(i);
            i -= 10;
        } while (i != 100 && i >= 10);
    }
}
