package ja7;

public class Person {

    public Person() {
    }

    public Person(String name, int height) {
        this.height = height;
        this.name = name;
    }

    public Person(String name) {
        this.name = name;
    }

    protected String name = "Default";
    protected int height = 180;

    public void _sayHello(boolean isLn) {
        if (isLn) {
            System.out.println("Hello! My name is " + this.name + ".");
        } else {
            System.out.print("Hello! My name is " + this.name + ".");
        }
    }

    public void _stat() {
        System.out.println("\nname: " + this.name + ";\nheight: " + this.height + ".\n");
    }
}
