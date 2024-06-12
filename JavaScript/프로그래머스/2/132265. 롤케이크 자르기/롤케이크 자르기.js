function solution(topping) {
    const count = new Map()
    const brother = new Set()
    let result = 0
    
    topping.forEach((v) => {
        if(count.has(v)){
            count.set(v, count.get(v)+1)
        }else{
            count.set(v, 1)
        }
    })
    
    topping.forEach((v) =>{
        let cnt = count.get(v) - 1
        brother.add(v)
        
        if(cnt === 0){
            count.delete(v)
        }else{
            count.set(v, cnt)
        }
        if(brother.size === count.size){
            result++
        }
    })
    
    return result
}