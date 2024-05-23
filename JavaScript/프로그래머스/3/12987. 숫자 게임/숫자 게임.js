function solution(A, B) {
    A.sort((a,b) => b-a)
    B.sort((a,b) => b-a)
    
    let answer = 0, i = 0, j = 0
    
    while(i <= A.length){
        if(A[i] < B[j]){
            i++
            j++
            answer++
        }else{
           i++
        }
    }
   return answer
    
}