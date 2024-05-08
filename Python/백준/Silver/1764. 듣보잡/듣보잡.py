import sys

N, M = map(int, sys.stdin.readline().split())
hear = set()
see = set()

for i in range(N+M):
  name = str(sys.stdin.readline().strip())
  if i < N:
    hear.add(name)
  elif N <= i <N+M:
    see.add(name)

result = list(hear.intersection(see))
result.sort()

print(len(result))
print(*result, sep='\n')