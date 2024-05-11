import sys

input = sys.stdin.readline

T = int(input())

for _ in range(T):
  n = int(input())
  clothes = dict()
  count = 1 

  for _ in range(n):
    name, type = map(str, input().strip().split())
    
    if type in clothes:
      clothes[type] += [name]
    else:
      clothes[type] = [name]

  for i in clothes:
    count *= len(clothes[i])+1
  
  print(count-1)