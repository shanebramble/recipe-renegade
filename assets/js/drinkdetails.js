var drinkDetailsEl = document.querySelector("#recipe-article")

function updateBackBtn (drinkSearch){
    $(".backbtn").attr("href", "./second-page.html?q=" + drinkSearch);
}
// function to display drink data
var detailedDrink = function (data) {

    // create h2 for drink title, add class for styling, and pull title from data.title
    var drinkTitleEl = document.createElement("h2");
    drinkTitleEl.classList.add("recipe-name");
    drinkTitleEl.textContent = data.drinks[0].strDrink;
    // create img for drink image, add src Attribute assigning URL from data.image
    var drinkImgEl = document.createElement("img");
    drinkImgEl.setAttribute("src", data.drinks[0].strDrinkThumb);
    drinkImgEl.setAttribute("id", "placeholder")
    // container for drink ingredients
    var drinkIngredients = document.createElement("div");
    drinkIngredients.classList.add("recipe-ingredients");
    var drinkIngredientsList = document.createElement("ul");
    var drinkIngredientListItem = document.createElement("li");
    // container for drink directions
    var drinkDirections = document.createElement("div");
    drinkDirections.classList.add("recipe-directions");
    drinkDirections.textContent = data.drinks[0].strInstructions;
    
    drinkIngredients.append(drinkIngredientsList)
    drinkDetailsEl.append(drinkTitleEl, drinkImgEl, drinkIngredients, drinkDirections);
};

//  api call for drink information
var loadDrink = function (id) {
    fetch("https://the-cocktail-db.p.rapidapi.com/lookup.php?i=" + id, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "2c6a28b8bamsh4fa138d603fa741p192f0ajsn19a4adcc2247",
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com"
        }
    })        
    .then(response => {
            response.json().then(function (data) {
                console.log(data);
                detailedDrink(data);
            });
        })
        .catch(err => {
            console.error(err);
        });
};

loadDrink("11007");
// loadDrink();