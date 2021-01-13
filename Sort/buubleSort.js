// Complete the countSwaps function below.
function countSwaps(a) {
    let lastSorted = a.length -1
    let swapCount =0
    let isSorted = false
    while(!isSorted) {
        isSorted = true
        for (let i=0; i < lastSorted; i++) {
            if (a[i] > a[i+1]) {
                swap(a, i, i+1)
                swapCount++
                isSorted = false
            }
        }
        lastSorted--
    }

    console.log(`Array is sorted in ${swapCount} swaps.`);
    console.log('First Element:',a[0])
    console.log('Last Element:',a[a.length-1])
}

function swap(a, i, j) {
    let temp = a[j]
    a[j]=a[i]
    a[i]=temp
}