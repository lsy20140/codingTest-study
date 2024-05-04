t = int(input())
result = []

for i in range(t):
  n = int(input())
  if n == 0:
    result.pop()
  else:
    result.append(n)

print(sum(result))