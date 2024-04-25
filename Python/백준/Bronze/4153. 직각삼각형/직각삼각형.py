while True:
  nums = list(map(int,input().split()))
  if nums[0] == 0 and nums[1] == 0 and nums[2] == 0:
    break
  max_num = max(nums)
  rest = []

  for i in range(3):
    if nums[i] == max_num:
      continue
    else:
      rest.append(nums[i])

  if rest[0]**2+rest[1]**2 == max_num**2:
    print("right")
  else:
    print("wrong")
