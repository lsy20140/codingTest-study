n = int(input())
result = []

for _ in range(n):
  str = input()
  result.append(str)

result = list(set(result))
result.sort(key=lambda x: x)
result.sort(key=lambda x: len(x))

for str in result:
  print(str)