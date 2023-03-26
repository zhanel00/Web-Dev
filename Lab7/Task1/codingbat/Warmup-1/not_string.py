def not_string(str):
  if 'not' not in str[0:3]:
    return 'not ' + str
  else:
    return str