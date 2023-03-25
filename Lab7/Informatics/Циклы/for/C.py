from cmath import sqrt


a = int(input())
b = int(input())

for i in range(a, b + 1):
    temp = round(i**0.5)
    if temp**2 == i:
        print(i, end = ' ')
