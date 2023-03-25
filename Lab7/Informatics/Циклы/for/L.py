bi = input()

dec = 0

for i in range(len(bi) - 1, -1, -1):
    dec += (2**i * int(bi[len(bi) - i - 1]))
print(dec)