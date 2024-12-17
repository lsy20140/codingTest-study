function solution(maps) {
    const [n, m] = [maps.length, maps[0].length]
    const [start, lever] = getStartLeverPos(maps, n, m)
    
    // start to lever
    const time1 = bfs(start, "L", maps, n, m)
    // lever to exit
    const time2 = bfs(lever, "E", maps, n, m)

    if(time1 === -1 || time2 === -1){
        return -1
    }
    return time1+time2
}

function bfs(start, target, maps, n, m){
    let dx = [1, 0, -1, 0]
    let dy = [0, 1, 0, -1]
    let visited = Array(n).fill().map(() => Array(m).fill(false))
    visited[start[0]][start[1]] = true
    let queue = []
    queue.push([...start, 0])
    
    while(queue.length > 0){
        const [y, x, cnt] = queue.shift()
        
        for(let i = 0 ; i<4 ; i++){
            const [nx, ny] = [x+dx[i], y+dy[i]]
            
            if(nx>=0 && nx<m && ny>=0 && ny<n && maps[ny][nx] !== "X" && !visited[ny][nx]){
                if(maps[ny][nx] === target){
                    return cnt+1 
                }
                visited[ny][nx] = true
                queue.push([ny, nx, cnt+1])
            }
        }
    }
    return -1
}

function getStartLeverPos(maps, n, m){
    let start = null
    let lever = null
    
    for(let i = 0 ; i < n ; i++){
        for(let j = 0 ; j < m ; j++){
            if(start && lever) break
            if(maps[i][j] === "S"){
                start = [i, j]
            }
            else if(maps[i][j] === "L"){
                lever = [i, j]
            }
        }
    }
    return [start, lever]
}