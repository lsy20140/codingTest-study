import sys

N = int(sys.stdin.readline())
points = list(map(int, sys.stdin.readline().split()))

sorted_points = sorted(list(set(points)))

count_dict = dict()

for i in range(len(sorted_points)):
  count_dict[sorted_points[i]] = i

for i in points:
  print(count_dict[i],end=" ")