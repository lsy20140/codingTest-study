function solution(book_time) {
    let answer = 0
    let room = [] // 퇴실시간
    
    book_time.sort().forEach((time) => {
        let [start, end] = time
        const startTime = convertToMin(start)
        const endTime = convertToMin(end) + 10
        
        const idx = room.findIndex((v) => startTime >= v)
        if(idx === -1){
            room.push(endTime)
        }else{
            room[idx] = endTime
        }
    })
    return room.length
}

function convertToMin(time) {
    const [hour, min] = time.split(":")
    return Number(hour)*60 + Number(min)
}