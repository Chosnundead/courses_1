# def permutations(s):
#     numbers = len(s)
#     arrNumbers = [ i for i in range(1, len(s) + 1) ]
#     arrOfNumbers = []
#     arrOfLetters = list(s)
#     arr = []
#     for i in range(1 * 10**(numbers - 1),1 * 10**numbers):
#         isNumber = False
#         for item in arrNumbers:
#             if str(item) in str(i):
#                 isNumber = True
#             else:
#                 isNumber = False
#                 break
#         if isNumber:
#             arrOfNumbers.append(i)
#     for i in arrOfNumbers:
#         string = ""
#         for j in range(numbers):
#             strokai = str(i)
#             string += s[int(strokai[j]) - 1]
#         arr.append(string)
#     for i in arr.copy():
#         if arr.count(i) > 1:
#             arr.remove(i)
#     return arr

# def powR(n, p):
#     return n * powR(n, p - 1) if p != 0 else 1
# print(powR(2, 2))

# def test(n, k):
#     pos = -1
#     arr = [i + 1 for i in range(n)]
#     for i in range(len(arr) - 1):
#         pos += k
#         if pos > len(arr) - 1:
#             pos = (pos + 1) % len(arr) - 1
#         arr.pop(pos)
#     return arr[0]

# print(test(9, 3))
# print(1)

# nums = {1,2,3,4,1,1}
# print(nums)

# import itertools
# for i in itertools.count(8):
#     if i == 21:
#         break
#     print(i)

# import itertools
# nums = list(itertools.accumulate(range(8)))
# print(nums)
# letters = ["A", "B", "C"]
# print(list(itertools.product(letters, range(2))))
# print(list(itertools.permutations(letters)))

# def fib(n):
#     if n == 0:
#         return 0
#     if n == 1:
#         return 1
#     return fib(n-2) + fib(n-1)

# [print(fib(i)) for i in range(5)]

class Pizza:
    def __init__(self, tomato):
        self.tomato = tomato
        self._isGood = False
    
    @property
    def isGood(self):
        # return self.isGood
        # return self._isGood
        pass

    # @isGood.getter
    # def getIsGood(s):
    #     return s._isGood

    @isGood.setter
    def isGood(self, value):
        self._isGood = value

myPizza = Pizza("da")
print(myPizza._isGood)
myPizza._isGood = True
# myPizza.setIsGood(True)
print(myPizza._isGood)