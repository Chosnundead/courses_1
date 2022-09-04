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