/*
const grid = document.getElementById('grid')

grid.onclick = function (e) {
    if (e.target.tagName !== 'TH') {
        return
    }
    let th = e.target

    sortGrid(th.dataset.type, th.cellIndex)
}

function sortGrid(type, colNum) {
    let tbody = grid.querySelector('tbody')
    let rowsArray = Array.from(tbody.rows)

    let compare;
    switch (type) {
        case 'string':
            compare = function (rowA,rowB) {
                return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1
            }
            break
        case 'number':
            compare = function (rowA,rowB) {
                return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML

            }
            break
    }
    rowsArray.sort(compare)
    tbody.append(...rowsArray)


}

<table id="grid">
    <thead>
    <tr>
        <th data-type="number">Возраст</th>
        <th data-type="string">Имя</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>5</td>
        <td>Вася</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Петя</td>
    </tr>
    <tr>
        <td>12</td>
        <td>Женя</td>
    </tr>
    <tr>
        <td>9</td>
        <td>Маша</td>
    </tr>
    <tr>
        <td>1</td>
        <td>Илья</td>
    </tr>
    </tbody>
</table>*/


