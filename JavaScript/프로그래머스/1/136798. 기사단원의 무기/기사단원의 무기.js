function solution(number, limit, power) {
    let answer = 0
    const divisorNums = getDivisorCntArr(number)

    for(let i = 0 ; i < divisorNums.length ; i++){
        if(divisorNums[i] <= limit){
          answer+=divisorNums[i]
        }else{
          answer+=power
        }
    }
    return answer
}

function getDivisorCntArr(num) {
  let countArr = []

  for(let i = 1 ; i <= num ; i++){
    const temp = new Set()
    const sqrt = Math.sqrt(i)
    for(let j = 1 ; j <= sqrt ; j++){
      if(i % j === 0){
        temp.add(j)
        temp.add(i / j)
      }
    }
    countArr.push(temp.size)
  }
  return countArr
}