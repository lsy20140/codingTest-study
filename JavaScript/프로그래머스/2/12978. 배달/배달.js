function solution(N, road, K) {
    // 배달 시간 K 이하 걸리는 마을 개수, 1번 마을에서 출발
    // 마을 사이 경로 두 개 이상일 수 o
    let graph = Array.from(Array(N+1), () => Array(N+1).fill(Infinity))
    
    for(let i = 1 ; i <= N ; i++ ){
        graph[i][i] = 0
    }
    for(let i = 0 ; i < road.length ; i++){
        const [a, b, c] = road[i]
        graph[a][b] = Math.min(graph[a][b], c)
        graph[b][a] = Math.min(graph[b][a], c)
    }
    // 1-> i, i-> j로 이동, i는 경유지, j가 도착지
    for(let k = 1 ; k <= N ; k++){
        for(let i = 1 ; i <= N ; i++){
            for(let j = 1 ; j <= N ; j++){
                graph[i][j] = Math.min(graph[i][j], graph[i][k]+graph[k][j])
            }
        }
    }
    let answer = 0
    for(let i = 1 ; i <=N ; i++){
        if(graph[1][i] <= K){
            answer++
        }
    }
    return answer
}
