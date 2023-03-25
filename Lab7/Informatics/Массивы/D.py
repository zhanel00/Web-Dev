n = int(input())

l = list(map(int, input().split()))

cnt = 0
prev = l[0]

for i in l[1:]:
    if i > prev:
        cnt += 1
    prev = i

print(cnt)