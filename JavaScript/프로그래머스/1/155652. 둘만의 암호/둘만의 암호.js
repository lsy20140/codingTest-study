function solution(s, skip, index) {
    let result = ''
    
    for(let i = 0 ; i < s.length ; i++){
        let cur = s[i]
        result+=convertFunc(cur, skip, index)
    }
    return result
}

function convertFunc(char, skip, index){
    const alpha = ['a','b','c','d','e','f','g',
                   'h','i','j','k','l','m','n',
                   'o','p','q','r','s','t','u',
                   'v','w', 'x','y','z']
    let idx = alpha.indexOf(char)
    let cnt = 0
    const skipArr = [...skip]

    while(1){
        if(cnt === index){
            break
        }
        if(idx === 25){
            idx = 0
            char = 'a'
        }else{
            char = alpha[++idx]
        }
        if(!skipArr.includes(char)){
            cnt++
        }
    }

    return char
}