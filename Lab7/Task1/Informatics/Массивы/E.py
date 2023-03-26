n = int(input())

l = list(map(int, input().split()))

prev = l[0]
pos = (l[0] > 0)

for i in l[1:]:
    if pos and i > 0 or (not pos and i < 0):
        print('YES')
        break
    else:
        pos = (i > 0)
else:
    print('NO')
