const $strDrink = $('#cocktail');
const $strIngredient = $('#ingredient');
const $strDescription = $('#description');
const $input = $('input[type="text"]');



//functions         //any event

function handleSubmit(evt) {
  evt.preventDefault(); //stop default browser from refresh

  const term = $input.val(); //user input

  $input.val(""); //remove user input

  $.ajax("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail" + term)
    .then(function (evt) {
      console.log('Cocktail Data ', data);
      cocktailData = data;
      render();
    }, function (error) {
      console.log('Error ', error);
    });




  //update page

  function render() {
    if (strType) {
      $strDrink.text($strDrink.data);
      $strIngredient.text($strIngredient.data);
      $strDescription.text($strDescription.data);
    }
  }

};

console.log("LOADED");
