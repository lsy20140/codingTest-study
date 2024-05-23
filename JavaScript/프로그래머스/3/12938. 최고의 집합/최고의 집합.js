function solution(n, s) {
    let answer = []
    
    if(s < n){
        return [-1]
    }
    
    while(n > 0){
        let temp = Math.floor(s / n)
        answer.push(temp)
        s = s - temp
        n--
    }
    return answer
}
