function isPuddle(m, n, puddles){
    for(let k = 0 ; k < puddles.length ; k++){
        if(puddles[k][0]-1 === m && puddles[k][1]-1 === n){
          return true
        }
    }
  return false
}

function solution(m, n, puddles) {
  let dp = Array.from(Array(n), () => Array(m).fill(0))
  const MOD = 1_000_000_007
  
  dp[0][0] = 1
  for(let i = 0 ; i < n ; i++) {
    for(let j = 0 ; j < m ; j++){
      if(isPuddle(j, i, puddles)) continue
      if(i === 0 && j === 0) continue

      if(i === 0){
        dp[i][j] = dp[i][j-1]
      }else if(j === 0){
        dp[i][j] = dp[i-1][j]
      }else{
        dp[i][j] = ((i > 0 ? dp[i-1][j] : 0) + (j > 0 ? dp[i][j-1] : 0)) % MOD
      }
    }
  }
  return dp[n-1][m-1] 
}

