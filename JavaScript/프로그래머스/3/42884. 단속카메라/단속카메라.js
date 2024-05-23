function checkFunc(cur, routes){
    let temp = []
    for(let i = 0 ; i < routes.length ; i++) {
        if(routes[i][0] <= cur && routes[i][1] >= cur){
            temp.push(i)
        }
    }
    return temp
}

function solution(routes) {
    routes.sort((a,b) => a[1] - b[1])

    let answer = 0
    let idx = 0
    let cur = routes[idx][1]
    let checked = new Set()

    while(idx <= routes.length-1){
        cur = routes[idx][1]
        if(checked.has(idx)){
            idx++
            continue
        }
        // 아직 단속되지 않은 경우
        else{
            for(const item of checkFunc(cur, routes)){
                checked.add(item)
            }
            answer++
            idx++ 
        }

    }
    return answer
}

