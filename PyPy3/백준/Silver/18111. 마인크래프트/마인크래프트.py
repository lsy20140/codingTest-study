import sys

N, M, B = map(int, sys.stdin.readline().split()) # B는 인벤토리 개수
area = []
for _ in range(N):
  area.extend(map(int, sys.stdin.readline().split()))

time = [0 for _ in range(257)]
height = 0

for h in range(257):
  block = B

  for i in area:
    if i == h:
      continue
    # 인벤토리에서 가져와서 더 쌓아야 함
    if h > i:
      block -= h-i
      time[h] += h-i
    # 블록 빼서 인벤토리에 저장
    else:
      block += i-h
      time[h] += 2*(i-h)
    
  if block >= 0 and time[h] <= time[height]:
    height = h

print(time[height], height)