function solution(board) {
    let new_board = []
    let start
    let answer = -1
    
    const row = board.length
    const col = board[0].length
    let visited = Array.from(Array(row), ()=> Array(col).fill(0))
    
    // board 저장 및 시작점 찾기
    for(let i = 0 ; i < board.length ; i++) {
        if(board[i].indexOf("R") !== -1){
            start = [i, board[i].indexOf("R"), 0]
        }
        new_board.push(board[i].split(""))
    }
    
    
    const dir_x = [0, 0, 1, -1]
    const dir_y = [1, -1, 0, 0]

    
    let queue = [start]
    
    while(queue.length > 0){
        const [y, x, cnt] = queue.shift()
    
        if(board[y][x] === "G"){
            answer = cnt
            break
        }
        
        for(let i = 0 ; i < 4 ; i++){
            let nx = x+dir_x[i]
            let ny = y+dir_y[i]
            
            while(nx >= 0 && nx < col && ny >=0 && ny < row && board[ny][nx] !== "D"){
                nx += dir_x[i]
                ny += dir_y[i]
            }
            nx -= dir_x[i]
            ny -= dir_y[i]
            
            if(!visited[ny][nx]){
                queue.push([ny, nx, cnt+1])
                visited[ny][nx] = 1
             }
        }
        
    }
    return answer
}