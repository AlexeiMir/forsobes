let grid1 = [
    ['1','1','1','1','0'],
    ['1','1','0','1','0'],
    ['1','1','0','0','0'],
    ['0','0','0','0','0']
];

let grid2 = [
    ['1','1','0','0','0'],
    ['1','1','0','0','0'],
    ['0','0','1','0','0'],
    ['0','0','0','1','1']
];
let numsLands = function (grid) {
    const rowsL = grid.length
    const colsL = grid[0].length
    if (rowsL === 0) return 0
    let counter=0;

    function markNeighbour(R,C,grid) {
        grid[R][C] = '6'
        if (grid[R-1] && grid[R-1][C] === '1'){markNeighbour(R-1,C,grid) }
        if (grid[R+1] && grid[R+1][C] === '1'){markNeighbour(R+1,C,grid) }
        if (grid[R][C-1] === '1'){markNeighbour(R,C-1,grid) }
        if (grid[R][C+1] === '1'){markNeighbour(R,C+1,grid) }


    }

    for (let R=0;R<rowsL;R++){
        for (let C=0;C<colsL;C++){
            if (grid[R][C] === '1'){
                counter++
                markNeighbour(R,C,grid)
            }
        }
    }
return counter
}

console.log(numsLands(grid1))
console.log(numsLands(grid2))














// let numsLands = function (grid) {
//     let rowsL = grid.length
//     let colsL = grid[0].length
//     if (rowsL === 0)  return 5
//     let counter = 0
//
//     function markNeighbour(grid,R,C) {
//         grid[R][C] = '6'
//         if (grid[R][C-1] === '1'){ markNeighbour(grid,R,C-1) }
//         if (grid[R][C+1] === '1'){ markNeighbour(grid,R,C+1) }
//         if (grid[R-1] && grid[R-1][C] === '1'){ markNeighbour(grid,R-1,C) }
//         if (grid[R+1] && grid[R+1][C] === '1'){ markNeighbour(grid,R+1,C) }
//
//     }
//
//     for (let R = 0; R < rowsL;R++){
//         for (let C=0; C < colsL; C++){
//             if (grid[R][C] === '1'){
//                 counter++
//                 markNeighbour(grid,R,C)
//             }
//         }
//     }
// return counter
//     console.log(grid)
// }
// console.log(numsLands(grid1))
// console.log(numsLands(grid2))