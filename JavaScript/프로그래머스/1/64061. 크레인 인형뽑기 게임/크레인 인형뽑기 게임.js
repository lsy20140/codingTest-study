function solution(board, moves) {
    let answer = 0
    const bucket = []
    const newBoard = getNewBoard(board)
    
    for(let move of moves){
        const cur = newBoard[move-1] 
        const idx = cur.findIndex((v) => v !== 0)
        if(idx === -1) continue
        
        const item = cur[idx]
        newBoard[move-1][idx] = 0
        
        if(!bucket) bucket.push(item)
        else{
            if(bucket[bucket.length - 1] === item){
                bucket.pop()
                answer+=2
            }else bucket.push(item)
        }
    }
    return answer
}

function getNewBoard(board){
    const N = board.length
    const result = new Array(N).fill(0).map(() => new Array(N))
    for(let i = 0 ; i < N ; i ++){
        for(let j = 0 ; j < N ; j++){
            result[j][i] = board[i][j]
        }
    }
    return result
}