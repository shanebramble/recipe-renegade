var buttonEl = document.querySelector("button");

var queryInput = function (event) {
    event.preventDefault();
    var inputval = document.querySelector("input").value;
    window.location.href = "./second-page.html?q=" + inputval;
};

buttonEl.addEventListener("click", queryInput);