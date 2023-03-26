def sum67(nums):
  ok = True
  sum = 0
  for num in nums:
    if num == 6:
      ok = False
    if num == 7 and ok == False:
      ok = True
      continue
    if not ok:
      continue
    sum += num
  return sum