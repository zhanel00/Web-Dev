def front_times(str, n):
  if len(str) < 3:
    front = str[0:]
  else:
    front = str[0:3]
  return front * n