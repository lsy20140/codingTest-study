import sys
INF = int(1e9)

N, M = map(int, sys.stdin.readline().split()) # N: 친구 수 , M: 친구 관계 수

graph = [[INF for _ in range(N+1)] for _ in range(N+1)]
count_list = [0 for _ in range(N+1)]
answer, num = INF, N

for _ in range(M):
  a, b = map(int, sys.stdin.readline().split())
  graph[a][b] = 1
  graph[b][a] = 1

for i in range(1, N+1):
  for j in range(1, N+1):
    if i == j:
      graph[i][j] = 0

for k in range(1, N+1):
  for i in range(1, N+1):
    for j in range(1, N+1):
      graph[i][j] = min(graph[i][j], graph[i][k]+graph[k][j])

for i in range(1, N+1):
  count_list[i] = sum(graph[i][1:])

for i in range(N, 0, -1):
  if count_list[i] <= answer :
    answer = count_list[i]
    num = i

print(num)