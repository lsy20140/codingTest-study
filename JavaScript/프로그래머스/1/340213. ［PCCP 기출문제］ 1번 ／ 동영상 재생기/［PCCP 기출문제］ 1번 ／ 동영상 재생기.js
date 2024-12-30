function solution(video_len, pos, op_start, op_end, commands) {
    video_len = convertToSec(video_len)
    let cur = convertToSec(pos)
    
    
    for(let command of commands){
        let temp = 0
        if(isOpening(cur, op_start, op_end)) cur = convertToSec(op_end)

        if(command === 'prev'){
            temp = cur - 10
            if(temp < 0){
                cur = 0
                continue
            }
        }else if(command === 'next'){
            temp = cur + 10
            if(temp > video_len){
                cur = video_len
                continue
            }
        }
        if(isOpening(temp, op_start, op_end)){
            cur = convertToSec(op_end)
        }else{
            cur = temp
        }

    }
    return `${Math.floor(cur/60).toString().padStart(2, '0')}:${(cur%60).toString().padStart(2, '0')}`
}

function isOpening(time, op_start, op_end){
    if(time >= convertToSec(op_start) &&
       time <= convertToSec(op_end)) return true
    return false
}

function convertToSec(time){
    const [min, sec] = time.split(":").map(Number)
    return min*60+sec
}