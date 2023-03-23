export interface IData {
    idMeal: string,
    strMeal: string,
    strDrinkAlternate: null,
    strCategory: string,
    strArea: string,
    strInstructions: string,
    strMealThumb: string,
    strTags: string,
    strYoutube: string,
    strIngredient1: string, strMeasure1: string,
    strIngredient2: string, strMeasure2: string,
    strIngredient3: string, strMeasure3: string,
    strIngredient4: string, strMeasure4: string,
    strIngredient5: string, strMeasure5: string,
    strIngredient6: string, strMeasure6: string,
    strIngredient7: string, strMeasure7: string,
    strIngredient8: string, strMeasure8: string,
    strIngredient9: string, strMeasure9: string,
    strIngredient10: string, strMeasure10: string
};

export interface IDataState {
    data: IData[],
    loading: boolean,
    error: Error | null
};


