T = int(input())

for _ in range(T):
    k = int(input())
    n = int(input())
    nums = [[] for _ in range(15)]

    nums[0] = [i for i in range(15)]

    for i in range(1, 15):
      for _ in range(15):
        nums[i].append(0)

    for i in range(1, 15):
      for j in range(1,15):
        nums[i][j]=sum(nums[i - 1][1:j + 1])
        
    print(nums[k][n])