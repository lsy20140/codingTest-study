function solution(n, s, a, b, fares) {

    let dp = new Array(n+1).fill().map(_ => new Array(n+1).fill(Infinity))
    for(let i = 1 ; i < n+1 ; i++) {
        dp[i][i] = 0
    }
    for(let i = 0 ; i < fares.length ; i ++){
        const [a,b, cost] = fares[i]
        dp[a][b] = cost
        dp[b][a] = cost
    }
    // 합승 안 하고 각자 집 바로 가는 경우로 answer 초기화
    let answer =  dp[s][a]+dp[s][b]
        
    for(let k = 1 ; k < n+1 ; k++){
        for(let i = 1 ; i < n+1 ; i++) {
            for(let j = 1 ; j < n+1 ; j++) {
                if(dp[i][j] >dp[i][k] + dp[j][k]){
                    dp[i][j] = dp[i][k] + dp[j][k]
                }
            }
        }    
    }

    
    // 합승 지점 i
    for(let i = 1 ; i < n+1 ; i++) {
        let temp = dp[s][i] + dp[i][a]+dp[i][b]
        answer = Math.min(temp, answer)
    }
    return answer    
}

