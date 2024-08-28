import sys
import random

data = [sys.stdin.readline().strip() for i in range(3)]
num = 0

def getResult(num):
  result = []
  if num % 3 == 0 and num % 5 == 0:
    result.append('FizzBuzz')
  elif num % 3 == 0 and num % 5 != 0:
    result.append('Fizz')
  elif num % 3 != 0 and num % 5 == 0:
    result.append('Buzz')
  else:
    result.append(num)

  if len(result) == 1:
    return result[0]
  else:
    rand = random.randint(0,len(result)-1)
    return result[rand]

  

for i in range(0, len(data)):
  if data[i].isdigit():
    num = int(data[i])+len(data)-i
  else:
    continue

print(getResult(num))
