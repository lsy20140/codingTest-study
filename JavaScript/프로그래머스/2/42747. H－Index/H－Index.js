function solution(citations) {
    const len = citations.length
    let [left, right] = [0, 0]
    
    citations.forEach((v) => {
        if(v > right) right = v
    })
    let mid = Math.floor((left+right) / 2)
    
    while(left <= right){
        const count = citations.filter((v) => v >= mid).length
        if(count >= mid){
            left = mid+1
            mid = Math.floor((left+right) / 2)
        }else{
            right = mid-1
            mid = Math.floor((left+right) / 2)
        }
    }
    
    return mid
}