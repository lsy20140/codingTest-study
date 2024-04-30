n = int(input())
n_nums = list(map(int, input().split()))
m = int(input())
m_nums = list(map(int, input().split()))

n_nums.sort()

for i in m_nums:
  lt, rt = 0, n-1
  isExist = 0
  while lt<=rt:
    mid= (lt+rt) // 2
    # 값 찾음
    if i == n_nums[mid]:
      isExist = 1
      print(1)
      break
    elif i > n_nums[mid]:
      lt = mid + 1
    else:
      rt = mid - 1
  if not isExist:
    print(0)
  

