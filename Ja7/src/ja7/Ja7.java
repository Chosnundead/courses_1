package ja7;

public class Ja7 {

    public static void main(String[] args) {
        Person[] Human = new Person[3];
        Human[0] = new Person("Victor", 190);
        Human[1] = new Person();
        Human[2] = new Person("Dima");

        Human[0]._stat();
        Human[1]._stat();
        Human[2]._stat();
        Human[0]._sayHello(true);
        Human[2]._sayHello(true);

        Student NoName = new Student("Denis", 181, 1);
        NoName._tellMe(true);
    }
}
