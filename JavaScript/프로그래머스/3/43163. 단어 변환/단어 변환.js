function solution(begin, target, words) {
    let queue = [[begin, 0]]
    let visited = [begin]
    let answer = 0
    
    while(queue.length > 0) {
        const [word, cnt] = queue.shift()
        
        if(word === target){
            answer = cnt
        }
        
        for(let i = 0 ; i < words.length ; i++) {
            if(!visited.includes(words[i]) && checkConvert(word, words[i])){
                visited.push(words[i])
                queue.push([words[i], cnt+1])
            }
        }
    }
    return answer
}
    
function checkConvert(word1, word2){
    let cnt = 0
    for(let i = 0 ; i < word1.length ; i++){
        if(word1[i] !== word2[i]){
            cnt++
        }
    }
    return cnt === 1
}