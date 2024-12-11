function solution(n, m, x, y, r, c, k) {
    const dx = [1, 0, 0, -1]
    const dy = [0, -1, 1, 0]
    const dirStr = ['d', 'l', 'r', 'u']
    

    if(getDistance(x, y, r, c) > k || k % 2 !== getDistance(x, y, r, c) % 2){
        return 'impossible'
    }
    
    let answer = ''
    while(k >0){
        for(let i = 0 ; i < 4 ; i++){
            let [nx, ny] = [x + dx[i], y+dy[i]]
            if(nx >= 1 && nx <= n && ny >= 1 && ny <= m){
                if(getDistance(nx, ny, r, c) <= k){
                    answer+=dirStr[i]
                    x = nx
                    y = ny
                    k--
                    break
                }
            }
        }
    }
    return answer
    
}

// 현재 위치에서 목표 위치까지의 거리
function getDistance(a, b, r, c) {
   return Math.abs(a-r) + Math.abs(b-c) 
}