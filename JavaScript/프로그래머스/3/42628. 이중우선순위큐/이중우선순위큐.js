function solution(operations) {
    let queue = []
    
    for(let i = 0 ; i < operations.length ; i++) {
        let [com, num] = operations[i].split(" ")
        num = parseInt(num)
        if(com === 'I'){
            queue.push(num)
        }else if(com === "D"){
            if(num === 1){
                let max = Math.max(...queue)
                queue.splice(queue.indexOf(max), 1)
            }else if(num === -1){
                let min = Math.min(...queue)
                queue.splice(queue.indexOf(min), 1)
            }
        }
    }
    
    return queue.length > 0 ? [Math.max(...queue), Math.min(...queue)] : [0,0]
}
