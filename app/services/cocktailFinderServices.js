const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const getCocktails = criteria => {
  return fetch(apiUrl + criteria)
    .then(res => res.json())
    .then(data =>
      (data.drinks || []).map(d => {
        return {id: d.idDrink, name: d.strDrink, img: d.strDrinkThumb};
      }),
    );
};
