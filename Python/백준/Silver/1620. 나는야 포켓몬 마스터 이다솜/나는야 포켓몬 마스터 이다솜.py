import sys

N, M = map(int, sys.stdin.readline().split())

name = dict()
nums = dict()

for i in range(N):
  cur = sys.stdin.readline().strip()
  name[cur] = i+1
  nums[i+1] = cur

m_list = [sys.stdin.readline().strip() for _ in range(M)]

for i in m_list:
  if i.isdigit():
    print(nums[int(i)])
  else:
    print(name[i])