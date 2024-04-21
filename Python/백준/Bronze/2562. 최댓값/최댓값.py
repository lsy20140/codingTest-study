max=0
idx=0

for i in range(1,10):
  n = int(input())
  if n >max:
    idx=i
    max=n
  
print(max)
print(idx)