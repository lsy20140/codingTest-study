import sys

n = int(sys.stdin.readline())

result = []

for _ in range(n):
  com = sys.stdin.readline()
  if 'push' in com:
    i = com.split(" ")[1]
    i = int(i)
    result.append(i)
  elif "pop" in com:    
    print(result.pop(0) if result else -1)
  elif "size" in com:
    print(len(result))
  elif "empty" in com:
    print(0 if result else 1)
  elif "front" in com:
    print(result[0] if result else -1)
  elif "back" in com:
    print(result[-1] if result else -1)

