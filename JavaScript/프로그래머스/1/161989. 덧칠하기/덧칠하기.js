function solution(n, m, section) {
    let answer = 1
    let paintRange = [section[0], section[0]+m-1]
    
    while(section.length > 0){
        const [start, end] = paintRange
        const cur = section.shift()
        if(cur >= start && cur<=end){
            continue
        }else if(cur > end){
            answer++
            paintRange = [cur, cur+m-1]
        } 
    }
    return answer 
}