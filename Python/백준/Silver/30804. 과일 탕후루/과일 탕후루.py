import sys
from collections import defaultdict

N = int(sys.stdin.readline())
fruits = list(map(int,sys.stdin.readline().split()))

counts = defaultdict(int)


left, right, max_len = 0, 0, 0

while right < N:
  counts[fruits[right]] += 1

  while len(counts) > 2:
    counts[fruits[left]] -= 1

    if counts[fruits[left]] == 0:
      del counts[fruits[left]]
    left +=1
    
  max_len = max(max_len, right - left +1)
  right +=1

print(max_len)