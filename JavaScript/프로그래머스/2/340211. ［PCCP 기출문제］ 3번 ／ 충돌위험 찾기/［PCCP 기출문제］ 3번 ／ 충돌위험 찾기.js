function solution(points, routes) {
    const countMap = new Map()
    
    for(const route of routes){
        let time = 0
        let [r, c] = points[route[0]-1]
        recordPath(time, r, c)
        
        for(let i = 1 ; i < route.length ; i++){
            const idx = route[i]-1
            const [nr, nc] = points[idx]
            
            // r좌표 먼저
            while(r !== nr){
                time++
                if(r > nr) r--
                else r++
                recordPath(time, r, c)
            }
            
            while(c !== nc){
                time++
                if(c > nc) c--
                else c++
                recordPath(time, r, c)
            }
        } 
    }
    
    return [...countMap].filter((v) => v[1] > 1).length
    
    // time(초) 마다 좌표 위치 기록
    function recordPath(time, r, c){
        const str = `${time} ${r} ${c}`
        if(countMap.has(str)){
            countMap.set(str, countMap.get(str)+1)
        }else{
            countMap.set(str, 1)
        }
    }
}