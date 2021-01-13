// Complete the substrCount function below.
function substrCount(n, s) {
    const sameChar = new Array(n).fill(0)
    let result = 0;
    let i=0
    while(i<n) {
        let sameCharCount=1;
        let j = i+1;
        while(j<n && s[i]=== s[j]) {
            sameCharCount++;
            j++
        }
        sameChar[i] = sameCharCount;
        result = result + (sameCharCount*(sameCharCount+1))/2
        i = j
    }

    for(let i=0; i<n; i++) {
        if (s[i] === s[i+1]) {
            sameChar[i+1] = sameChar[i]
        }

        if (i >= 1 && i < (n-1)) {
            if(s[i-1] === s[i+1] && s[i+1] !== s[i]){
                result =  result + Math.min(sameChar[i-1], sameChar[i+1])
            }
        }
    }

    return result
}