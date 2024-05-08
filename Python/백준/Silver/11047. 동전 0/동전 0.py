import sys

N, K = map(int, sys.stdin.readline().split())

types = [int(sys.stdin.readline()) for _ in range(N)]

types.sort(reverse=True)
count = 0

for type in types:
  count += K // type
  K = K % type

print(count)