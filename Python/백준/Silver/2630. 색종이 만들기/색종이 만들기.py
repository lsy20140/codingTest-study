# 파란색 1, 흰색 0
N = int(input())

board = [list(map(int, input().split(" "))) for i in range(N)]
white, blue = 0,0

def is_same_color(arr):
  if not arr:
    return
  init = arr[0][0]
  for i in arr:
    for j in i:
      if j != init:
        return False
  
  return True

def slice_board(arr, area):
  result = []
  x1, y1, x2, y2 = map(int, area)
  for i in range(y1, y2):
    temp = []
    for j in range(x1, x2):
      temp.append(arr[i][j])
    result.append(temp)
  return result

    
def add_color_count(arr):
  global white, blue
  if arr[0][0] == 0:
    white+=1
  else:
    blue+=1

def dfs(arr, n):
  if not arr:
    return
  range_list = [[0,0,n/2, n/2], [n/2, n/2, n,n], [0,n/2,n/2, n], [n/2, 0, n, n/2]]
  range_list = [[int(value) for value in sublist] for sublist in range_list]

  if is_same_color(arr):
    add_color_count(arr)
  else:
    for area in range_list:
      dfs(slice_board(arr, area), n/2)

dfs(board, N)

print(white)
print(blue)