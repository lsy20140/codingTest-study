function solution(k, score) {
    let rank = []
    let result = []
    
    for(let i = 0 ; i < score.length ; i++){
        if(rank.length < k) {
            rank.push(score[i])
        }else{
            let min = rank[0]
            if(score[i] > min){
                rank.shift()
                rank.push(score[i])
            }
        }
        rank.sort((a,b) => a-b)
        result.push(rank[0])
    }
    return result
}