L = int(input())
str = input()

dict = {}
sum = 0

for i in range(L):
  dict[str[i]] = ord(str[i]) - 96

for i in range(L):
  sum+=dict[str[i]]*(31**i)

if sum >= 1234567891:
  sum = sum / 1234567891
  print(sum)
else:
  print(sum)