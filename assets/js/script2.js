var recipeDetailsEl = document.querySelector("#recipe-article")

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

    // h2 for recipe title
    var recipeTitleEl = document.createElement("h2");
    recipeTitleEl.classList.add("recipe-name");
    recipeTitleEl.textContent = data.title;
    // img
    var recipeImgEl = document.createElement("img");
    recipeImgEl.setAttribute("src", data.image);
    recipeImgEl.setAttribute("id", "placeholder")
    // container for recipe overview
    var recipeOverviewEl = document.createElement("div");
    recipeOverviewEl.classList.add("cook-overview");
    // prep time
    var recipePrepTime = document.createElement("p");
    recipePrepTime.textContent = "Prep: " + data.preparationMinutes;
    // cook time
    var recipeCookTime = document.createElement("p");
    recipeCookTime.textContent = "Cook: " + data.cookingMinutes + " mins";
    // Total time
    var recipeTotalTime = document.createElement("p");
    recipeTotalTime.textContent = "Total: " + data.readyInMinutes + " mins";
    // servings
    var recipeServings = document.createElement("p");
    recipeServings.textContent = "Servings: " + data.servings;
    // container for recipe ingredients
    var recipeIngredients = document.createElement("div");
    var recipeIngredientsList = document.createElement("ul");
    var recipeIngredientListItem = document.createElement("li");
    // container for recipe directions
    var recipeDirections = document.createElement("div");
    console.log(recipeImgEl);
    
    // Append the recipe overview elements to their appropriate sections.
    recipeOverviewEl.append(recipePrepTime, recipeCookTime, recipeTotalTime, recipeServings);
    recipeIngredientsList.append(recipeIngredientListItem)
    recipeIngredients.append(recipeIngredientsList)
    recipeDetailsEl.append(recipeTitleEl, recipeImgEl, recipeOverviewEl, recipeIngredients, recipeDirections);
    console.log(recipeOverviewEl);
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
getRecipeId();