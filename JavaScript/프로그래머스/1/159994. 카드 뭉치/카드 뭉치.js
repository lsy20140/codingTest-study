function solution(cards1, cards2, goal) {
    let result = "Yes"
    goal.forEach((g) => {
        if(cards1.length && cards1[0] === g){
            cards1.splice(0,1)
        }else if(cards2.length &&cards2[0] === g){
            cards2.splice(0,1)
        }else{
            result = "No"
            return result
        }
    })
    
    return result
}