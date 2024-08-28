import sys
import heapq

N = int(sys.stdin.readline())

heap = []

for i in range(N):
  x = int(sys.stdin.readline())

  if x == 0:
    if len(heap) == 0:
      print(0)
    else:
      min = heapq.heappop(heap)
      print(min)
  else:
    heapq.heappush(heap, x)