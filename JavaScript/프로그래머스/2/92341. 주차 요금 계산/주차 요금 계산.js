//~14:03
function solution(fees, records) {
    const map = new Map()
    const resultMap = new Map()
    let answerArr = []
    let answer = []
    
    for(let i = 0 ; i < records.length ; i++){
        const [time, car_num, dir] = records[i].split(" ")
        if(map.has(car_num)){
            const timediff = getTimediff(map.get(car_num), time)
            if(resultMap.has(car_num)){
                const temp = resultMap.get(car_num)
                resultMap.set(car_num, temp+timediff)
            }else{
                resultMap.set(car_num, timediff)
            }
            map.delete(car_num)
        }else{
           map.set(car_num, time) 
        }
    }
    // 입차하고 출차 기록이 없는 차량의 경우(23:59 출차로 간주)
    map.forEach((val, key) => {
        if(resultMap.has(key)){
            const temp = resultMap.get(key) 
            resultMap.set(key, temp+getTimediff(val, "23:59"))
        }else{
            resultMap.set(key, getTimediff(val, "23:59"))
        }
        map.delete(key)
    })
    resultMap.forEach((val, key) => {
        let temp = [key, getEachPrice(fees, val)]
        answerArr.push(temp)
    })
    answerArr.sort((a,b) => Number(a[0]) - Number(b[0]))
    
    answerArr.forEach((v) => {
        answer.push(v[1])
    })
    return answer
}

function getEachPrice(fees, time) {
    let result = fees[1]
    if(time < fees[0]){
        return result
    }else{
        let over = Math.ceil((time - fees[0]) / fees[2]) * fees[3]
        result+=over
    }
    return result
}

function getTimediff(inTime, outTime) {
    let timediff = 0
    let [i_hour, i_min] = inTime.split(":").map(Number)
    let [o_hour, o_min] = outTime.split(":").map(Number)
    
    if(i_min > o_min){
        timediff += (o_min+60-i_min)
        o_hour-=1
    }else{
        timediff+=o_min-i_min
    }
    timediff+=(o_hour-i_hour)*60
    
    return timediff
}

