function solution(w, h) {
    const gcd = getGCD(w, h)
    const [nx, ny] = [w/gcd, h/gcd]
    
    const uncut = (nx-1)*(ny-1)
    
    return w*h - (nx*ny - uncut)*gcd   
}

function getGCD(num1, num2){
    let gcd = 1
    
    for(let i = 2 ; i <= Math.min(num1, num2) ; i++){
        if(num1 % i === 0 && num2%i === 0){
            gcd = i
        }
    }
    return gcd
}