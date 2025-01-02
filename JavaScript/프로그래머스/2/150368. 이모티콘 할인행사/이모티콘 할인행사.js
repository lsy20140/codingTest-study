const PERCENTS = [10, 20, 30, 40]

function solution(users, emoticons) {
    let [maxCount, maxPrice] = [0,0]
    
    const permutations = getPermutations(emoticons.length, PERCENTS)
    
    for(const p of permutations){
        const [count, total] = getResult(p, emoticons, users)
        if(count > maxCount){
            maxCount = count
            maxPrice = total
        }else if(count === maxCount){
            maxPrice = Math.max(total, maxPrice)
        }
    }
    return [maxCount, maxPrice]
}

function getPermutations(n, percents){
    let permutations = []
    
    if(n === 1) return percents.map((p) => [p])
    
    percents.forEach((v, idx, arr) => {
        const fixed = v
        const rest = arr
        const permutationsArr = getPermutations(n-1, rest)
        const combineFixed = permutationsArr.map((v) => [fixed, ...v])
        permutations.push(...combineFixed)
    })
    
    return permutations
}

function getResult(percents, emoticons, users){
    let [count, total] = [0, 0]
    
    for(let user of users){
        const [percent, price] = user
        let totalPrice = 0
        
        for(let i = 0 ; i < percents.length ; i++){
            if(percents[i] >= percent){
                totalPrice+=emoticons[i]*(1-percents[i]/100)
            }
        }
        if(totalPrice >= price) count++
        else total+=totalPrice
    }
    return [count, total]
}