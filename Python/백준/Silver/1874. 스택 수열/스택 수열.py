n= int(input())
stack = []
cur = 1 
list = [int(input()) for _ in range(n)]
idx = 0
result = []

for _ in range(n*2):
  if len(stack) == 0:
    stack.append(cur)
    result.append("+")
    cur+=1
  elif stack[-1] < list[idx]:
    stack.append(cur)
    result.append("+")
    cur+=1
    
  elif stack[-1] == list[idx]:
    stack.pop()
    result.append("-")
    idx+=1

if stack:
  print("NO")
else:
  print(*result, sep='\n')