import sys
sys.setrecursionlimit(10**6)
  
input = sys.stdin.readline

T = int(input())

dirX = [1, -1, 0, 0]
dirY = [0, 0, -1, 1] 


def dfs(x, y):
  for i in range(4):
    moveX = x+dirX[i]
    moveY = y+dirY[i]

    if( 0 <= moveX < M) and( 0 <= moveY < N) and farm[moveY][moveX] == 1:
      farm[moveY][moveX] = -1
      dfs(moveX, moveY)


for _ in range(T):
  M, N, K = map(int, input().split())

  farm = [[0 for _ in range(M)] for _ in range(N)]
  count = 0
  visited = []

  for _ in range(K):
    X, Y = map(int, input().split())
    farm[Y][X] = 1

  for i in range(M):
    for j in range(N):
      if farm[j][i] == 1:
        dfs(i, j)
        count+=1

  print(count)
