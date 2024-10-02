import sys
from collections import deque

N, M = map(int, sys.stdin.readline().split())
board = [list(map(int, sys.stdin.readline().rstrip())) for _ in range(N)]

dir_x = [1, -1, 0, 0]
dir_y = [0, 0, 1, -1]

# 방문 여부, count 저장
visited = [[0 for _ in range(M)] for _ in range(N)]
visited[0][0] = 1

def bfs(x, y):
  queue = deque()
  queue.append((y, x))
  while len(queue) > 0:
    y, x = queue.popleft()
    
    for i in range(4):
      move_y, move_x = y+dir_y[i], x+dir_x[i]

      if 0 <= move_x < M and 0 <= move_y < N and visited[move_y][move_x] == 0:
        if board[move_y][move_x] == 1:
          queue.append((move_y, move_x))
          visited[move_y][move_x] = visited[y][x] + 1
          
  return visited[N-1][M-1]
  
print(bfs(0, 0))