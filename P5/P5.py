# number = int(input("number == "))

# if number > 0:
#     if number > 18:
#         print(">18")
#     else:
#         print(">0")
# elif number == 0:
#     print("==0")
# else:
#     print("else")


# for item in "HELLO":
#     print(item)


# index = 0
# while index < 10:
#     print(index)
#     index += 1


# arr = [23, 23, 23, 21, 's', "HELLO", [21, 23]]
# arr[0] = 2121
# arr.append("test")
# arr.remove(23)#Удалило только 1 значение
# arr.insert(2, 666)
# arr.append(arr.index(666))
# print(arr[2:-2:])
# print("len of arr:", len(arr))

# for item in arr:
#     print(item)


# a = (21, 23, "test")
# a[0] = 2#Нельзя переопределить
# print(a)

# const_arr = tuple ("Hello")
# print(const_arr)


# map_arr = {
#     "name" : "Denis",
#     "age" : 21
# }

# print(map_arr)

# map_arr_another = dict(name="Denis", age=21)

# print(map_arr_another)

# map_arr_another_another = dict.fromkeys (["a", "b", "c"], [21, 21])

# print(map_arr_another_another)


# set_arr = set("HELLO")
# set_arr_another = {21, 21, 23, 23}

# print(set_arr, set_arr_another, sep="\n")


# frozenset_arr = frozenset("Hello")#Тоесть значения менять нельзя

# print(frozenset_arr)


# def _print(string):
#     print(string)
#     pass

# _print("This is my print!")

# def _sum(number0, number1):
#     return(number0 + number1)

# print(_sum(1, 2))

# def _multi(*args):
#     result = 1
#     for item in args:
#         result *= item
#     return result

# print(_multi(1, 2, 3))


# _multi = lambda a, b: a * b

# print(_multi(2, 3))


# import math
# import random as r

# print(r.random())
# print(math.e)


# import test as t

# t._add(1, 2)


# from test import _add as a

# a(1, 9)


class Circle:
    name = None
    radius = None

    def __init__(self, name, radius):
        self.name = name
        self.radius = radius
        pass

    def print(self):
        print("Circle", self.name, "have", self.radius, "cm radius")
        pass

arr = []

arr.append(Circle("BigOne", 6))
    
arr[0].print()

class AnotherCircle(Circle):
    isAnother = True

    def print(self):
        print("Circle", self.name, "have", self.radius, "cm radius", "and it is", "another" if self.isAnother else "not another")
        pass


arr.append(AnotherCircle("AnotherCircle", 9))

arr[1].print()