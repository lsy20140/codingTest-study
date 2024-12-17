function solution(s) {
    let answer = s.length
    
    for(let i = 1 ; i <= s.length / 2 ; i++){
        let count = 1
        let str = ''
        
        for(let j = 0 ; j < s.length ; j+=i){
            let cur = s.substr(j, i)
            let next = s.substr(j+i, i)
            
            if(cur === next) {
                count++
            }else{
                if(count > 1){
                    str+=count+cur
                }else{
                    str+=cur
                }
                count = 1
            }
        }
        answer = Math.min(answer, str.length)
    }
    return answer
}