function activityNotifications(expenditure, d) {
    let notificationCount = 0;
    const numberOfDays = expenditure.length
    let medianOfArray = []

    for(let i =0; i< numberOfDays; i++) {
        if (i+1 > d) {
            let median = getMedian(medianOfArray)
            if (expenditure[i] >= median*2) {
                notificationCount++
            }
            medianOfArray.shift()
            medianOfArray.push(expenditure[i]);
        } else {
            medianOfArray.push(expenditure[i]);
        }
    }

    return notificationCount
}

function getMedian(arr) {
    arr = arr.sort((a, b) => a-b)
    const length = arr.length;
    const mid = Math.floor(length/2)
    return length % 2 !==0 ? arr[mid] : (arr[mid -1] + arr[mid])/2
}
