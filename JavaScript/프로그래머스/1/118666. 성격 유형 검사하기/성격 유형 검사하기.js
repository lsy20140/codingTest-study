const TYPES = ["R", "T", "C", "F", "J", "M", "A", "N"]

function solution(survey, choices) {
    let scoreMap = new Map()
    
    for(let i = 0 ; i < 8 ; i ++){
        scoreMap.set(TYPES[i], 0)
    }
    for(let i=0 ; i < choices.length ; i++){
        const [agree, score] = getScore(choices[i])
        const [type1, type2] = [survey[i][0], survey[i][1]]
        const type = agree ? type2 : type1
        
        const cur = scoreMap.get(type)
        scoreMap.set(type, cur+score)
    }   
    return getFinalType(scoreMap)
}

function getFinalType(scoreMap){
    let result = ''
    for(let i = 0 ; i < TYPES.length ; i+=2){
        result+=getEachType(scoreMap, TYPES.slice(i, i+2))
    }
    return result
}

function getEachType(scoreMap, target){
    const [t1, t2] = target
    const [score1, score2] = [scoreMap.get(t1), scoreMap.get(t2)]
    if(score1 === score2) return t1
    return score1 > score2 ? t1 : t2
}

function getScore(choice){
    let agree = true
    let score = Math.abs(choice-4)
    
    if(choice < 4) agree = false
    
    return [agree, score]
}