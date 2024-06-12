const NUM = 65536

function solution(str1, str2) {
    let str1_splited = []
    let str2_splited = []
    
    for(let i = 0 ; i < str1.length-1 ; i++){
        str1_splited.push(str1.slice(i, i+2).toLowerCase())
    }
    for(let i = 0 ; i < str2.length - 1 ; i++){
        str2_splited.push(str2.slice(i, i+2).toLowerCase())
    }
    return getSimilarity(str1_splited, str2_splited)    
}

function getSimilarity(arr1, arr2) {
    let similarity = 1
    const checkEng = /^[a-zA-Z]*$/
    arr1 = arr1.filter((v) => checkEng.test(v) === true)
    arr2 = arr2.filter((v) => checkEng.test(v) === true)
    
    const intersection = getIntersection(arr1, arr2)
    const union = getUnion(arr1, arr2)

    let jacquard = 1
    if(intersection === 0 && union === 0){
        jacquard = 1
    }else{
        jacquard = intersection / union
    }
    similarity = Math.floor(jacquard * NUM)
    return similarity
}

function getIntersection(arr1, arr2){
    let result = []
    let map = new Map()
    for(let i = 0 ; i < arr1.length ; i++){
        if(map.has(arr1[i])){
            map.set(arr1[i], map.get(arr1[i])+1)
        }else{
            map.set(arr1[i], 1)
        }
    }
    
    for(let i = 0 ; i < arr2.length ; i++){
        if(map.has(arr2[i])){
            let cnt = map.get(arr2[i])-1
            result.push(arr2[i])
            map.set(arr2[i], cnt)
            if(cnt === 0){
                map.delete(arr2[i])
            }
        }else{
            continue
        }
    }
    return result.length
}

function getUnion(arr1, arr2){
    let result = arr1
    let map = new Map()
    for(let i = 0 ; i < arr1.length ; i++){
        if(map.has(arr1[i])){
            map.set(arr1[i], map.get(arr1[i])+1)
        }else{
            map.set(arr1[i], 1)
        }
    }
    
    for(let i = 0 ; i < arr2.length ; i++){
        if(map.has(arr2[i])){
            let cnt = map.get(arr2[i])-1
            map.set(arr2[i], cnt)
            if(cnt === 0){
                map.delete(arr2[i])
            }
        }else{
            result.push(arr2[i])
        }
    }
    return result.length
}
