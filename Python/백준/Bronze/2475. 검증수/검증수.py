num_list = list(map(int, input().split()))
answer = 0
for i in range(5):
  answer+=num_list[i]**2

print(answer%10)