// fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=burger&diet=vegetarian&excludeIngredients=coconut&intolerances=egg%2C%20gluten&number=10&offset=0&type=main%20course&x-rapidapi-key=91b01c1641mshdc2dde83b163e1ep177e07jsn1e7eabbac250")
//     .then (function (response) {
//         response.json().then (function (data) {
//             console.log(data);
//           });
//       });

var recipeListEl = document.querySelector("#recipe-list");

var displayRecipes = function (data){

    for (var i = 0; i < data.results.length; i++) {
        var recipeListItemEl = document.createElement("div");
        var recipeTitleName = document.createElement("h3");
        recipeTitleName.textContent = data.results[i].title;
        recipeListItemEl.appendChild(recipeTitleName);

        recipeListEl.appendChild(recipeListItemEl);
    }
}


fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=burger", {
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
    });
    // .catch(err => {
    //     console.error(err);
    // });


    // https: //spoonacular.com/recipeImages/thai-sweet-potato-veggie-burgers-with-spicy-peanut-sauce-262682.jpg
    // https: //spoonacular.com/recipeImages/thai-sweet-potato-veggie-burgers-with-spicy-peanut-sauce-262682.jpg