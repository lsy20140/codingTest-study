import sys

input = sys.stdin.readline

T = int(input())

P = [0 for _ in range(101)]
P[0] = 1
P[1] = 1
P[2] = 1


for i in range(3, 101):
  P[i] = P[i-2] + P[i-3]

for _ in range(T):
  n = int(input())
  print(P[n-1])
    