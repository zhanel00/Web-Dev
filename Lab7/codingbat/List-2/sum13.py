def sum13(nums):
  sum = 0
  ok = True
  for num in nums:
    if not ok:
      ok = True
      continue
    if num == 13:
      ok = False
      continue
    sum += num
  return sum