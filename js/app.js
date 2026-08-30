/* Picks a random dish from the proteins that are selected.
   The dish lists live in js/dishes.js — edit that file, not this one. */

(function () {
    "use strict";

    var LABELS = {
        fish: "Fish",
        shrimp: "Shrimp",
        chicken: "Chicken",
        beef: "Beef"
    };

    var cards = Array.prototype.slice.call(document.querySelectorAll(".meat"));
    var pickButton = document.getElementById("pick");
    var clearButton = document.getElementById("clear");
    var hint = document.getElementById("hint");
    var result = document.getElementById("result");
    var dishName = document.getElementById("dish-name");
    var dishProtein = document.getElementById("dish-protein");

    var lastDish = null;

    function selectedProteins() {
        return cards
            .filter(function (card) { return card.classList.contains("selected"); })
            .map(function (card) { return card.dataset.protein; });
    }

    function dishPool(proteins) {
        var pool = [];
        proteins.forEach(function (protein) {
            (DISHES[protein] || []).forEach(function (name) {
                pool.push({ name: name, protein: protein });
            });
        });
        return pool;
    }

    function refreshControls() {
        var count = selectedProteins().length;
        pickButton.disabled = count === 0;
        clearButton.hidden = count === 0;

        if (count === 0) {
            hint.textContent = "Pick one or more, then hit the button.";
        } else if (count === 1) {
            hint.textContent = "1 protein selected.";
        } else {
            hint.textContent = count + " proteins selected.";
        }
    }

    function toggle(card) {
        card.classList.toggle("selected");
        card.setAttribute("aria-pressed", card.classList.contains("selected"));
        refreshControls();
    }

    function show(dish) {
        dishName.textContent = dish.name;
        dishProtein.textContent = LABELS[dish.protein] || dish.protein;
        result.hidden = false;

        // Restart the pop animation on every pick.
        result.classList.remove("pop");
        void result.offsetWidth;
        result.classList.add("pop");
    }

    function pick() {
        var proteins = selectedProteins();
        if (proteins.length === 0) {
            return;
        }

        var pool = dishPool(proteins);
        if (pool.length === 0) {
            dishName.textContent = "No dishes listed yet";
            dishProtein.textContent = "Add some in js/dishes.js";
            result.hidden = false;
            return;
        }

        // Avoid repeating the previous dish when there is something else to show.
        var choices = pool;
        if (pool.length > 1 && lastDish) {
            choices = pool.filter(function (dish) { return dish.name !== lastDish; });
        }

        var dish = choices[Math.floor(Math.random() * choices.length)];
        lastDish = dish.name;
        show(dish);
    }

    function clearAll() {
        cards.forEach(function (card) {
            card.classList.remove("selected");
            card.setAttribute("aria-pressed", "false");
        });
        result.hidden = true;
        lastDish = null;
        refreshControls();
    }

    cards.forEach(function (card) {
        card.addEventListener("click", function () { toggle(card); });
        card.addEventListener("keydown", function (event) {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggle(card);
            }
        });
    });

    pickButton.addEventListener("click", pick);
    clearButton.addEventListener("click", clearAll);

    refreshControls();
}());
