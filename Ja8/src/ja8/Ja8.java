package ja8;

public class Ja8 {

    public static void main(String[] args) {
        Shape[] arr = new Shape[]{new Circle(), new Square(), new Triangle()};
//        Shape[] arr = new Shape[3];
//        arr[0] = new Circle();
//        arr[1] = new Square();
//        arr[2] = new Triangle();
        for (int step = 0; step < arr.length; step++) {
            arr[step]._draw();
        }
    }
}
