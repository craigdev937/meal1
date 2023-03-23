import React from "react";
import { useParams } from "react-router-dom";
import { IData } from "../models/Interfaces";
const URL = "https://www.themealdb.com/api/json/v1/1/lookup.php";

export const Recipe = () => {
    let vId = "";
    const { recipeId } = useParams();
    const id = recipeId !== undefined ? String(recipeId) : "";
    const [item, setItem] = React.useState<IData>();

    if (id !== "") {
        fetch(`${URL}?i=${id}`)
        .then((res) => res.json())
        .then((data) => {
            setItem(data.meals[0]);
        })
    };

    if (item) {
        const url = item.strYoutube;
        const str = url.split("=");
        vId = str[str.length - 1];
    };

    return (
        <React.Fragment>
            {(!item) ? "" : (
                <React.Fragment>
                    <section className="recipe">
                        <img
                            className="recipe__image"
                            alt={item.strMeal}  
                            src={item.strMealThumb} 
                        />
                        <aside className="recipe__content">
                            <h1>{item.strMeal}</h1>
                            <h2>{item.strArea} Food</h2>
                            <h3>Category {item.strCategory}</h3>
                        </aside>
                    </section>
                    <section className="recipe__details">
                        <aside className="recipe__ingredients">
                            <h2>Ingredients</h2>
                            <h4>{item.strIngredient1} :{item.strMeasure1}</h4>
                            <h4>{item.strIngredient2} :{item.strMeasure2}</h4>
                            <h4>{item.strIngredient3} :{item.strMeasure3}</h4>
                            <h4>{item.strIngredient4} :{item.strMeasure4}</h4>
                            <h4>{item.strIngredient5} :{item.strMeasure5}</h4>
                            <h4>{item.strIngredient6} :{item.strMeasure6}</h4>
                            <h4>{item.strIngredient7} :{item.strMeasure7}</h4>
                            <h4>{item.strIngredient8} :{item.strMeasure8}</h4>
                            <h4>{item.strIngredient9} :{item.strMeasure9}</h4>
                            <h4>{item.strIngredient10} :{item.strMeasure10}</h4>
                        </aside>
                        <aside className="recipe__instructions">
                            <h2>Instructions</h2><br />
                            <h4>{item.strInstructions}</h4>
                        </aside>
                        <aside className="recipe__video">
                            <iframe 
                                className="recipe__iframe"
                                src={`https://www.youtube.com/embed/${vId}`} 
                            />
                        </aside>
                    </section>
                </React.Fragment>
            )}
        </React.Fragment>
    )
};


