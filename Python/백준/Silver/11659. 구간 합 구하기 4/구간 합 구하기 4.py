import sys

input = sys.stdin.readline

N, M = map(int, input().strip().split())

nums = list(map(int, input().split()))

value = 0
prefix_sum = [0]

for i in nums:
  value += i
  prefix_sum.append(value)

for _ in range(M):
  i, j = map(int, input().split())

  print(prefix_sum[j] - prefix_sum[i-1])
