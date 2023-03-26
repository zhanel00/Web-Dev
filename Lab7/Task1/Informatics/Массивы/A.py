n = int(input())

l = list(map(int, input().split()))

for i in l[0:n:2]:
    print(i, end = ' ')