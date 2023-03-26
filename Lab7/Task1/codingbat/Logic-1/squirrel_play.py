def squirrel_play(temp, is_summer):
  if temp >= 60:
    if is_summer and temp <= 100 or not is_summer and temp <= 90:
      return True
    else:
      return False
  else:
    return False