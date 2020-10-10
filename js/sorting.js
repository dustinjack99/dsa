function mergeSort (arr) {
    if (arr.length === 1) {
        return arr;
    }

    //find middle of array
    const middle = arr.length / 2;
    //split left half
    const left = arr.splice(0, middle);
    //split right half
    const right = arr.splice(middle);

    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}


[1, 2, 0], [8, 10, 4]
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result;
}