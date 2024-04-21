n = int(input())
str = input()
str = list(str)
answer = 0

for i in range(n):
  answer+=int(str[i])

print(answer)