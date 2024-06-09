function solution(prices) {
    let result = []
    
    for(let i = 0 ; i < prices.length ; i++){
        let temp = 0
        if(i === prices.length - 1){
            result[i] = 0
        }
        for(let j = i+1 ; j < prices.length ; j++){
            temp++
            if(prices[i] > prices[j]){
                break
            }
        }
        result[i] = temp
    }
    return result
}