function solution(k, dungeons) {
    let answer = 0
    let visited = new Array(dungeons.length).fill(0)
    
    function dfs(cur, dep){
        for(let i = 0 ; i < dungeons.length ; i++){
            if(!visited[i] && dungeons[i][0]<= cur){
                visited[i] = 1
                dfs(cur-dungeons[i][1],dep+1)
                visited[i] = 0
            }
        }       
        answer = Math.max(answer, dep)
    }
    
    dfs(k, 0)
    
    return answer
}