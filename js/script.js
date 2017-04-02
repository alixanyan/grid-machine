(function IIFE() {
    var board = {
        grid: null,
        value: null,
        btn: null
    };

    function init() {
        board.btn = document.getElementById('submit');
        board.grid = document.getElementById('grid');
        bindEvents();
    }

    function bindEvents() {
        board.btn.addEventListener("click", function (event) {
            event.preventDefault();
            draw();
        });
    }

    function draw(event) {
        board.value = document.getElementById('input').value;
        var number = parseInt(board.value);
        if (isNaN(number)) {
            alert("Please type number ,instead of string")
        }
        var table = document.createElement('table');
        for (var i = 1; i <= board.value; i++) {
            var tr = document.createElement('tr');
            for (var j = 1; j <= board.value; j++) {
                var td = document.createElement('td');
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        input.value = "";
        board.grid.innerHTML = "";
        board.grid.appendChild(table);
    }
    init();
}());