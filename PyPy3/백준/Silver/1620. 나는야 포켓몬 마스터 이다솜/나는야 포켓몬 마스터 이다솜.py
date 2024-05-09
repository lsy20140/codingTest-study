import sys

N, M = map(int, sys.stdin.readline().split())

pokemons = [sys.stdin.readline().strip() for _ in range(N)]
m_list = [sys.stdin.readline().strip() for _ in range(M)]

for i in m_list:
  if i.isdigit():
    print(pokemons[int(i)-1])
  else:
    print(pokemons.index(i)+1)