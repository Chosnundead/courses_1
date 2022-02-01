package ja9;

public class Ja9 {

    public static void main(String[] args) {
        Computer MyLaptop = new Computer();
        MyLaptop._stat();
        MyLaptop.processor._start();
        MyLaptop.rAM._start();
        MyLaptop._stat();

        new Computer() {
            public void _forceStart() {
                this.processor._start();
                this.rAM._start();
                this._stat();
            }
        }._forceStart();
    }
}
