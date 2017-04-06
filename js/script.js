'use strict';
(function IIFE() {
    var board = {
        grid: null,
        form: null,
        container: null
    };

    function init() {
        board.container = document.getElementById('container');
        board.grid = document.getElementById('grid');
        board.form = document.getElementById('form');
        bindEvents();
    }

    function bindEvents() {
        if (board.form) {
            if (board.form.addEventListener) {
                board.form.addEventListener("submit", draw)
            } else if (board.form.attachEvent) {
                board.form.addEventListener("onsubmit", draw)
            }
        }
    }

    function clearGrid() {
        board.container.innerHTML = '';
    }

    function clearInput(input) {
        input.value = '';
    }

    function draw(event) {
        event.preventDefault();
        var inputElem = document.getElementById('input');
        var pareNumber = parseInt(inputElem.value);
        if (isNaN(pareNumber)) {
            alert("Please type number ,instead of string");
            return;
        }
        clearGrid();
        for (var i = 0; i < pareNumber; i++) {
            var grid = document.createElement("div");
            board.container.appendChild(grid);
            grid.id = "container";
            for (var j = 0; j < pareNumber; j++) {
                grid.innerHTML += "<div id='divInContainer'></div>"
            }
        }
        clearInput(inputElem)
    }

    init();
}());