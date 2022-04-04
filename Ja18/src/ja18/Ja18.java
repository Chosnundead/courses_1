package ja18;

class SomeThread extends Thread {

    public void run() {
        for (int step = 0; step < 10; step++) {
            System.out.println("arr[" + step + "] == " + (step * step));
        }
    }
}

class SomeAnotherThread implements Runnable {

    @Override
    public void run() {
        for (int step = 0; step < 10; step++) {
            System.out.println("arr[" + step + "] == " + (step * step));
        }
    }
}

public class Ja18 {

    public static void _secondTest() {
        Thread one = new Thread(new SomeAnotherThread());
        Thread two = new Thread(new SomeAnotherThread());

        one.start();
        two.start();
    }

    public static void _thirdTest() {
        Thread one = new Thread(new Runnable() {
            @Override
            public void run() {
                for (int step = 0; step < 10; step++) {
                    System.out.println("arr[" + step + "] == " + (step * step));
                }
            }
        }
        );
        new Thread(new Runnable() {
            @Override
            public void run() {
                for (int step = 0; step < 10; step++) {
                    System.out.println("arr[" + step + "] == " + (step * step));
                }
            }
        }
        ).start();
        one.start();
    }

    public static void main(String[] args) {
        //first test
        SomeThread one = new SomeThread();
        SomeThread two = new SomeThread();
        one.start();
        two.start();

        //second test
        _secondTest();

        //third test
        _thirdTest();
    }
}
