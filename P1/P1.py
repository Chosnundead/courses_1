#whatToDo = input("Введите что хотите сделать(+, -, /, *):");

#number1 = float(input("Первое число: "));
#number2 = float(input("Второе число: "));

#if(whatToDo == "+"):
#    print(round(number1 + number2));
#elif(whatToDo == "-"):
#    print(round(number1 - number2));
#elif(whatToDo == "/"):
#    print(round(number1 / number2));
#elif(whatToDo == "*"):
#    print(round(number1 * number2));
#else:
#    print("Вы ввели неверные данные!");

#input();


#from pyowm.utils import config
#from pyowm.utils import timestamps

import pyowm

from pyowm import OWM

owm = OWM("620701463d2191b0fb78b6236815d63e");
mgr = owm.weather_manager();

place = input("Введите город: ");

get = mgr.weather_at_place(place);
result = get.weather;

temp = result.temperature("celsius")["temp"];

print("В городе {0} сейчас {1} градусов по цельсию!".format(place, str(temp)));

if temp > 20:
    print("Очень жарко!");
elif temp > 10:
    print("Тело!");
elif temp == 0:
    print("Абсолютный ноль!");
elif temp < -20:
    print("Очень холодно!");
else:
    print("Прохладно!");

input();

