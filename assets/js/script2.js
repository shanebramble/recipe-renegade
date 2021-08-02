var recipeDetailsEl = document.querySelector("#recipe-details")

var getRecipeId = function () {
    // Grab recipe id from url query string.
    var queryString = document.location.search;
    var recipeID = queryString.split("=")[1];
    console.log("This is the id on third page: " +recipeID);

    if (recipeID) {
        loadRecipe(recipeID);
    } else {
        document.location.replace("./index.html");
    }
};

var detailedRecipe = function (data) {

    // container for entire recipe article
    var recipeListItemEl = document.createElement("div");
    // h2 for recipe title
    var recipeTitleEl = document.createElement("h2");
    // img
    var recipeImgEl = document.createElement("img");
    // container for recipe overview
    var recipeOverviewEl = document.createElement("div");
    var recipePrepTime = document.createElement("p");
    var recipeCookTime = document.createElement("p");
    var recipeTotalTime = document.createElement("p");
    var recipeServings = document.createElement("p");
    // container for recipe ingredients
    var recipeIngredients = document.createElement("div");
    // container for recipe ingredients
    var recipeDirections = document.createElement("div");
    recipeImgEl.setAttribute("src", data.image);
    recipeImgEl.setAttribute("id", "placeholder")
    recipeOverviewEl.classList.add("cook-overview");

    // recipe title
    recipeTitleName.textContent = data.title;
    
    // recipe overview
    recipePrepTime.textContent = "Prep: " + data.preparationMinutes;
    recipeCookTime.textContent = "Cook: " + data.cookingMinutes + " mins";
    recipeTotalTime.textContent = "Total: " + data.readyInMinutes + " mins";
    recipeServings.textContent = "Servings: " + data.servings;

    // Append the recipe overview elements to their appropriate sections.
    recipeTitleEl.append(recipeTitleName)
    recipeOverviewEl.append(recipePrepTime, recipeCookTime, recipeTotalTime, recipeServings);
    recipeListItemEl.append(recipeImgEl, recipeOverviewEl);
    recipeDetailsEl.appendChild(recipeListItemEl);
};

var loadRecipe = function (id) {
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

// loadRecipe("479101");
// console.log(loadRecipe)
getRecipeId();