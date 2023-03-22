import React from "react";
import { useNavigate } from "react-router-dom";
import { IData } from "../models/Interfaces";

type IDA = {
    data: IData[]
};

export const MealItems = ({ data }: IDA) => {
    const navigate = useNavigate();

    return (
        <React.Fragment>
            {(!data) ? "Not Found" : data.map((item) => (
                (
                    <section 
                        className="card"
                        key={item.idMeal}
                        onClick={() => {
                            navigate(`/${item.idMeal}`)}}
                    >
                        <img
                            className="card__image"
                            alt={item.strMeal}  
                            src={item.strMealThumb}
                        />
                        <h3>{item.strMeal}</h3>
                    </section>
                )
            ))}
        </React.Fragment>
    );
};


