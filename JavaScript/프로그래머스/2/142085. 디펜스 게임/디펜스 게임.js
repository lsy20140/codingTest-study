function solution(n, k, enemy) {
    class MinHeap {
        constructor(){
            this.heap = [null]
        }
        
        size(){
            return this.heap.length - 1
        }
        
        getMin(){
            return this.heap[1] ? this.heap[1] : null
        }
        
        swap(a, b){
            [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]
        }
        
        push(value){
            this.heap.push(value)
            let curIdx = this.heap.length - 1
            let parIdx = Math.floor(curIdx/2)
            
            while(curIdx > 1 && this.heap[curIdx] < this.heap[parIdx]){
                this.swap(curIdx, parIdx)
                curIdx = parIdx
                parIdx = Math.floor(curIdx / 2)
            }
        }
        
        pop(){
            const min = this.heap[1]
            
            if(this.heap.length <= 2) this.heap [null]
            else this.heap[1] = this.heap.pop()
            
            let curIdx = 1
            let leftIdx = curIdx * 2
            let rightIdx = curIdx * 2 + 1
            
            if(!this.heap[leftIdx]) return min
            if(!this.heap[rightIdx]){
                if(this.heap[curIdx] > this.heap[leftIdx]){
                    this.swap(leftIdx, curIdx)
                }
                return min
            }
            
            while(this.heap[leftIdx] < this.heap[curIdx] || this.heap[rightIdx] < this.heap[curIdx]){
                let minIdx = this.heap[leftIdx] > this.heap[rightIdx] ? rightIdx : leftIdx
                this.swap(minIdx, curIdx)
                curIdx = minIdx
                leftIdx = curIdx * 2
                rightIdx = curIdx * 2 + 1
            }
            return min
        }
        
    }
    
    let heap = new MinHeap()
    enemy.slice(0, k).forEach((v) => heap.push(v))
    
    for(let i = k ; i < enemy.length ; i++){
        heap.push(enemy[i])
        const min = heap.pop()
        
        if(n >= min){
            n -= min 
        }else{
            return i
        }
        
    }
    return enemy.length
}