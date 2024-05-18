str = input()

splited = str.strip().split("-")
temp = []
result = 0

for i in splited:
  cnt = 0
  for j in i.split("+"):
    cnt+=int(j)
  temp.append(cnt)

result = temp[0]

for i in temp[1:]:
  result-= i

print(result)