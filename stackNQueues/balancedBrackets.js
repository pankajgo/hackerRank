function isBalanced(s) {
    let sArr = s.split('')
    let len = sArr.length;
    if (len % 2 !== 0) return 'NO'

    let bracketsStack = []
    for(let i=0; i< len; i++) {

        const item = sArr[i]
        if (item === '{' || item === '[' || item === '(') {
            bracketsStack.push(item)
        } else {
            const lastBracket = bracketsStack.pop()
            switch(item) {
                case ']':
                    if (lastBracket !== '[') return 'NO'
                    break;
                case '}':
                    if (lastBracket !== '{') return 'NO'
                    break;
                case ')':
                    if (lastBracket !== '(') return 'NO'
                    break;
            }
        }
    }
    if (bracketsStack.length >0) return 'NO'
    return 'YES'
}