import sys

N = int(sys.stdin.readline())

timeline = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]
timeline.sort(key=lambda x: (x[1], x[0]))

count = 0
start, end = 0, 0

for i in timeline:
  if end <= i[0]:
    count+=1
    end = i[1]

print(count)