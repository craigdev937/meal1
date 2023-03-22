import React from "react";
import { MealItems } from "../components/MealItems";
import { RecipeItems } from "../components/RecipeItems";
import { IData } from "../models/Interfaces";
const URL = "https://www.themealdb.com/api/json/v1/1/search.php";

export const Meals = () => {
    const [url, setUrl] = React.useState(URL);
    const [item, setItem] = React.useState<IData[]>([]);
    const [show, setShow] = React.useState(false);
    const [search, setSearch] = React.useState("");

    React.useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setItem(data.meals);
                setShow(true);
            }).catch((error) => console.log(error));
    }, [url]);

    const setIndex = (alpha: string) => {
        setUrl(`${URL}?f=${alpha}`);
    };

    const searchRecipe = 
    (event: any) => {
        setUrl(`${URL}?s=${search}`);
        setSearch(event.target.value);
    };

    return (
        <React.Fragment>
            <main className="main">
                <section className="main__heading">
                    <h1>Good Meals</h1>
                    <h4>Delicious food is just a click away.  
                        Come see what we have...😋</h4>
                </section>
                <section className="search">
                    <input 
                        className="search__bar"
                        type="search" 
                        onChange={searchRecipe}
                    />
                </section>
                <section className="container">
                    {
                        show ? 
                            <MealItems data={item} /> : 
                            "Not Found!"
                    }
                </section>
                <section className="indexContainer">
                    <RecipeItems 
                        alphaIndex={(alpha: string) => 
                            setIndex(alpha)}
                    />
                </section>
            </main>
        </React.Fragment>
    );
};


