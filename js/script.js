const $strDrink = $(`.cocktail`);
const $strDrinkThumb = $(`.thumbnail`);
const $strInstructions = $(`.instructions`);
const $input = $(`input[type="text"]`);



//functions         //any event

function handleSubmit(evt) {
  evt.preventDefault(); //stop default browser from refresh

  const term = $input.val(); //user input

  $input.val(""); //remove user input

  $.ajax("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007" + term)
    .then(function (data) {
      console.log('Cocktail Data ', data);
      cocktailData = data;
      render();
    }, function (error) {
      console.log('Error ', error);
    });




  //update page

  function render() {
    if (cocktailData) {
      $strDrink.text($strDrink.data);
      $strDrinkThumb.text($strDrinkThumb.data);
      $strInstructions.text($strInstructions.data);
    }
  }

};
console.log($strDrink);
