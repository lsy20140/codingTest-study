import sys
from collections import deque

N, K = map(int, sys.stdin.readline().split())

visited = [0 for _ in range(100001)]

def bfs(n):
  queue = deque([n])
  
  while queue:
    cur = queue.popleft()
    if cur == K:
      return visited[cur]
    for i in (cur-1, cur+1, cur*2):
      if 0<=i<=100000 and not visited[i]:
        visited[i] = visited[cur]+1
        queue.append(i)

print(bfs(N))