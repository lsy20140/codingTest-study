function solution(k, d) {
    // 반지름 d인 원 내부 점 구하기
    let answer = 0
    
    for(let i = 0 ; i <= d ; i+=k){
        let y = Math.sqrt(d**2-i**2)
        const temp = Math.floor(y/k) + 1
        answer+=temp
    }
    return answer
}