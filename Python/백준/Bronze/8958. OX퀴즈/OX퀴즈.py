t = int(input())

for i in range(t):
  answer = 0
  str = input()
  state = True
  cur = 1

  for i in range(len(str)):
    if str[i] == "O":
      if state == False:
        cur = 1
        state = True
      answer+=cur
      cur+=1
    else:
      cur=1
      state = False
      continue
  print(answer)
