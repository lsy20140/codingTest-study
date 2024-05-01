def removeFunc(str):
  if "()" not in str:
    return str
  else:
    newStr = str.replace("()", "")
    return removeFunc(newStr)
  
n = int(input())


for _ in range(n):
  str = input()
  if removeFunc(str) == "":
    print("YES")
  else:
    print("NO")

