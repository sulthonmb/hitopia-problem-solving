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
    let temp = []
    while (left <= arrBrackets.length-1) {
        if (temp.length<=0) {
            temp.push(arrBrackets[left])
            left++
            continue
        }

        if (checkBrackets(temp[temp.length-1], arrBrackets[left])) {
            temp.pop()
        } else {
            temp.push(arrBrackets[left])
        }
        left++
    }

    if (temp.length > 0) {
        return 'NO'
    } else {
        return 'YES'
    }
}

console.log(balancedBracket('{[()]}'))
console.log(balancedBracket('{[(])}'))
console.log(balancedBracket('{(([]))[][]}'))
console.log(balancedBracket('[()]{}{[()()]()}'))