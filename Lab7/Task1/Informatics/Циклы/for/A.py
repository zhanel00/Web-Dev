start = int(input())
end = int(input())

if start % 2:
    start += 1

for i in range(start, end + 1, 2):
    print(i, end = ' ')