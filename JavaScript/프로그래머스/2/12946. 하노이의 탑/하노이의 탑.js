function solution(n) {
    var answer = []
    
    function hanoi(n, start, target, temp){
        if(n === 1){
            answer.push([start, target])
            return
        }
        hanoi(n-1, start, temp, target)
        answer.push([start, target])
        hanoi(n-1, temp, target, start)
    }
    hanoi(n, 1, 3, 2)
    
    return answer
}