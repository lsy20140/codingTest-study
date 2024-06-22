function solution(orders, course) {
    let result = []
    
    course.forEach((c) => {
        let cnt = {}
        let max = 0
        
        orders.forEach((order) => {
           const combinations = Combinations([...order], c)
           combinations.forEach((el) => {
               const menu = el.sort().join("")
               if(cnt[menu]){
                   cnt[menu]++
                   max = max > cnt[menu] ? max : cnt[menu]
               }else{
                   cnt[menu] = 1
               }
           })
        })    
        for(const [key, val] of Object.entries(cnt)){
            if(val === max){
                result.push(key)
            }
        }
    })
    return result.sort()
}

function Combinations(arr, n){
    let result = []
    
    if(n === 1){
        return arr.map((el) => [el])
    }
    
    arr.forEach((fixed, idx, origin) => {
        const res = origin.slice(idx+1)
        const combinations = Combinations(res, n-1)
        const attached = combinations.map((el) => [fixed, ...el])
        result.push(...attached)
    })
    
    return result
}