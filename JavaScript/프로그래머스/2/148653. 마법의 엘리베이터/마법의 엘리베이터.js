function solution(storey) {
    let answer = Number.MAX_SAFE_INTEGER;
    
    function dfs(cnt, storey){
        if(cnt >= answer) return
        if(storey === 0 ){
            answer = cnt
        }else{
            let num = storey%10
            console.log(storey, num)
            dfs(cnt+num, Math.floor(storey/10))
            dfs(cnt+10-num, Math.floor(storey/10)+1)
            
        }
    }
    
    dfs(0, storey)
    return answer
}