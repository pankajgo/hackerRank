function getMinimumCost(k, c) {
    c = c.sort((a,b) => b-a)
    let cost = 0
    let n = c.length
    let previous_purchase = 0
    for (let i=0; i<n; i++) {
        cost += (previous_purchase +1) * c[i]
        if ((i+1)%k===0){
            previous_purchase += 1
        }   
    }
    return cost
}