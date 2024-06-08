function solution(priorities, location) {
    let answer = 0
    
    while(priorities.length > 0){
        const max = Math.max(...priorities)
        const cur = priorities.shift()
        
        if(cur === max){
            answer++
            if(location === 0){
                break
            }
        }else{
            priorities.push(cur)
        }
        if(location === 0){
            location = priorities.length - 1
        }else{
            location-=1
        }
    }
    return answer
}