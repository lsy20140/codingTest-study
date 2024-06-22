function solution(weights) {
    let answer = 0
    const ratio = [1, 3/2, 4/3, 2]
    const map = new Map()

    weights.sort((a,b) => b-a).forEach((weight) => {
        ratio.forEach((el) => {
            answer+= (map.get(weight*el) || 0)
        })
        map.set(weight, (map.get(weight) || 0) + 1)
    })
    
    return answer
}