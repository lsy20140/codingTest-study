n, m = map(int, input().split())
board = []
result = []

for _ in range(n):
  line = input()
  board.append(line)

for i in range((n-8)+1):
  for j in range((m-8)+1):
    b_start = 0
    w_start = 0

    for a in range(i, i+8):
      for b in range(j, j+8):
        if (a+b) % 2 == 0:
          if board[a][b] != "B":
            b_start+=1
          elif board[a][b] != "W":
            w_start+=1
        else:
          if board[a][b] != "W":
            b_start+=1
          elif board[a][b] != "B":
            w_start+=1
    result.append(b_start)
    result.append(w_start)

print(min(result))
