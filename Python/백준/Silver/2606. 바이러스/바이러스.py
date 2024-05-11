import sys

input = sys.stdin.readline

N = int(input())
M = int(input())

graph = [[] for _ in range(N+1)]

for _ in range(M):
  a, b = map(int, input().split())

  graph[a].append(b)
  graph[b].append(a)

visited = [0] * (N+1)
visited[1] = 1
cnt = 0

def dfs(i):
  global cnt
  stack = [i]

  while stack:
    node = stack.pop()
    for node in graph[node]:
      if visited[node] == 0:
        visited[node] = 1
        stack.append(node)
        cnt+=1
  return cnt

print(dfs(1))