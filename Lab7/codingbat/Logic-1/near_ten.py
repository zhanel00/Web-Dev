def near_ten(num):
  if num % 10 <= 2 or abs(num % 10 - 10) <= 2:
    return True
  else:
    return False