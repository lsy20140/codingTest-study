from itertools import combinations

n, k = map(int, input().split())
nums = []

for i in range(1,n+1):
  nums.append(i)

print(len(list(combinations(nums, k))))