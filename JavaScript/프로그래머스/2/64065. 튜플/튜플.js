function solution(s) {
    let result= []
    s=s.split("},")
    let newArr = []
    for(let i = 0 ; i <s.length ; i++){
        s[i] = s[i].replaceAll("{","")
        s[i] = s[i].replaceAll("}","")
        newArr.push(s[i])
    }
    
    newArr.sort((a,b) => a.split(',').length - b.split(',').length)
    
    newArr = newArr.map((el) => el.split(','))
    result.push(newArr[0][0])
    if(newArr.length === 1) {
        result = result.map((v) => Number(v))
        return result
    }
    for(let i = 1 ; i < newArr.length ; i++) {
        let el = ''
        el = newArr[i].filter((v) => !result.includes(v))[0]
        result.push(el)
    }
    result = result.map((v) => Number(v))

    return result
}
    
