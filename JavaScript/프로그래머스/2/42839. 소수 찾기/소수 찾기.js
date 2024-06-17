function solution(numbers) {
    numbers = numbers.split("")
    let set = new Set()
    
    dfs(set, numbers, '')
    
    return set.size
}

function dfs(set, arr, fixed){
    for(let i = 0 ; i < arr.length ; i++){
        let newFixed = fixed+arr[i]
        let copyArr = [...arr]
        copyArr.splice(i, 1)
        
        if(isPrime(Number(newFixed))){
            set.add(Number(newFixed))
        }
        dfs(set, copyArr, newFixed )
    }
}

function isPrime(n){
    if(n === 0 || n === 1) return false
    for(let i = 2 ; i <= Math.floor(Math.sqrt(n)) ; i++){
        if(n % i === 0) return false
    }
    return true
}