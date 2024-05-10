import sys

N, M = map(int, sys.stdin.readline().split())

sitePwd = dict()

for _ in range(N):
  input = list(sys.stdin.readline().split())
  site, pwd = input[0], input[1]

  sitePwd[site] = pwd

find = []
for _ in range(M):
  find.append(sys.stdin.readline().strip())

for i in find:
  print(sitePwd[i])