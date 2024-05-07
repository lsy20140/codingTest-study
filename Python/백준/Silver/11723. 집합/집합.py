import sys

n = int(sys.stdin.readline())
S = set()

for _ in range(n):
  command = list(sys.stdin.readline().split())
  
  text = command[0]
  if len(command) > 1:
    num = int(command[1])

  if text == "add":
    S.add(num)
  elif text == "remove":
    if num in S:
      S.remove(num)
  elif text == "check":
    print(1 if num in S else 0)
  elif text == "toggle":
    if num in S:
      S.remove(num)
    else:
      S.add(num)
  elif text == "all":
    S = set([i for i in range(1, 21)])
  elif text == "empty":
    S = set()

