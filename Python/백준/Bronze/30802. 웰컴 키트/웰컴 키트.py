import math

N = int(input())
countList = list(map(int, input().split()))
T,P = map(int, input().split())

totalShirtCount, penGroupCount, penCount = 0,0,0

for i in countList:
  totalShirtCount+=math.ceil(i/T)

penGroupCount, penCount = divmod(N, P)

print(totalShirtCount)
print(penGroupCount, penCount)