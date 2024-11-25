function solution(genres, plays) {    
    const playList = []
    const len = genres.length
    const map= new Map()
    let answer = []
    
    for(let i = 0 ; i< len ; i++){
        let cur = map.get(genres[i])
        map.set(genres[i], !cur ? plays[i] : cur+plays[i])
    }
    
    for(let i = 0 ; i< len ; i++){
        let info = [i, plays[i], map.get(genres[i])]
        playList.push(info)
    }
    
    playList.sort((a, b) => b[1]-a[1])
    playList.sort((a,b) => b[2]-a[2])
    
    let [type, cnt] = [playList[0][2],1]
    answer.push(playList[0][0])
    
    for(let i = 1 ; i < len ; i++){
        const [idx, count, totalCount] = playList[i]
        
        if(totalCount !== type){
            type = totalCount
            cnt = 1
            answer.push(idx)
        }else{
            if(cnt < 2){
                answer.push(idx)
                cnt++    
            }else if(cnt === 2) continue
        }
    }
        
    return answer
}