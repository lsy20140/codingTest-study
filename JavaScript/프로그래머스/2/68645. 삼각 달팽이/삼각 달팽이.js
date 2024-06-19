function solution(n) {
    let answer = []
    let arr = Array.from({length: n}, () => Array(n).fill(0))

    const dir = [[1, 0], [0, 1], [-1, -1]]
    let idx = 0
    let x = 0,  y = 0
    let num = 1
    
    while(1){
        arr[y][x] = num++
        const [nx, ny] = [x+dir[idx][1], y+dir[idx][0]]
        
        if(nx >= 0 && nx < n && ny >= 0 && ny < n && arr[ny][nx] === 0){
            [x, y] = [nx, ny]
            continue
        }
        
        idx = (idx+1) % 3
        x+=dir[idx][1]
        y+=dir[idx][0]
        
        if(x >= 0 && x < n && y >= 0 && y < n && arr[y][x] === 0){
            continue
        }
        break        
    }

    arr.forEach((v) => {
        v.forEach((el) => {
            if(el) answer.push(el)
        })
    })
    return answer
}