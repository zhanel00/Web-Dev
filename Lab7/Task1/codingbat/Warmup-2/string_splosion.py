def string_splosion(str):
    res = ''
    for i in range(len(str)):
        res += str[0:i + 1]
    return res