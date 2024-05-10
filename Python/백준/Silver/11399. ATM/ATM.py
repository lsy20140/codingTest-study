import sys

N = int(sys.stdin.readline())
line = list(map(int, sys.stdin.readline().strip().split()))
line.sort()

waiting = 0
result = 0

for i in line:
  waiting+=i
  result+=waiting

print(result)