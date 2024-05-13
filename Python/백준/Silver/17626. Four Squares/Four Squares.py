from itertools import combinations_with_replacement

n = int(input())

with_one=[i**2 for i in range(1, int(n**(1/2))+1)]
with_two =[sum(j) for j in combinations_with_replacement(with_one, 2)]

def resultFunc(n):
  if n in with_one:
    return 1
  elif n in with_two:
    return 2
  else:
    for k in with_one:
      if n-k in with_two:
        return 3

  return 4

print(resultFunc(n))