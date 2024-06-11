function solution(s) {
    let result = 0
    let stack = []
    let x = ''
    let x_cnt = 0
    
    while(s.length > 1){
        let temp = s.substring(0,1)
        if(x === ''){
            x = temp
        }
        s = s.substring(1,)
        stack.push(temp)
        if(x === temp){
            x_cnt++
        }
        
        if(x_cnt === stack.length - x_cnt){
            x = ''
            x_cnt = 0
            result++
            stack = []
        }
        
    }
    if(s.length){
        result++
    }
    return result
}