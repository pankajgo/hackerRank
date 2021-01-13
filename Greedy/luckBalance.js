// Complete the luckBalance function below.
function luckBalance(k, contests) {
    const totalContests = contests.length
    let impLuckArr = []
    let luckNotImpPoint = 0;
    for (let i =0; i< totalContests; i++) {
        if (contests[i][1] === 1){
            impLuckArr.push(contests[i][0])
        } else {
            luckNotImpPoint += contests[i][0]
        }
    }

    impLuckArr = impLuckArr.sort((a, b) => a-b)

    let contestToWin = impLuckArr.length - k
    contestToWin = contestToWin > 0 ? contestToWin : 0
    const pointToLoseArr = impLuckArr.splice(0, contestToWin)
    const pointToLoseA = pointToLoseArr.reduce((acc, num) => acc+num, 0)
    
    const pointSaved = impLuckArr.reduce((acc, num) => {
        return acc + num
    }, luckNotImpPoint)

    return pointSaved - pointToLoseA
}
