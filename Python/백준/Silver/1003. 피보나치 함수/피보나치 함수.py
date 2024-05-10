import sys

T = int(sys.stdin.readline())

fibo = []
fibo.append([1,0])
fibo.append([0,1])

nums = [int(sys.stdin.readline()) for _ in range(T)]

max_num = max(nums)

for i in range(2, max_num+1):
  fibo.append([fibo[i-1][0]+fibo[i-2][0], fibo[i-1][1]+fibo[i-2][1]])

for i in nums:
  print(fibo[i][0], fibo[i][1])