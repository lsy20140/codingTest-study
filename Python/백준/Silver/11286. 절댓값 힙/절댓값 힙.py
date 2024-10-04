import sys
import heapq

N = int(sys.stdin.readline())

min_heap = []
max_heap = []

for _ in range(N):
  x = int(sys.stdin.readline())
  if x < 0:
    heapq.heappush(max_heap, -x)
  elif x > 0:
    heapq.heappush(min_heap, x)
  else:
    # x 0인 경우
    if min_heap and max_heap:
      if min_heap[0] < max_heap[0]:
        print(heapq.heappop(min_heap))
      else:
        print(-heapq.heappop(max_heap))
    elif min_heap and not max_heap:
      print(heapq.heappop(min_heap))
    elif not min_heap and max_heap:
      print(-heapq.heappop(max_heap))
    else:
      print(0)