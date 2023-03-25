def xor(x, y):
    if x != y:
        return True
    else:
        return False

x, y = map(int, input().split())

print(1 if xor(x, y) else 0)