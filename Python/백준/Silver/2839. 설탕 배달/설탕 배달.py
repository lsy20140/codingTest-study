n = int(input())

temp = []

for i in range(n //5 + 1):
  for j in range(n //3 + 1):
    if 5*i + 3*j == n:
      temp.append(i+j)

print(min(temp) if temp else -1)