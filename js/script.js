//cached element refs/// selected dom elements
const $strType = $(`#cocktail`);
const $strIngredients = $(`#ingredients`);
const $strDescription = $(`#Description`);
const $input = $(`input[type="text"]`);
const $usrInput = $(`newFunction()`)

function newFunction() {
  return (`$strType`);



  //functions         //any event

  function handleSubmit(evt) {
    evt.preventDefault(); //stop default browser from refresh

    const term = $input.val(); //user input

    $input.val(""); //remove user input

    $.ajax("https://www.thecocktaildb.com/api/json/v1/1/https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka" + term)
      .then(function (evt) {
        console.log('Cocktail Data ', data);

        render();
      }, function (error) {
        console.log('Error ', error);
      })

  };

  //let $strType;

  //update page 
  function render() {
    if (strType) {
      $strType.text($strType.data);
      $strIngredients.text($strIngredients.data);
      $strDescription.text($strDescription.data);
    }
  }
  console.log(strType);
};
