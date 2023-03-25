x = int(input())

cnt = 2

if x == 1:
    print(1)
else:
    for i in range(2, int(x**0.5) + 1):
        if x % i == 0:
            cnt += 2 - int(i * i == x)
    print(int(cnt))