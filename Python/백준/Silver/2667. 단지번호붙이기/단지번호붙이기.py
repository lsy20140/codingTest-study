import sys
from collections import deque

N = int(sys.stdin.readline())

visited = [[0 for _ in range(N)] for _ in range(N)]
board = [list(map(int, sys.stdin.readline().rstrip())) for _ in range(N)]
count_list = []

dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]

def bfs(y, x):
  count = 1
  visited[y][x] = 1
  queue = deque()
  queue.append((y, x))

  while len(queue) > 0:
    cur_y, cur_x = queue.popleft()

    for i in range(4):
      nx = cur_x + dx[i]
      ny = cur_y + dy[i]

      if 0 <= nx < N and 0 <= ny < N and visited[ny][nx] == 0:
        visited[ny][nx] = 1
        if board[ny][nx] == 1:
          queue.append((ny, nx))
          count+=1
  return count


for y in range(N):
  for x in range(N):
    if visited[y][x] == 0 and board[y][x] == 1:
      count_list.append(bfs(y, x))

count_list.sort()

print(len(count_list))
print(*count_list, sep='\n')