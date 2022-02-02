package ja12;

public class Ja12 {

    public static void main(String[] args) {
        Array Example = new MyArray();
        Example._add(2121);
        Example._add(2323);
        System.out.println(Example._get(0));
        System.out.println(Example._get(1));

        Array ExampleAnother = new MyArrayAnother();
        ExampleAnother._add(2121);
        ExampleAnother._add(2323);
        System.out.println(ExampleAnother._get(0));
        System.out.println(ExampleAnother._get(1));
    }
}
