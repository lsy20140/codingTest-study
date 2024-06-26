function solution(rows, columns, queries) {
    // 회전할 때마다 테두리 중 가장 작은 숫자
    let matrix = initMatrix(rows, columns)
    // 마지막 query에서는 beforeRotate 값 확인
    let answer = []
    for(let i = 0 ; i < queries.length ; i++){
        let target = beforeRotate(queries[i], matrix)
        if(i === queries.length -1){
            answer.push(Math.min(...target))
            break
        }
        const lastEl= target.splice(target.length - 1)
        target = [...lastEl, ...target]
        matrix = updateRotate(target, matrix, queries[i])
        answer.push(Math.min(...target))
    }
    
    return answer
}

function updateRotate(target, matrix, query) {
    const [x1, y1, x2, y2] = query
    const dirX = [1, 0, -1, 0]
    const dirY = [0, 1, 0, -1]
    let dirIdx = 0
    let [x,y] = [x1,y1]
    
    for(let i = 0 ; i < target.length ; i++){
        matrix[x][y] = target[i]
        x = x+dirY[dirIdx]
        y = y+dirX[dirIdx]
        
        if((x === x1 && y === y2) || 
           (x === x2 && y === y2) || 
           (x === x2 && y === y1)){
            dirIdx++
        }
    }
    return matrix
}


// 회전 시킬 대상 배열에 시계 방향으로 저장
function beforeRotate(query, matrix){
    // 회전 하기 전 x1, y1 기준으로 시계방향 테두리 따라서 배열에 저장
    const [x1, y1, x2, y2] = query
    let arr = []
    const dirX = [1, 0, -1, 0]
    const dirY = [0, 1, 0, -1]
    let dirIdx = 0
    let [x,y] = [x1, y1]

    while(arr.length < 2*((x2-x1) + (y2-y1))){
        arr.push(matrix[x][y])
        x = x+dirY[dirIdx]
        y = y+dirX[dirIdx]
        
        if((x === x1 && y === y2) || 
           (x === x2 && y === y2) || 
           (x === x2 && y === y1)){
            dirIdx++
        }
    }
    return arr
}






function initMatrix(rows, columns){
    let matrix = Array.from(Array(rows+1), () => Array(columns+1).fill(0))
    let num = 1
    
    for(let i = 1 ; i < rows+1 ; i++){
        for(let j = 1 ; j < columns + 1 ; j++){
            matrix[i][j] = num++
        }
    }
    
    return matrix
}