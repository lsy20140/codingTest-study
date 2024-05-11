import sys
from itertools import product

input = sys.stdin.readline

T = int(input())

for _ in range(T):
  num = int(input())
  cnt = 0

  for i in range(1, num+1):
    data = product([1,2,3], repeat=i)
    for i in data:
      if sum(i) == num:
        cnt+=1
  
  print(cnt)