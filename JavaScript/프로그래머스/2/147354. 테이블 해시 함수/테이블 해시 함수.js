function solution(data, col, row_begin, row_end) {
    let answer 
    // #1
    data.sort((a, b) => b[0]-a[0]) 
    data.sort((a,b) => a[col-1] - b[col-1])
    
    // #2
    for(let i = row_begin ; i <= row_end ; i++){
        let mod_sum = 0
        for(let j = 0 ; j < data[0].length ; j++){
            mod_sum += data[i-1][j] % i   
        }
        answer = answer ^ mod_sum
        
    }
    return answer
}