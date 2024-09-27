import sys

N, M = map(int, sys.stdin.readline().split()) # 캠퍼스 크기 N(세로) X M(가로)

campus = [list(map(str, sys.stdin.readline().strip())) for _ in range(N)]

myPos = [0,0]
count = 0

# 도연이 위치 
for i in range(N):
  for j in range(M):
    if campus[i][j] == 'I':
      myPos = [i,j]

dirX = [1, -1, 0, 0]
dirY = [0, 0, 1, -1]

visited = [[0 for _ in range(M)] for _ in range(N)]
queue = [myPos]

while len(queue) > 0:
  [y, x] = queue.pop()
  
  for i in range(4):
    moveX = x+dirX[i]
    moveY = y+dirY[i]

    if 0 <= moveX < M and 0 <= moveY < N and visited[moveY][moveX] == 0:
      cur = campus[moveY][moveX]
      if cur == 'O':
        queue.append([moveY, moveX])
      elif cur == 'P':
        count+=1
        queue.append([moveY, moveX])
      visited[moveY][moveX] = 1

if count == 0:
  print("TT")
else:
  print(count)