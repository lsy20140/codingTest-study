function solution(land) {
    let lastCol = 0
    
    for(let i = 0 ; i < land.length-1 ; i++){
        for(let j = 0 ; j < 4 ; j++){
            let max = 0
            for(let k = 0 ; k < 4 ; k++){
                if(j === k) continue
                else{
                    max = Math.max(max, land[i+1][j] + land[i][k])
                }
            }
            land[i+1][j] = max
        }
    }
    const last = land.pop()
    return Math.max(...last)
}