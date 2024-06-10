function solution(msg) {
	let dic = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
              'M', 'N', 'O', 'P', 'Q', 'R','S', 'T', 'U', 'V', 'W', 'X','Y', 'Z']
    
    let stack = []
    let result = []
    
    for(let i = 0 ; i < msg.length ; i++){
        stack.push(msg[i])
        if(dic.includes(stack.join(""))) continue
        dic.push(stack.join(""))
        stack.pop()
        const idx = dic.indexOf(stack.join(""))+1
        result.push(idx)
        stack = []
        i--
    }
    const last = dic.indexOf(stack.join(""))+1
    result.push(last)
    
    return result
}