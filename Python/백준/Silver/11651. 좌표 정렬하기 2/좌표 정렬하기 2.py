n = int(input())
points = []

for i in range(n):
  x, y = map(int, input().split())
  points.append([x,y])

points.sort(key=lambda p: p[0])
points.sort(key=lambda p: p[1])

for p in points:
  print(p[0], p[1])