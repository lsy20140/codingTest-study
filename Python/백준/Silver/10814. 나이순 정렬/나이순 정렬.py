n = int(input())
list = []

for i in range(n):
  age, name = input().split()
  list.append([age, name])

list.sort(key=lambda x: int(x[0]))

for el in list:
  print(int(el[0]), el[1])