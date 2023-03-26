def end_other(a, b):
  shorter = a
  longer = b
  if len(a) > len(b):
    shorter = b
    longer = a
  if shorter.lower() in longer.lower()[-len(shorter):]:
    return True
  return False