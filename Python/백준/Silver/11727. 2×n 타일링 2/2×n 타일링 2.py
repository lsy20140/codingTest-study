n = int(input())

dp = [0 for _ in range(1001)]

dp[1] = 1

for i in range(2, 1001):
  if i % 2 == 0:
    dp[i] = (dp[i-1] * 2 + 1) % 10007
  else:
    dp[i] = (dp[i-1] * 2 -1) % 10007

print(dp[n])