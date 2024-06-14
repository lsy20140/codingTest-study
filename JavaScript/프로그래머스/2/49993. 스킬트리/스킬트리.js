function solution(skill, skill_trees) {
    let answer = 0 
    
    for(const tree of skill_trees){
        let order = [...skill]
        let isPossible = true
        for(const char of tree){
            if(!order.includes(char)){
                continue
            }else{
                if(order[0] === char){
                    order.shift()
                }else{
                    isPossible = false
                    break
                }
            }
        }
        if(isPossible){
            answer++
        }
    }
   return answer
}