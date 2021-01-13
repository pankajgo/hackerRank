function minimumSwaps(arr) {
    let counter=0
    for(let i=0; i<arr.length; i++) {
        while (arr[i] !== i+1) {
            let ele = arr[i]
            arr = swap(arr, i, ele-1)
            counter++
        }
    }
    return counter
}

function swap(arr, indx1, indx2) {
    [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]]
    return arr
}