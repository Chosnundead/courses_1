package ja9;

public class Computer {

    class Processor {

        private boolean isStart = false;

        public void _start() {
            this.isStart = true;
        }

        public void _shutDown() {
            this.isStart = false;
        }
    }

    class RAM {

        private boolean isStart = false;

        public void _start() {
            this.isStart = true;
        }

        public void _shutDown() {
            this.isStart = false;
        }
    }

    Processor processor = new Processor();
    RAM rAM = new RAM();

    public void _stat() {
        System.out.println("\nProcessor: " + processor.isStart + ";\n" + "RAM: " + rAM.isStart + ".\n");
    }
}
