package ja15;

import java.util.ArrayList;
import java.util.LinkedList;

public class Ja15 {

    public static void main(String[] args) {
        ArrayList<Integer> arr = new ArrayList<>(5);
        arr.add(56);
        arr.add(561);
        arr.add(562);
        arr.add(563);
        arr.add(564);
        arr.add(565);
//        arr.clear();
        arr.remove(0);

        for (Integer x : arr) {
            System.out.println(x);
        }

        LinkedList<String> names = new LinkedList<>();
        names.add("Tom");
        names.add("Nom");
        names.add("Many");
        names.add("Hyeny");
        names.add("Pros");
        names.add(1, "Poc");
//        names.clear();
        names.remove(0);

        for (String x : names) {
            System.out.println(x);
        }
    }
}
