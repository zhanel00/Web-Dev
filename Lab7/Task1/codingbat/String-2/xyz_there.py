def xyz_there(str):
  index = str.find('xyz')
  if index == 0:
    return True
  if index == -1:
    return False
  if str[index - 1] != '.':
    return True
  return xyz_there(str[index + 3:])