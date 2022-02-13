package ja16;

public class Ja16 {

    public static void main(String[] args) {
        try {
            int[] arr = new int[3];
            System.out.println(arr[21]);
        } catch (Exception error) {
            System.out.println(error);
        }

        try {
            System.out.println(100 / 0);
        } catch (Exception error) {
            System.out.println(error);
        } finally {
            System.out.println("2121");
        }
    }
}
