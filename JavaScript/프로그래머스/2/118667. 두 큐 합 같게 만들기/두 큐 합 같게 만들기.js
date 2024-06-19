function solution(queue1, queue2) {
    let answer = 0 
    let sumQ1 = sum(queue1)
    let sumQ2 = sum(queue2)
    const len = queue1.length + queue2.length
    let q1Index = 0, q2Index = 0
    
    while(sumQ1 !== sumQ2){
        if(sumQ1 > sumQ2){
            sumQ1 -= queue1[q1Index]
            queue2.push(queue1[q1Index])
            sumQ2+= queue1[q1Index++]
        }else{
            sumQ2 -= queue2[q2Index]
            queue1.push(queue2[q2Index])
            sumQ1+= queue2[q2Index++]
        }
        answer++
        
        if(q1Index > len || q2Index > len){
            answer = -1
            break
        }
    }
    return answer
}

function sum(arr){
    return arr.reduce((acc, cur) => {return acc+cur}, 0)
}