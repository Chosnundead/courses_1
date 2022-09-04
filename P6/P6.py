from random import randint
import time, numpy

def _test(arr):
    startTime = time.time()
    for item in arr:
        item *= item
    print("time:", time.time() - startTime)
    pass

def _anotherTest(arr):
    startTime = time.time()

    newArr = []
    for item in arr:
        newArr.append(numpy.divide(1, item))

    print("time:", time.time() - startTime)
    pass

arrOfNumpy = numpy.array(range(1000000), float)
arrOfList = []
for index in range(1000000):
    arrOfList.append(float(index))

print("Numpy:")
_test(arrOfNumpy)

print("List:")
_test(arrOfList)

arrOfNumpy = numpy.random.randint(1, 100, size=1000000)
arrOfList = []
for index in range(1000000):
    arrOfList.append(randint(1, 100))

print("List:")
_anotherTest(arrOfList)

print("Numpy:")
_anotherTest(arrOfNumpy)

def _sumTestOfList(arr):
    startTime = time.time()

    result = 0
    for index in range(len(arr)):
        result += arr[index]

    print("time:", time.time() - startTime)
    pass

def _sumTestOfNumpy(arr):
    startTime = time.time()

    arr.sum()

    print("time:", time.time() - startTime)
    pass

print("List:")
_sumTestOfList(arrOfList)

print("Numpy:")
_sumTestOfNumpy(arrOfNumpy)