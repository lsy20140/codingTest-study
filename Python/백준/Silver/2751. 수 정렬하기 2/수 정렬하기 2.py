import sys

n = int(sys.stdin.readline())
list = []

for _ in range(n):
  num = int(sys.stdin.readline())
  list.append(num)

list.sort()
print(*list, sep='\n')