// Complete the minimumAbsoluteDifference function below.
function minimumAbsoluteDifference(arr) {
    let diff = Infinity
    arr = arr.sort((a, b) => a-b)
    for (let i=0; i< arr.length; i++){
            const difference = Math.abs(arr[i+1] - arr[i])
            if (difference < diff) {
                diff = difference
            }
    }
    
    return diff
}
