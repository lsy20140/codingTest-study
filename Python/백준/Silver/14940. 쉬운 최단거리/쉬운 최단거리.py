import sys
from collections import deque

n, m = map(int, sys.stdin.readline().split())

board = [list(map(int, sys.stdin.readline().split())) for _ in range(n)]
visited = [[False]*m for _ in range(n)]
distance = [[0]*m for _ in range(n)]

direction = [(0, 1), (0, -1), (1, 0), (-1, 0)]

for i in range(n):
  for j in range(m):
    if board[i][j] == 2:
      visited[i][j] = True
      queue = deque([(i, j)])

while queue:
  y, x = queue.popleft()

  for dy, dx in direction:
    move_y, move_x = y+dy, x+dx

    if 0 <= move_x < m and 0 <= move_y < n and visited[move_y][move_x] == False and board[move_y][move_x] == 1:
      queue.append((move_y, move_x))
      visited[move_y][move_x] = True
      distance[move_y][move_x] = distance[y][x] + 1


for i in range(n):
  for j in range(m):
    if board[i][j] == 0:
      distance[i][j] = 0
    else:
      if visited[i][j] == False:
        distance[i][j] = -1


for i in range(n):
  for j in range(m):
    print(distance[i][j], end=" ")
  print()