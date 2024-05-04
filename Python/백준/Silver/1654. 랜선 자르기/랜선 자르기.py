import sys

K, N = map(int, input().split())
list = []

for _ in range(K):
  num = int(sys.stdin.readline())
  list.append(num)

start = 1
end = max(list)

while start <= end:
  mid = (start+end) //2
  count = 0

  for i in list:
    count += i//mid

  if count >= N:
    start = mid+1
  else:
    end = mid-1

print(end)
