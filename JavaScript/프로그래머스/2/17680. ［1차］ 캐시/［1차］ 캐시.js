function solution(cacheSize, cities) {
    let answer = 0
    cities = cities.map((city) => city.toLowerCase())
    let cacheArr = []
    
    // cacheSize 0인 경우 바로 return
    if(cacheSize === 0) {
        return cities.length * 5
    }
    
    //메인
    for(let i = 0 ; i < cities.length ; i++) {
        if(cacheArr.includes(cities[i])){
            answer+=1
            cacheArr.splice(cacheArr.indexOf(cities[i]),1)
            
        }else{
            answer+=5
            if(cacheSize<=cacheArr.length) {
                cacheArr.shift()
            }
        }
        cacheArr.push(cities[i])
    }
    
    return answer
}