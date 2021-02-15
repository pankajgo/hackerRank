function reverseString(str) {
    let strArr = str.split('')
    let length = strArr.length - 1
    for (let i=0; i < Math.floor(strArr.length / 2); i++) {
        [strArr[i], strArr[length - i]] = [strArr[length - i], strArr[i]]
    }

    return strArr.join('')
}

function simpleReverse(str) {
    return str.split('').reverse().join('')
}