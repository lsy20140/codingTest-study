list = list(map(int, input().split()))
answer = 'ascending'
if list[0] == 8:
  answer = 'descending'
  list.reverse()

for i in range(8):
  if list[i] != i+1:
    answer = 'mixed'
    break

print(answer)
