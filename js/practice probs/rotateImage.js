function rotateImage (matrix) {
    let N = matrix.length

    //step 1 - transpose matrix (turn rows into columns)
    for(let i = 0; i < N; i++) {
        for(let j = i; j < N; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    //step 2 - flip horizontally (use two pointers to swap rows)
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < (N/2); j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][N - 1 - j];
            matrix[i][N - 1 - j];
        }
    }
}
         
[[1, 2 , 3, 4],
 [5, 6, 7, 8],
 [9, 10, 11, 12]
 [13, 14, 15, 6]]


