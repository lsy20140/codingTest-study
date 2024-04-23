function solution(a) {
    let answer =0
    let L = []
    let R = []
    let left_min = 1000000001
    let right_min = 1000000001
    
    for(let i = 0 ; i < a.length ; i++) {
        if(i===0 || i === a.length-1){
            answer+=1
        }
        if(i>0){
            left_min = Math.min(left_min, a[i-1])
            L.push(left_min)
        }
        if(i<a.length-1){
            right_min = Math.min(right_min, a[a.length-i-1])
            R.push(right_min)   
        }
    }
    
    for(let i = 1 ; i < a.length-1 ; i++) {
        if(!(L[i-1] < a[i] && R[R.length-i] <a[i])) answer++
    }
    return answer
}
