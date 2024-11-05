function solution(p) {
  let answer = ''
  if (!p) return ''

  const [pos, isProper] = checkStr(p)

  let u = p.slice(0, pos + 1)
  let v = p.slice(pos + 1)

  if (isProper) {
    return u + solution(v)
  }

  // u가 올바르지 않은 문자열인 경우
  answer += '(' + solution(v) + ')'
  u = u.slice(1, u.length - 1)
  return answer + reverseStr(u)
}

function reverseStr(str) {
  let newStr = ''
  for (let char of str) {
    if (char === '(') {
      newStr += ')'
    } else {
      newStr += '('
    }
  }
  return newStr
}

function checkStr(str) {
  let [left, right] = [0, 0]
  let isProper = true
  let stack = []

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      right++
      stack.push('(')
    } else {
      left++
      if (stack.length === 0) {
        isProper = false
      } else {
        stack.pop()
      }
    }
    if (left === right) return [i, isProper]
  }
    
  return [0, isProper]
}