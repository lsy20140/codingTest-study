function solution(arrayA, arrayB) {
    let a_gcd = arrayA[0]
    let b_gcd = arrayB[0]
    let answer = 0
    
    for(let i = 1 ; i < arrayA.length ; i++){
        a_gcd = getGCD(arrayA[i], a_gcd)
        b_gcd = getGCD(arrayB[i], b_gcd)
    }
    
    const a = arrayA.every((el) => el % b_gcd !== 0)
    const b = arrayB.every((el) => el % a_gcd !== 0)
    
    if(!a && !b){
        answer = 0
    }else{
        answer = Math.max(a_gcd, b_gcd)
    }
    
    return answer
}

function getGCD(a, b){
    let remain = a % b
    
    return b === 0 ? a : getGCD(b, remain)
}