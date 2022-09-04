# Декораторная функции(изменяемые) 1 способ
# def test(func):
#     def warp():
#         print("===")
#         func()
#         print("===")
#     return warp
# # =====================
# def words():
#     print("HW!")
# # =====================
# tested = test(words)
# tested()
# Декораторная функции(изменяемые) 2 способ
def test(func):
    def warp():
        print("===")
        func()
        print("===")
    return warp
# =====================
@test # Тут имя декораторной функции
def words():
    print("HW!")
# =====================
words()