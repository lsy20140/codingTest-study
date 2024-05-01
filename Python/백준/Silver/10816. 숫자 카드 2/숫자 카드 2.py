n = int(input())
n_nums = list(map(int, input().split()))
m = int(input())
m_nums = list(map(int, input().split()))

dict = {}
result= []

for i in n_nums:
  i = str(i)
  if i in dict:
    dict[i] = dict[i]+1
  else:
    dict[i] = 1
  
for i in m_nums:
  i = str(i)
  if i in dict:
    print(dict[i], end=" ")
  else:
    print(0, end=" ")
