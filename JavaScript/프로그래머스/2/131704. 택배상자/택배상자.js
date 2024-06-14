function solution(order) {
    let count = 0
    let stack =[]
    
    for(let i = 1 ; i <= order.length ; i++ ){
        stack.push(i)
        
        while(stack.length !== 0 && stack.at(-1) === order[count]){
            count++
            stack.pop()
        }
    }
    return count
}