function createGrid() {
    var grid = document.getElementById('grid');
    var input = document.getElementById('input');
    var value = document.getElementById('input').value;
    var form = document.getElementById('form');
    grid.innerHTML = "";
    var number = parseInt(value);
    if (isNaN(number)) {
        alert("Please type number ,instead of string")
    }
    var table = document.createElement('table');
    for (var i = 1; i <= value; i++) {
        var tr = document.createElement('tr');
        for (var j = 1; j <= value; j++) {
            var td = document.createElement('td');
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    grid.appendChild(table);
    input.value = "";
    event.preventDefault()
}
