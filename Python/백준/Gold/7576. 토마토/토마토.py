import sys
from collections import deque

M, N = map(int, sys.stdin.readline().split()) # N: 행, M: 열

storage = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]

dir = [(1, 0), (0, 1), (0, -1), (-1, 0)]
init_count = 0
count = 0
days = 0

queue = deque()
visited = [[False for _ in range(M)] for _ in range(N)]

for i in range(N):
  for j in range(M):
    if storage[i][j] == 1:
      queue.append((j, i))
      visited[i][j] = True
    if storage[i][j] == 0:
      init_count+=1

while queue:
  for _ in range(len(queue)):
    cur = queue.popleft()
    x, y = cur[0], cur[1]

    for i in range(4):
      move_x, move_y = x + dir[i][0], y + dir[i][1]

      if 0 <= move_x < M and 0 <= move_y < N and visited[move_y][move_x] == False:
        if storage[move_y][move_x] == 0:
          storage[move_y][move_x] = 1          
          queue.append((move_x, move_y))
          count+=1
        visited[move_y][move_x] = True

  if not queue:
    continue
  days+=1


if init_count == count:
  print(days)
else:
  print(-1)