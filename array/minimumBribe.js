function minimumBribes(q) {
    let chaotic = false
    var bribes = 0
    for (let i = 0; i < q.length; i++) {
        if (q[i] - (i+1) > 2) { 
            console.log("Too chaotic")
            return
        }
        for (let j = q[i]-2; j < i; j++) {
            if (q[j] > q[i]) { 
                bribes++ 
            }
        }
    }
    console.log(bribes)
}