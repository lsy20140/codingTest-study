function solution(maps) {
    let result = []
    const dirX = [1, 0, -1, 0]
    const dirY = [0, -1, 0, 1]
    
    let visited = Array.from(Array(maps.length), () => Array(maps[0].length).fill(0))
    
    for(let i = 0 ; i < maps.length ; i++){
        for(let j = 0 ; j < maps[0].length ; j++){
            if(maps[i][j] === "X"){
                visited[i][j] = 1
                continue
            }else{
                if(!visited[i][j]){
                    let total = Number(maps[i][j])
                    let queue = [[i, j]]
                    visited[i][j] = 1

                    while(queue.length > 0){
                        const cur = queue.shift()                        
                        
                        for(let i = 0 ; i < 4 ; i++){
                            let moveX = cur[1] + dirX[i]
                            let moveY = cur[0] + dirY[i]
                            
                            if(moveX >=0 && moveX <= maps[0].length-1 && 
                               moveY >= 0 && moveY <= maps.length-1 ){
                                if(visited[moveY][moveX] === 1 || maps[moveY][moveX] === "X"){
                                    
                                    continue
                                }else{
                                    queue.push([moveY, moveX])
                                    visited[moveY][moveX] = 1
                                    total+=Number(maps[moveY][moveX])
                                }

                            }

                        }
                    }
                    result.push(total)
                }
            }
            
        }   
    }
    return result.length ? result.sort((a,b) => a-b) : [-1]
}