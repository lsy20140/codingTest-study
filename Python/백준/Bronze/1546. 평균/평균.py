n = int(input())
scores = list(map(int, input().split()))
max_score = max(scores)

score_sum = sum(scores)

print(score_sum / max_score*100 / len(scores))