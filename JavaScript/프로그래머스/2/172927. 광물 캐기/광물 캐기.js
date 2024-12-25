function solution(picks, minerals) {
    let answer = 0 
    
    const maxLen = picks.reduce((acc, cur) => acc+cur, 0)    
    minerals = minerals.slice(0, maxLen*5)
    
    const arr = []
    
    // 5개씩 묶어서 arr에 추가
    for(let i = 0 ; i < minerals.length ; i+=5){
        const temp = {diamond: 0, iron: 0, stone: 0}
        const sliced = minerals.slice(i, i+5)
        sliced.forEach((mineral) => {
            temp[mineral]++
        })
        arr.push(temp)
        
        if(arr.length === maxLen) break
    }
    
    // 센 광물 기준으로 정렬(내림차순)
    arr.sort((a, b) => b['diamond'] - a['diamond'] || b['iron'] - a['iron'] || b['stone'] - a['stone'])
    while(arr.length > 0){   
        const cur = arr.shift() 
        const idx = picks.findIndex(val => val > 0)
        answer += getFatigueSum(idx, cur)
        picks[idx]-=1
    }
    return answer
}

function getFatigueSum(idx, group){ // 곡괭이 idx, group(mineral 배열) 전달
    let result = 0
    
    for(let [type, count] of Object.entries(group)){
        result+=getFatigueBetween(idx, type)*count
    }
    return result
}

function getFatigueBetween(idx, mineral){
    let result = 1
    if(idx === 1){
        if(mineral === 'diamond') result = 5
    }else if(idx === 2){
        if(mineral === 'diamond') result= 25
        else if(mineral === 'iron') result = 5
    }
    return result
}