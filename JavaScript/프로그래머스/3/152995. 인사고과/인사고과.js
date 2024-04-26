function solution(scores) {
    let my_score = scores[0]
    let fail = 0
    
    for(let i = 1 ; i < scores.length ; i ++) {
        if(my_score[0] < scores[i][0] && my_score[1] < scores[i][1]){
            return -1
        }
    }
    
    const filtered = 
          scores.filter((score) => score[0] + score[1] > my_score[0] + my_score[1])
    let rank = filtered.length+1

    for(let i = 0 ; i < filtered.length ; i++){
        for(let j = 0 ; j < filtered.length ; j++) {
            if(filtered[i][0] < filtered[j][0] && filtered[i][1] < filtered[j][1]){
                fail++
                break
            }
        }
    }
    return rank-fail
}