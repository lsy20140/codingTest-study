function solution(board) {
  let answer = 0
  
  if(board.length === 1 || board[0].length === 1) return 1

  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[0].length; j++) {
        if (board[i][j] === 0) continue

        const left = board[i][j - 1]
        const up = board[i - 1][j]
        const cross = board[i - 1][j - 1]

        const minNum = Math.min(left, up, cross) + 1
        board[i][j] = minNum
        answer = Math.max(answer, minNum)
    }
  }
  return answer ** 2
}