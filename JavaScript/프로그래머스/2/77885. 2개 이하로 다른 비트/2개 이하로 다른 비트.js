function solution(numbers) {
    return numbers.map((n, i) => {
        let binary = n.toString(2)
        
        if(binary[binary.length-1] === '0'){
            return n+1
        }else{
            if(binary.lastIndexOf('0') === -1){
                binary = "0"+binary
            }
            const idx = binary.lastIndexOf('01')
            return parseInt(binary.substring(0, idx)+'10'+binary.substring(idx+2, ),2)
        }
    })
}