function solution(diffs, times, limit) {    
    const len = diffs.length
    
    let [left, right] = [1, 1]
    diffs.forEach((v) => {
        if(right < v) right = v
    })
    let mid = Math.floor((left+right) / 2)
    
    while(left<=right){
        if(isCompleted(diffs, times, limit, mid)){
            right = mid-1
            mid = Math.floor((left+right) / 2)
        }else{
            left = mid+1
            mid = Math.floor((left+right) / 2)
        }
    }
    return mid+1
}

function isCompleted(diffs, times, limit, level){
    // 숙련도 level일 때
    const len = diffs.length
    let time = 0
    for(let i = 0 ; i < len ; i++){
        if(level < diffs[i]){
            const wrongCount = diffs[i] - level
            if(i === 0) time+=times[i]*wrongCount
            else{
                time+=(times[i]+times[i-1])*wrongCount
            }  
        }
        time+=times[i]
        if(time > limit) return false
    }   
    return true
}