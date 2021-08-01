var recipeDetailsEl = document.querySelector("#recipe-details")

var detailedRecipe = function (data) {

    var recipeImgEl = document.createElement("img");
    recipeImgEl.setAttribute("src", data.baseUri + data.results.image);
    recipeImgEl.setAttribute("id", "placeholder")
    var recipeInfoEl = document.createElement("div");
    recipeInfoEl.classList.add("recipe-info");
    var recipeTitleName = document.createElement("p");

    recipeTitleName.textContent = data.results.id.title;
    recipeBakeTime.innerHTML = "Bake Time: " + data.results.id.readyInMinutes + " mins";

    // Appending the elements to their appropriate sections.
    recipeInfoEl.append(recipeTitleName, recipeBakeTime);
    recipeListItemEl.append(recipeImgEl, recipeInfoEl);
    recipeDetailsEl.appendChild(recipeListItemEl);
};

var redirectRecipe = function (id) {
    fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" + id + "/information", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "2c6a28b8bamsh4fa138d603fa741p192f0ajsn19a4adcc2247",
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
        }
    })
    .then(response => {
        response.json().then(function (data) {
            console.log(data);
            detailedRecipe(data);
        });
    })
    .catch(err => {
        console.error(err);
    });
};

redirectRecipe("479101");
console.log(redirectRecipe)