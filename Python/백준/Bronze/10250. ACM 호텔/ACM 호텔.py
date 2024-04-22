t = int(input())

for i in range(t):
  answer = 0
  h, w, n = list(map(int, input().split())) # h 층수(높이), w 가로, n 몇 번째 손님인가
  if n%h == 0:
    answer = h*100+n//h
  else:
    answer = n%h*100+n//h+1
  print(answer)
