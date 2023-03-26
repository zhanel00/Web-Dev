def lone_sum(a, b, c):
  sum = 0
  if a == b or a == c:
    if b == c:
      return 0
    else:
      return c if a == b else b
  elif b == c:
    return a
  else:
    return a + b + c