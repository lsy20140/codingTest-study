function solution(record) {
    let answer = []
    let map = new Map()
    
    for(let i = 0 ; i < record.length ; i++){
        const [type, userId, nickname] = record[i].split(" ")
        if(type === "Enter"){
            map.set(userId, nickname)
            answer.push([userId,"님이 들어왔습니다."])
        }else if(type === "Leave"){
            
            answer.push([userId, "님이 나갔습니다."])
        }else if(type === "Change"){
            map.set(userId, nickname)
        }
    }
    answer = answer.map((v) => {
        v[0] = map.get(v[0])
        return v.join("")
    })
    
    return answer
}