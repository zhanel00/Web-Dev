def make_bricks(small, big, goal):
  if small + big * 5 < goal:
    return False
  if goal % 5 > small:
    return False
  return True