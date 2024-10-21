function solution(n, t, m, p) {
    let answer = ''
    let num = 0
    let turn = 0
    let cur = []
    
    while(answer.length < t){
        // 내 순서인 경우
        if(turn % m === p-1 ){
            if(cur.length > 0){
                const temp = cur.shift()
                answer+=temp
            }else{
                const newStr = num.toString(n)                
                if(newStr.length > 1){
                    answer += newStr[0]
                    cur = [...newStr.slice(1)]
                }else{
                    answer+=newStr
                }
                num++
            }
        }else{
            if(cur.length > 0){
                cur.shift()
            }else{
                const newStr = num.toString(n)
                if(newStr.length > 1){
                    cur = [...newStr.slice(1)]
                }
                num++
            }
        }
        turn++
    }
    return answer.toUpperCase()
}