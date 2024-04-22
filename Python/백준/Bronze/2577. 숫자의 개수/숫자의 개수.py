a = int(input())
b = int(input())
c = int(input())

list = [0]*10

mul = str(a*b*c)

for i in range(len(mul)):
  n  = int(mul[i])
  list[n] +=1

for i in range(10):
  print(list[i])
