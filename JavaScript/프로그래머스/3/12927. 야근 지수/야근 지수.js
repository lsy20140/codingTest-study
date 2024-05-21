function solution(n, works) {
    let result = 0
    works.sort((a,b) => b-a)
    
    while(n > 0){
        let max = works[0]
        if(max === 0){
            break
        }
        for(let i = 0 ; i < works.length ; i++){
            if(max <= works[i]){
                works[i]-=1
                n--

                if(n === 0) {
                    break
                }
            }
        }
        
    }
    
    result = works.reduce((acc, cur) => acc+cur**2, 0)
    
    return result
}