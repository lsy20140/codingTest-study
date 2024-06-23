function solution(m, musicinfos) {
    let answer = ''
    let max = 0
    
    for(let i = 0 ; i < musicinfos.length ; i++){
        let [start, end, title, melody] = musicinfos[i].split(",")
        const playTime = getPlayTime(start, end) // 재생 시간
        const newM = replaceMelody(m)
        
        melody = replaceMelody(melody)
        let target = ''
        
        if(playTime <= melody.length){
            target = melody.slice(0, playTime)
        }else{
            target+=melody.repeat(Math.floor(playTime / melody.length))
            target+=melody.slice(0, playTime%melody.length)
        }
        if(target.includes(newM)){
            if(playTime > max || max === 0){
                answer = title
                max = playTime
            }
        }
    }
    if(!answer){
        answer = "(None)"
    }
    
    return answer
}
    
function replaceMelody(str){
    const replace = [["C#",'c'], ["D#",'d'], ["F#",'f'], ["G#",'g'], ["A#",'a'], ["B#", "b"]]
    
    replace.forEach((el) => {
        str = str.replaceAll(el[0], el[1])
    })
    
    return str
}
    
function getPlayTime(start, end) {    
    let [start_min, start_sec] = start.split(":").map(Number)
    let [end_min, end_sec] = end.split(":").map(Number)
    
    return (end_min*60+end_sec) - (start_min*60+start_sec)
}
