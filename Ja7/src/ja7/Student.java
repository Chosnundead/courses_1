package ja7;

public class Student extends Person {

    public Student() {
    }

    public Student(String name, int height, int course) {
        super(name, height);
        this.course = course;
    }

    protected int course = 1;

    public void _tellMe(boolean isLn) {
        if (isLn) {
            System.out.println("Hello! My name is " + super.name + ". I'm styding at " + this.course + " course.)");
        } else {
            System.out.println("Hello! My name is " + super.name + ". I'm styding at " + this.course + " course.)");
        }
    }
}
