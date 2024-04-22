s = input()
alpha = [-1]*26

for i in range(len(s)):
  ascii = ord(s[i])
  idx = ascii-97
  if alpha[idx] == -1:
    alpha[idx] = i

print(' '.join(str(s) for s in alpha))