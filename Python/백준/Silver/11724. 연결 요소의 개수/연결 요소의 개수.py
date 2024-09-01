import sys
sys.setrecursionlimit(10 ** 6)

N, M = map(int, sys.stdin.readline().split())

# 배열 채우기 N+1, N+1
graph = [[0 for j in range(N+1)] for i in range(N+1)]

for i in range(M):
  a, b = map(int, sys.stdin.readline().split())
  graph[a][b] = 1
  graph[b][a] = 1


visited = []
count = 0

def dfs(cur):
  visited.append(cur)

  for i in range(1, N+1):
    if i not in visited and graph[cur][i] == 1:
      dfs(i)

for i in range(1, N+1):
  if i not in visited:
    dfs(i)
    count+=1

print(count)