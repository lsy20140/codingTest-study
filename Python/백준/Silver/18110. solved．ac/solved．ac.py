import sys

def roundFunc(v):
  if v - int(v) >= 0.5:
    return int(v)+1
  else:
    return int(v)

n = int(sys.stdin.readline())
list = []
if n == 0:
  print(0)
else:
  for _ in range(n):
    num = int(sys.stdin.readline())
    list.append(num)

  list.sort()
  count = roundFunc(n* 0.15)
  del list[0:count]
  del list[len(list)-count: len(list)]

  if len(list) == 0:
    print(0)
  else:
    result = roundFunc(sum(list) / len(list))
    print(result)
