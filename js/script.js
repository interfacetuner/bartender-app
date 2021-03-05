let cocktailData;
// let endpoint;
//----constants----
//const Base_URL='https://www.thecocktaildb.com/api/json/v1/1/l';

const drink = $(`#cocktail`);
const drinkThumb = $(`#thumbnail`);
const instruct = $(`#instructions`);
const input = $(`input[type="text"]`);
//const image = 'https://www.thecocktaildb.com/images/media/drink/.jpg';



//functions         //any event
$('.search').on('submit', handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault(); //stop default browser from refresh

  //endpoint = this.cocktailData === '#cocktail.php?s' ? '#thumbnail.php?s' : '#instructions.php?s'

  const term = $(`input`).val(); //user input

  $(`input`).val(""); //remove user input

  $.ajax("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + term)
    .then(function (data) {
      console.log('cocktail Data ', data);
      cocktailData = data;
      render();
    }, function (error) {
      console.log('Error ', error);

    });

  // let img = document.createElement('img');
  //   img.src = 'http://www.thecocktaildb.com/images/ingredients/ice-small.png';
  //   drinkThumb.appendChild(img);

  // var img = document.createElement('img');
  // img.src = 'http://www.thecocktaildb.com/images/ingredients/ice-small.png';
  // result.appendChild(img);

  //update page
  function render() {
    drink.text(cocktailData.drinks[1].strDrink);
    drinkThumb.text(cocktailData.drinks[1].strDrinkThumb);
    instruct.text(cocktailData.drinks[1].strInstructions);

  }

};
//console.log(cocktailData);

//http:www.thecocktaildb.com/images/ingredients/ice-Medium.png
