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

# class Pizza:
#     def __init__(self, tomato):
#         self.tomato = tomato
#         self._isGood = False

#     @property
#     def isGood(self):
#         # return self.isGood
#         # return self._isGood
#         pass

#     # @isGood.getter
#     # def getIsGood(s):
#     #     return s._isGood

#     @isGood.setter
#     def isGood(self, value):
#         self._isGood = value

# myPizza = Pizza("da")
# print(myPizza._isGood)
# myPizza._isGood = True
# # myPizza.setIsGood(True)
# print(myPizza._isGood)

# Magic square:
# arr = [[8, 1, 6], [3, 5, 7], [4, 9, 2]]


# def isMagic(arr):
#     number = sum(arr[0])
#     for item in arr:
#         if sum(item) != number:
#             return False
#     for i in range(len(arr)):
#         temp = 0
#         for item in arr:
#             temp += item[i]
#         if number != temp:
#             return False
#     temp = [0, 0]
#     for i in range(len(arr)):
#         temp[0] += arr[i][i]
#         temp[1] += arr[i][len(arr) - 1 - i]
#     if temp[0] != number or temp[1] != number:
#         return False
#     return True


# print(isMagic(arr))

# Разделение списка на подсписки:
# from itertools import combinations as comb


# string = "a f z"


# def task(string):
#     arr = string.split(" ")
#     result = []
#     for i in range(len(arr) + 1):
#         result.extend(list(comb(arr, i)))
#     return result


# print(task(string))

# Ходы шахматного ферзя:
# from aifc import Error


# string = "c4"


# def drawTable(string):
#     line = "abcdefgh"
#     mask = {}
#     counter = 0
#     for letter in line:
#         mask[letter] = counter
#         counter += 1

#     table = [["." for i in range(8)] for i in range(8)]
#     qX = mask[string[0]]
#     qY = int(string[1])

#     # possible ways for queen
#     for i in range(8):
#         matrix = [[-1, 1, 0, 0, -1, 1, -1, 1], [0, 0, -1, 1, -1, -1, 1, 1]]
#         counter = 0
#         while True:
#             try:
#                 if qX + matrix[0][i] * counter < 0 or qY + matrix[1][i] * counter < 0:
#                     raise Error
#                 table[qX + matrix[0][i] * counter][qY + matrix[1][i] * counter] = "*"
#             except:
#                 break
#             finally:
#                 counter += 1

#     table[mask[string[0]]][int(string[1])] = "Q"
#     for arr in table:
#         for item in arr:
#             print("{}\t".format(item), end="")
#         print()


# drawTable(string)

# TelegramBot:

import telebot

bot = telebot.TeleBot("5655783257:AAGU6Mq_EAVMPTojKN8x2OnUjkCNHPMzzxI")


@bot.message_handler(content_types=["text", "document", "audio"])
def get_text_messages(message):
    if message.text == "Привет":
        bot.send_message(message.from_user.id, "Привет, чем я могу тебе помочь?")
    elif message.text == "/help":
        bot.send_message(message.from_user.id, "Напиши привет")
    else:
        bot.send_message(message.from_user.id, "Я тебя не понимаю. Напиши /help.")


bot.polling(none_stop=True, interval=0)
