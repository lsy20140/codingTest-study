function solution(numbers, hand) {
    let answer = ""
    let [curLeft, curRight] = ["*", "#"]
    
    for(let num of numbers){
        if([1,4,7].includes(num)){
            answer+='L'
            curLeft = num
        }else if([3,6,9].includes(num)){
            answer+='R'
            curRight = num
        }else{
            if(getDistance(curLeft, num) < getDistance(curRight, num)){
                answer+="L"
                curLeft = num
            }else if(getDistance(curLeft, num) > getDistance(curRight, num)){
                answer+="R"
                curRight = num
            }else{
                answer+=hand[0].toUpperCase()
                if(hand === "left"){
                    curLeft = num
                }else if(hand === 'right'){
                    curRight = num
                }
            }
        }
    }
    return answer
}

function getDistance(cur, target){
    const valueMap = {0: 11, "*": 10, "#": 12}
    const [newCur, newTarget] = [
        valueMap[cur] || cur, 
        valueMap[target] || target
    ]
    const [quot1, remain1] = [Math.floor((newCur-1)/3), (newCur-1)%3]
    const [quot2, remain2] = [Math.floor((newTarget-1)/3), (newTarget-1)%3]
    
    return Math.abs(quot1-quot2)+Math.abs(remain1-remain2)
}