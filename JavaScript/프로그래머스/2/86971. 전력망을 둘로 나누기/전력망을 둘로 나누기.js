function solution(n, wires) {
    let answer = 100
    let tree = Array.from(Array(n+1), () => [])
    
    wires.forEach((wire) => {
        const [a,b] = wire
        tree[a].push(b)
        tree[b].push(a)
    })
    
    function bfs(start, exclude){
        const visited = Array.from({length: n+1}, () => false)
        let count = 0
        let queue = [start]
        visited[start] = true
        
        while(queue.length !== 0){
            let cur = queue.shift()
            tree[cur].forEach((el) => {
                if(el !== exclude && visited[el] === false){
                    queue.push(el)
                    visited[el] = true
                }
            })
            count++
        }
        return count  
    }
    
    wires.forEach((wire) => {
        let [a, b] = wire
        answer = Math.min(answer, Math.abs(bfs(a,b) - bfs(b,a)))
    })
    return answer
}