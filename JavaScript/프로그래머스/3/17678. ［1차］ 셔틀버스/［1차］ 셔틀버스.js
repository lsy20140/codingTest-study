function sortTimetable(timetable){
    timetable = timetable.map((t) => {
        let [h,m] = t.split(":")
        return Number(h)*60 + Number(m)
    })
    return timetable.sort((a,b) => a-b)
}
function solution(n, t, m, timetable) {
    let answer = ''
    
    let table = sortTimetable(timetable)
    
    let time = 9*60
    
    for(let i = 1 ; i < n+1 ; i++) {
        const list = table.filter((t) => t<=time)
        // 막차
        if(i === n){
            if(list.length >=m){
                time = table[m-1]-1
            }
        }else{
            if(list.length >= m){
                table.splice(0,m)
            }else{
                table.splice(0, list.length)
            }
            time+=t
        }
    }
    return Math.floor(time / 60).toString().padStart(2,'0')+":"+(time%60).toString().padStart(2,"0")
    
}