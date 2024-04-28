L = int(input())
str = input()

dict = {}
sum = 0
m = 1234567891

for i in range(L):
  dict[str[i]] = ord(str[i]) - 96

for i in range(L):
  sum+=dict[str[i]]*(31**i)

print(sum % m)