n = int(input())
result = []

for _ in range(n):
  point = list(map(int, input().split()))
  result.append(point)

result.sort(key=lambda x: x[1])
result.sort(key=lambda x: x[0])

for i in result:
  print(i[0], i[1])