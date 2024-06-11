function solution(name, yearning, photo) {
    let score = new Map()
    let result = []
    
    for(let i = 0 ; i < name.length ; i++){
        score.set(name[i], yearning[i])
    }
    
    for(const p of photo){
        let temp = 0
        for(const person of p){
            if(score.has(person)){
                temp+=score.get(person)
            }
            
        }
        result.push(temp)
    }
    return result
}