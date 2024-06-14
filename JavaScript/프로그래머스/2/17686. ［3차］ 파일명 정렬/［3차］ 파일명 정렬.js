function solution(files) {
    let convert = []
    let regex = /[0-99999]/
    let answer = []
    
    for(let i = 0 ; i < files.length ; i++){
        let head = []
        let isHead = true
        let number = []
        let tail = []
        for(let j = 0 ; j < files[i].length ; j++){
            const cur = files[i][j]
            if(!regex.test(cur) && isHead){
                head.push(cur)
            }
            else if(regex.test(cur) && number.length < 5){
                number.push(cur)
                isHead = false
            }
            else if(number.length === 5 || (!regex.test(cur) && !isHead)){
                let temp = files[i].slice(j,)
                tail = [...temp]
                break
            }
        }
        convert.push([head.join(""), 
                      number.join(""), 
                      tail.join("")])
    }
    convert.sort((a,b) => Number(a[1]) - Number(b[1]))
    convert.sort((a,b) => {
        if(a[0].toLowerCase() < b[0].toLowerCase()){
            return -1
        }
        if(a[0].toLowerCase() > b[0].toLowerCase()){
            return 1
        }
    })
    convert.forEach((v) => {
        answer.push(v.join(""))
    })
    
    return answer
}