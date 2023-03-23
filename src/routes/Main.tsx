import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { NotFound } from "../components/NotFound";
import { Meals } from "../pages/Meals";
import { Recipe } from "../pages/Recipe";

const ReactRouter = createBrowserRouter([
    {
        path: "/",
        element: <Meals />,
        errorElement: <NotFound />
    },
    {
        path: "/:recipeId",
        element: <Recipe />,
        errorElement: <NotFound />
    }
]);

export const Main = () => {
    return (
        <React.Fragment>
            <RouterProvider router={ReactRouter} />
        </React.Fragment>
    );
};


