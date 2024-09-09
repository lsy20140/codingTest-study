import sys

N, r, c = map(int, sys.stdin.readline().split()) # r: 행, c: 열
start = 0

while N > 1:
  mid = 2**(N-1)

  if r < mid and c >= mid: # 1사분면
    start += mid**2
    c -= mid
  elif r < mid and c < mid: # 2사분면
    pass
  elif r >= mid and c < mid: #3 사분면
    start += mid**2*2
    r -= mid
  elif r >= mid and c >= mid: # 4사분면
    start += mid**2*3
    r -= mid
    c -= mid

  N-=1
  
if r == 0:
  if c == 0:
    print(start)
  elif c == 1:
    print(start+1)
elif r == 1:
  if c == 0:
    print(start+2)
  elif c == 1:
    print(start+3)
