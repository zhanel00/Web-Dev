def double_char(str):
  for i in range(0, len(str) * 2, 2):
    str = str[0:i] + str[i] + str[i:]
  return str