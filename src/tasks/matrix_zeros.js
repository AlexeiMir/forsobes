const input1 = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
]; // [[1,0,1],[0,0,0],[1,0,1]]

const input2 = [
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5]
]; //[[0,0,0,0],[0,4,5,0],[0,3,1,0]]

const setZeroes = (matrix) => {
    let ROWS = matrix.length
    let COLS = matrix[0].length
    let isCol = false

    for (let i=0;i<=ROWS;i++){
        if (matrix[i][0] === 0){
            isCol = true
        }
    }

}