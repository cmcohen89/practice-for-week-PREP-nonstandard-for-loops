function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here
    let oddArr = [];
    for (let i = 1; i < arr.length; i += 2) {
        oddArr.push(arr[i]);
    }
    return oddArr;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here
    let oddArrReverse = [];
    for (let i = arr.length - 1; i > 0; i--) {
        if (i % 2 != 0) {
            oddArrReverse.push(arr[i]);
        }
    }
    return oddArrReverse;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here
    let newArr = [];
    for (let i = 1; i < arr.length; i *= 2) {
        newArr.push(arr[i]);
    }
    return newArr;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here
    let newArr = [];
    for (let i = 1; i < arr.length; i *= n) {
        newArr.push(arr[i]);
    }
    return newArr;
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here
    let firstHalfArray = [];
    for (let i = 0; i < arr.length / 2; i++) {
        firstHalfArray.push(arr[i]);
    }
    return firstHalfArray;
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here
    let secondHalfArray = [];
    if (arr.length % 2 == 0) {
        for (let i = (arr.length / 2); i < arr.length; i++) {
            secondHalfArray.push(arr[i]);
        }
    } else {
        for (let i = (arr.length / 2) + 1; i < arr.length; i++) {
            secondHalfArray.push(arr[i]);
        }
    }
    return secondHalfArray;
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
