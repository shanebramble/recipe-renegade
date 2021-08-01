// fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=burger&diet=vegetarian&excludeIngredients=coconut&intolerances=egg%2C%20gluten&number=10&offset=0&type=main%20course&x-rapidapi-key=91b01c1641mshdc2dde83b163e1ep177e07jsn1e7eabbac250")
//     .then (function (response) {
//         response.json().then (function (data) {
//             console.log(data);
//           });
//       });

var recipeListEl = document.querySelector("#recipe-list");

// var displayTypeRecipes = function (data) {

    
//     for (var i = 0; i < data.results.length; i++) {

//         // Create the elements to hold the recipe title, and image.
//         var recipeListItemEl = document.createElement("div");
//         recipeListItemEl.classList.add("result");
//         var recipeImgEl = document.createElement("img");
//         recipeImgEl.setAttribute("src", data.results[i].image);
//         recipeImgEl.setAttribute("id", "placeholder")
//         var recipeInfoEl = document.createElement("div");
//         recipeInfoEl.classList.add("recipe-info");
//         var recipeTitleName = document.createElement("p");
//         // var recipeBakeTime = document.createElement("p");

//         // Setting the names of both the title and bake time.
//         recipeTitleName.textContent = data.results[i].title;
//         // recipeBakeTime.innerHTML = "Bake Time: " + data.results[i].readyInMinutes + " mins";

//         // Appending the elements to their appropriate sections.
//         recipeInfoEl.append(recipeTitleName);
//         recipeListItemEl.append(recipeImgEl, recipeInfoEl);
//         recipeListEl.appendChild(recipeListItemEl);
//     }
// };


var displayRecipes = function (data) {
    recipeListEl.innerHTML = "";
    for (var i = 0; i < data.results.length; i++) {

        // Create the elements to hold the recipe title, image and bake time.
        var recipeListItemEl = document.createElement("a");
        recipeListItemEl.classList.add("result");
        recipeListItemEl.setAttribute("href", "./third-page.html?id=" + data.results[i].id);
        recipeListItemEl.setAttribute("data-id",data.results[i].id);

        var recipeImgEl = document.createElement("img");
        recipeImgEl.setAttribute("src", data.baseUri + data.results[i].image);
        recipeImgEl.setAttribute("id", "placeholder")
        var recipeInfoEl = document.createElement("div");
        recipeInfoEl.classList.add("recipe-info");
        var recipeTitleName = document.createElement("p");
        var recipeBakeTime = document.createElement("p");

        // Setting the names of both the title and bake time.
        recipeTitleName.textContent = data.results[i].title;
        recipeBakeTime.innerHTML = "Bake Time: " + data.results[i].readyInMinutes + " mins";

        // Appending the elements to their appropriate sections.
        recipeInfoEl.append(recipeTitleName, recipeBakeTime);
        recipeListItemEl.append(recipeImgEl, recipeInfoEl);
        recipeListEl.appendChild(recipeListItemEl);
    }
}
var generateTypeRecipes = function (type) {
    fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?type=" + type, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "91b01c1641mshdc2dde83b163e1ep177e07jsn1e7eabbac250",
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
            }
        })
        .then(response => {
            response.json().then(function (data) {
                // $(".result").remove();
                displayRecipes(data);
            });
        })
        .catch(err => {
            console.error(err);
        });
};
var generateRecipes = function (recipe) {
    fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=" + recipe, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "91b01c1641mshdc2dde83b163e1ep177e07jsn1e7eabbac250",
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
            }
        })
        .then(response => {
            response.json().then(function (data) {
                displayRecipes(data);
            });
        })
        .catch(err => {
            console.error(err);
        });
};

$(".breakfast").click(() => generateTypeRecipes("breakfast"));
$(".main-course").click(() => generateTypeRecipes("main course"));
$(".appetizer").click(() => generateTypeRecipes("appetizer"));
$(".dessert").click(() => generateTypeRecipes("dessert"));

generateRecipes("burger");
