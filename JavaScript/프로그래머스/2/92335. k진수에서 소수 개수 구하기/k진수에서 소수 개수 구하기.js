function isPrime(n) {
    if(n === 1 || n === 0) return false
    if(n === 2) return true
    
    for(let i = 2 ; i <= Math.floor(Math.sqrt(n)) ; i++){
        if(n % i === 0){
            return false
        }
    }
    return true
}

function solution(n, k) {
    const convert = n.toString(k)
    const splited = convert.split("0").map(Number).filter((n) => isPrime(n))
    return splited.length    
}

