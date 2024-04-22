def find_keys(dict, val) :
  return list(key for key, value in dict.items() if value == val)

s = input()

dict = {}
s=s.lower()
values = []

for i in range(len(s)):
  if s[i] in dict:
    dict[s[i]] +=1
  else:
    dict[s[i]] = 1

for val in dict.values():
  values.append(val)

freq = max(values)
keys = find_keys(dict, freq)
if len(keys) > 1 :
  print("?")
else:
  print(keys[0].upper())


