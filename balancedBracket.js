function checkBrackets(left, right) {
    if (left == '(') return (right == ')') ? true : false
    if (left == '{') return (right == '}') ? true : false
    if (left == '[') return (right == ']') ? true : false

    return false
}

function balancedBracket(brackets) {
    const allowedBracket = []
    allowedBracket['('] = true
    allowedBracket[')'] = true
    allowedBracket['{'] = true
    allowedBracket['}'] = true
    allowedBracket['['] = true
    allowedBracket[']'] = true

    const arrBrackets = brackets.split('')
    if (arrBrackets.length % 2 != 0) {
        return 'NO'
    }

    for (let i=0; arrBrackets.length>i; i++) {
        if (!allowedBracket[arrBrackets[i]]) {
            return 'NO'
        }
    }

    let left = 0
    let right = arrBrackets.length-1

    while (left < right && left !=right) {
        if (checkBrackets(arrBrackets[left], arrBrackets[right])) {
            left++
            right--
            continue
        }

        if (!checkBrackets(arrBrackets[left], arrBrackets[right])) {
            if (checkBrackets(arrBrackets[right-1], arrBrackets[right])) {
                right = right - 2
                continue
            } else if (checkBrackets(arrBrackets[left+1], arrBrackets[left])) {
                left = left + 2
                continue
            } else {
                return 'NO'
            }
        }
    }

    return 'YES'

}

console.log(balancedBracket('{[()]}'))
console.log(balancedBracket('{[(])}'))
console.log(balancedBracket('{(([]))[][]}'))