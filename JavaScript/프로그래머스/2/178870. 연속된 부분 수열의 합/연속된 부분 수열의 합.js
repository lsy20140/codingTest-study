function solution(sequence, k) {
    let left = 0, right = 0
    let sum = sequence[0]
    let arr = []
    let answer = []
    
    while(right < sequence.length){
        if(sum < k){
            sum+= sequence[++right]
        }else if(sum > k){    
            sum-=sequence[left++]
        }else if(sum === k){
            arr.push([left, right])
            sum+=sequence[++right]
        }
    }
    arr.sort((a, b) => {
        return a[0] - b[0]
    })
    arr.sort((a, b) => {
        if(a[1] - a[0] < b[1] - b[0]){
            return -1
        }else if(a[1] - a[0] > b[1] - b[0]){
            return 1
        }
    })
    return [arr[0][0], arr[0][1]]
}