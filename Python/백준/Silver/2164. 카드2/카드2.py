from collections import deque

n = int(input())

list = [i+1 for i in range(n)]

list = deque(list)

while len(list) > 1 :
  list.popleft()
  temp = list.popleft()
  list.append(temp)

print(list[0])