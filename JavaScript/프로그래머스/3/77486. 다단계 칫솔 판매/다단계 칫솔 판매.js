function solution(enroll, referral, seller, amount) {
    let answer= []
    let map  = new Map()
    for(let i = 0 ; i < enroll.length ; i++) {
        map.set(enroll[i], 0)
    }
        
    function addReferralMoney (curSeller, money) {
        const idx = enroll.indexOf(curSeller)
        const person = referral[idx]
        if(person === "-"){
            return
        }
        if(money<10) {
            map.set(person, map.get(person)+money)
            return
        }else{
            map.set(person, map.get(person)+Math.ceil(money*0.9))
            addReferralMoney(person,Math.floor(money*0.1))
            
        }
    }
    
    for(let i = 0 ; i < seller.length ; i++) {
        let add = 0
        add = map.get(seller[i]) + Math.ceil(amount[i]*100*0.9)
        map.set(seller[i], add)
        addReferralMoney(seller[i], Math.floor(amount[i]*100*0.1))
    }
    for(let i = 0 ; i < enroll.length ; i++) {
        answer.push(map.get(enroll[i]))
    }
    
    return answer
}


