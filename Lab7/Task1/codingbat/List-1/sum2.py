def sum2(nums):
  if len(nums) < 2:
    return sum(nums)
  else:
    return sum(nums[0:2])