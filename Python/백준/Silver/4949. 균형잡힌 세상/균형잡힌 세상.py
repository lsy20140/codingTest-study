while True:
  str = input()
  if str == ".":
    break
  for i in str:
    if i == " " or i.isalpha() == True:
      str = str.replace(i, "")

  for i in range(len(str)):
    if "()" in str:
      str = str.replace("()","")
    if "[]" in str:
      str = str.replace("[]","")

  if str == ".":
    print("yes")
  else:
    print("no")