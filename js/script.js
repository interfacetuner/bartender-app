let cocktailData;
//----constants----
//const Base_URL='https://www.thecocktaildb.com/api/json/v1/1/l';

const drink = $(`#cocktail`);
const drinkThumb = $(`#thumbnail`);
const instruct = $(`#instructions`);
const $input = $(`input[type="text"]`);



//functions         //any event
$('.search').on('submit', handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault(); //stop default browser from refresh

  const term = $input.val(); //user input

  $input.val(""); //remove user input

  $.ajax("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + term)
    .then(function (data) {
      console.log('Cocktail Data ', data);
      cocktailData = data;
      render();
    }, function (error) {
      console.log('Error ', error);
    });


  //update page
  function render() {
    drink.text(cocktailData.strDrink);
    drinkThumb.text(cocktailData.strDrinkThumb); //??
    instruct.text(cocktailData.strInstructions); //??

  }

};
//console.log(cocktailData.text);
