function findPalindrome(strings, i, j, k) {
    if (strings.length-1 < i) {
        return strings
    }

    const left = strings[i]
    const right = strings[j]

    if (left != right) {
        if (right>left) {
            strings[i] = strings[j]
        } else {
            strings[j] = strings[i]
        }

        k--

        if (k==0) {
            return strings
        }
    }

    return findPalindrome(strings, i+1, j-1, k)
}

function checkPalindrome(strings, i, j) {
    if (strings.length-1 < i) {
        return strings
    }

    const left = strings[i]
    const right = strings[j]
    
    if (left != right) {
        return -1
    } else {
        return checkPalindrome(strings, i+1, j-1)
    }
}

function highestPalindrome(string, k) {
    if (k==0) {
        return -1
    }

    const numberInStrings = string.split('')

    // Odd number excluding palindromes
    if (numberInStrings.length % 2 != 0) {
        return -1
    }

    const result = findPalindrome(numberInStrings, 0, numberInStrings.length-1, k)
    const check = checkPalindrome(result, 0, result.length-1)

    if (check == -1) {
        return -1
    }

    return result.join('')
}

console.log(highestPalindrome('3943', 1))
console.log(highestPalindrome('3943', 0))
console.log(highestPalindrome('3943234', 3))
console.log(highestPalindrome('3943234333', 6))