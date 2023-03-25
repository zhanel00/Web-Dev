def front_back(str):
  if len(str) <= 1:
    return str
  a, b = str[0], str[-1]
  str = b + str[1:-1] + a
  return str