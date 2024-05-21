function solution(n, computers) {
    let result = 0
    let visited = []
    
    function dfs(i){      
        for(let j = 0 ; j < n ; j++){
            if(computers[i][j] === 1){
                if(i === j){
                    continue
                }else{
                    if(!visited.includes(j)){
                        visited.push(j)
                        dfs(j)
                    }

                }
            }
        }
    }

    for(let i = 0 ; i < n ; i++) {
        if(!visited.includes(i)){
            dfs(i)
            result+=1
        }
    }
    
    return result
}