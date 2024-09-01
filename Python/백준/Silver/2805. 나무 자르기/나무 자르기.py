import sys

N, M = map(int, sys.stdin.readline().split())
height_list = list(map(int, sys.stdin.readline().split()))

height_list.sort()
left, right= 1, height_list[-1]

def get_total(current):
  result = 0
  for i in height_list:
    if current < i:
      result+=i-current

  return result

while left <= right :
  mid = (left+right) // 2
  total = get_total(mid)

  if total >= M:
    left = mid+1
  else:
    right = mid-1
  
print(right)  