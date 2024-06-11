// 단, 좌표평면의 경계를 넘어가는 명령어는 무시합니다.
function solution(dirs) {
    let result = 0
    let visited = []
    let x = 0
    let y = 0
    for(let i = 0 ; i < dirs.length ; i++){
        let before = [x,y]
        if(dirs[i] === "U" && y < 5){
            y+=1
        }else if(dirs[i] === "D" && y > -5){
            y-=1
        }else if(dirs[i] === "R" && x < 5){
            x+=1
        }else if(dirs[i] === "L" && x>-5){
            x-=1
        }else{
            continue
        }
        
        let after = [x,y]

        if(checkIsFirst(visited, before, after)){
            visited.push([before, after])
            result++
        }
        
    }
    return result
}

// 와 본 길인지 판단 => 정점 두 개 이차원 배열로 저장해서 비교
function checkIsFirst(visited,one, two){
    for(let i = 0 ; i < visited.length ; i++){
        let cur = visited[i]
        if((cur[0][0] === one[0] && cur[0][1] === one[1]
          && cur[1][0] === two[0] && cur[1][1] === two[1]) ||
          (cur[0][0] === two[0] && cur[0][1] === two[1]
          && cur[1][0] === one[0] && cur[1][1] === one[1])
          ){
            return false
        }
    }
    return true
}