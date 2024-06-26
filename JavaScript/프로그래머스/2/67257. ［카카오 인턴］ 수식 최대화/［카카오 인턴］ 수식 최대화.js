function solution(expression) {    
  const orderCase = [["*", "+", "-"],["*", "-", "+"],["-", "+", "*"],
                 ["-", "*", "+"],["+", "-", "*"],["+", "*", "-"]]
  let arr = []
  
  orderCase.forEach((order) => {
    const result = getResult(order, splitExpression(expression))
    arr.push(Math.abs(result))
  })

  return Math.max(...arr)
  
}

function getResult(order, array) {
  let answer = 0
  let operatorIdx = 0
  let temp = 0
  
  while(array.length > 0){
      if(array.length ===1){
          answer = Number(array[0])
          break
      }
      const idx = array.indexOf(order[operatorIdx])
      if(idx === -1) {
          operatorIdx++
          continue
      }else{
          temp = eval(array.splice(idx-1, 3).join(""))
          array.splice(idx-1, 0, temp)
      }
  }
  return answer
}
  

function splitExpression(expression) {
  let arr = []
  let stack = ''
  let idx = 0
  const operators = ["*", "+", "-"]
  
  while(idx < expression.length){
      if(operators.includes(expression[idx])){
          arr.push(stack)
          arr.push(expression[idx])
          stack = ''
      }else{
          stack+=expression[idx]
      }
      idx++
  }
  arr.push(stack)
  
  return arr
}