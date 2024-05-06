import sys

n = int(sys.stdin.readline())
nums = [int(sys.stdin.readline()) for _ in range(n)]

nums.sort()

dic = dict()
answer = 0

for i in nums:
  if i in dic:
    dic[i]+=1
  else:
    dic[i] = 1


max_num = max(dic.values())
temp = []
for i in dic:
  if len(temp) == 2:
    break
  if max_num == dic[i]:
    temp.append(i)

temp.sort()

if len(temp) > 1:
  answer = temp[1]
else:
  answer = temp[0]

print(round(sum(nums)/n))
print(nums[(n-1) // 2])
print(answer)
print(nums[-1] - nums[0])

