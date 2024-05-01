from collections import deque
import sys

n = int(sys.stdin.readline())

d = deque([])

for _ in range(n):
  com = sys.stdin.readline()
  if 'push_front' in com:
    i = com.split(" ")[1]
    i = int(i)
    d.appendleft(i)
  elif "push_back" in com:    
    i = com.split(" ")[1]
    i = int(i)
    d.append(i)
  elif "pop_front" in com:
    print(d.popleft() if d else -1)
  elif "pop_back" in com:
    print(d.pop() if d else -1)
  elif "size" in com:
    print(len(d))
  elif "empty" in com:
    print(0 if d else 1)
  elif "front" in com:
    print(d[0] if d else -1)
  elif "back" in com:
    print(d[-1] if d else -1)
