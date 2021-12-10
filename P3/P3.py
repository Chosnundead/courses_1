import random;

def show(text, arr):
    print(text);
    for i in range(0, len(arr)):
        print("arr[{0}] == {1}".format(i, arr[i]));

random.seed();
size = int(input("Введите размер: "));
arr = [];

for i in range(0, size):
    arr.append(round(random.uniform(-10.0, 10.0), 1));

show("\n\tМассив до:\n", arr);

for i in range((len(arr) - 1), -1, -1):
    if ((i % 7) == 0):
        arr.pop(i);

for i in range((len(arr) - 1), -1, -1):
    if((i % 2) == 1):
        arr.insert((i + 1), 0);

show("\n\tМассив после:\n", arr);

input();