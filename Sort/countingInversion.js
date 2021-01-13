function countInversion(arr) {
        let inversionCount = 0
        const arrLength = arr.length
    
        for (let i=0; i< arrLength; i++){
            for (let j=i +1 ; j< arrLength; j++){
                if(arr[i] > arr[j]) {
                    inversionCount++
                }
            }
        }
    
        return inversionCount
    }