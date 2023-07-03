function weightedStrings(string, queries) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const weighted = []
    for (let i=0; alphabet.length>i; i++){
        weighted[alphabet[i]] = i+1
    }

    const result = []
    const weightedChars = []
    let lastChar = null
    let sumSimilarChar = 0
    const chars = string.split('')
    for (let i=0; chars.length>i; i++) {
        if (!lastChar) {
            lastChar = chars[i]
            weightedChars[weighted[chars[i]]] = true
            continue
        }

        if (chars[i] == lastChar) {
            sumSimilarChar += weighted[chars[i]]
            weightedChars[weighted[chars[i]] + sumSimilarChar] = true
        } else {
            lastChar = chars[i]
            weightedChars[weighted[chars[i]]] = true
            sumSimilarChar = 0
        }
    }

    for (let i=0; queries.length>i; i++) {
        if (weightedChars[queries[i]]) {
            result.push('Yes')
        } else {
            result.push('No')
        }
    }

    return result;
}

console.log(weightedStrings('abbcccdd', [1, 3, 9, 8]))