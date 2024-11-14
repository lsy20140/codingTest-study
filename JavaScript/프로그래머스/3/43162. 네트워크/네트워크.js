function solution(n, computers) {
    let visited = new Array(n).fill(0)
    let count = 0
    
    for(let i = 0 ; i < n ; i++){
        if(visited[i]) continue
        dfs(i)
        count++
    }
    
    function dfs(cur){
        visited[cur] = 1
        for(let i = 0 ; i < n ; i++){
            if(computers[cur][i] === 1 && !visited[i]){
                dfs(i)
            }
        }
    }
    return count
}