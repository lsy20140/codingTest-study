function solution(n) {    
    const nums = [1, 2, 4]
    let answer = ''
    
    while(n > 0){
        let idx = (n - 1) % 3
        n = Math.floor((n - 1) / 3)
        answer = nums[idx]+answer
    }
    return answer
}