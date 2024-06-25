function solution(n, k) {
    const answer = []
    let caseNum = factorial(n)
    let people = Array.from(Array(n), (_, i) => i+1)
    
    while(answer.length < n){
        caseNum /=people.length
        answer.push(...people.splice(Math.floor((k-1) / caseNum), 1))
        k = k%caseNum
    }
    
    return answer
}

function factorial(n){
    let result = 1
    
    for(let i = 2 ; i <= n ; i++){
        result*= i
    }
    return result
}