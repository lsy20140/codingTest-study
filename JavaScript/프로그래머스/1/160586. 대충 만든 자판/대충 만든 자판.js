function solution(keymap, targets) {    
    let cnt = new Map()
    let result = []
    
    for(let i = 0 ; i < 26 ; i++){
        cnt.set(String.fromCharCode(i+65), -1)
    }
    
    for(const key of keymap){
        for(let i = 0 ; i < key.length ; i++){
            let temp = cnt.get(key[i])
            if(temp === -1){
                cnt.set(key[i], i+1)
            }else{
                cnt.set(key[i], Math.min(temp, i+1))
            }
        }
    }
    console.log("cnt", cnt)

    for(const target of targets){
        let count = 0
        for(const char of target){ 
            if(cnt.get(char) === -1){
                count = -1
                break
            }else{
                count+=cnt.get(char)
            }
        }
        result.push(count)
    }
    return result
}
