function solution(progresses, speeds) {
    let workDaysArr = []
    let result = []
    
    for(let i = 0 ; i < progresses.length ; i ++) {
        let workDays = Math.ceil((100-progresses[i])/speeds[i])
        workDaysArr.push(workDays)
    }
    let startIdx = 0
    let count = 1
    for(let i = startIdx+1 ; i < workDaysArr.length ; i++) {
        if(workDaysArr[i] <= workDaysArr[startIdx]){
            count++
        }else{
            result.push(count)
            count=1
            startIdx = i
        }
        if(i === workDaysArr.length-1) {
            result.push(count)
        }
    }
    return result
}