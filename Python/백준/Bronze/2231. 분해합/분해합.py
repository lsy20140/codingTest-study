n = int(input())

for i in range(1, n+1):
  nums = list(map(int, str(i)))
  temp = sum(nums) + i

  if temp == n:
    print(i)
    break
  if i == n:
      print(0)