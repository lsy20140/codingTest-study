import sys

N = int(sys.stdin.readline())
M = int(sys.stdin.readline())
S = sys.stdin.readline()

size = 2*N+1
pos = 0
count = 0

def get_pn():
  pn = ['' for _ in range(size)]

  for i in range(size):
    if i%2 == 0:
      pn[i] = 'I'
    else:
      pn[i] = 'O'
  return ''.join(pn)

while pos <= M - size:
  if S[pos] == 'I':
    if S[pos:pos+size] == get_pn():
      pos +=2
      count+=1
      continue
  pos+=1

print(count)