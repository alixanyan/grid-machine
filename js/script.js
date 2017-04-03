'use strict';
(function IIFE() {
    var board = {
        grid: null,
        value: null,
        btn: null,
        input: null,
        form:null
    };

    function init() {
        board.btn = document.getElementById('submit');
        board.grid = document.getElementById('grid');
        board.input = document.getElementById('input');
        board.form=document.getElementById('form');
        bindEvents();
    }

    function bindEvents() {
        board.form.addEventListener("submit", function (event) {
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

        var container = document.getElementById("container");
        container.innerHTML = "";
        board.input.value = "";
        for (var i = 0; i < board.value; i++) {
            var grid = document.createElement("div");
            container.appendChild(grid);
            grid.id = "container";
            for (var j = 0; j < board.value; j++) {
                grid.innerHTML += "<div id='divInContainer'></div>"
            }
        }

    }

    init();
}());