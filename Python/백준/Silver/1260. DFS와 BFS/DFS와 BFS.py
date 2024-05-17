import sys
from collections import deque

input = sys.stdin.readline

N, M, V = map(int, input().split())
dfsResult = []
bfsResult = []

graph = [[] for _ in range(N+1)]
visited = []

def dfs(V):
  visited.append(V)
  dfsResult.append(V)

  for i in graph[V]:
    if i not in visited:
      visited.append(i)
      dfs(i)


def bfs(V):
  q = deque()
  q.append(V)
  visited = [V]

  bfsResult.append(V)
  while q:
    x = q.popleft()

    for i in graph[x]:
      if i not in visited:
        q.append(i)
        visited.append(i)
        bfsResult.append(i)


for _ in range(M):
  a, b = map(int, input().split())

  graph[a].append(b)
  graph[b].append(a)

for g in graph:
  g.sort()


dfs(V)
bfs(V)

print(*dfsResult)
print(*bfsResult)
