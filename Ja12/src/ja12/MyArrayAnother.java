package ja12;

public class MyArrayAnother implements Array {

    public int arr[] = new int[50];
    public int size = 0;

    @Override
    public int _get(int index) {
        if (index < this.arr.length) {
            return this.arr[(this.size - index - 1)];
        } else {
            return this.arr[0];
        }
    }

    @Override
    public boolean _add(int value) {
        if (this.size != this.arr.length) {
            this.arr[this.size] = value;
            this.size++;
            return true;
        } else {
            return false;
        }
    }
}
