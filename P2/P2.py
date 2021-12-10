class Number:
    def __init__(self, name):
        numberInput = input("Введите ваше число{0}: ".format(name));
        self.number = int(numberInput);
        self.numberIn2 = bin(self.number);
        self.name = name;
    def print(self):
        self.numberIn2 = bin(self.number);
        print("Число{0} == {1}, с двоичным представлением {2};".format(self.name, self.number, self.numberIn2));

print("\tЗадание 1:\n");

numberA = Number("A");
numberB = Number("B");
#print("Число{0} == {1}, с двоичным представлением {2};".format(numberA.name, numberA.number, numberA.numberIn2));
#print("Число{0} == {1}, с двоичным представлением {2};".format(numberB.name, numberB.number, numberB.numberIn2));
numberA.print();
numberB.print();

tempForA = 0;
for i in range(0, 2):
    tempForA += (numberA.number & (1 << i));
numberA.number >>= 2;
copy = 0;
for i in range(0, 5):
    copy += (numberA.number & (1 << i));
numberA.number >>= 5;
numberA.number <<= 2;
numberA.number |= tempForA;
numberA.print();

tempForB = 0;
for i in range(0, 3):
    tempForB += (numberB.number & (1 << i));
numberB.number >>= 3;
numberB.number <<= 5;
numberB.number |= copy;
numberB.number <<= 3;
numberB.number |= tempForB;
numberB.print();

print("\n======666======\n");
print("\tЗадание 2:\n");

n = int(input("n == "));
p = int(input("p == "));
for i in range(p, (p + n)):
    numberA.number |= (1 << i);
numberA.print();

print("\n======666======\n");
input();