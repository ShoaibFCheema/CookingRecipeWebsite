import React from "react";
import Recipe from "./Recipe";

function List() {
    const recipes = [
        {
            id: 1,
            name: "recipe1",
            protein: 20
        },
        {
            id: 2,
            name: "recipe2",
            protein: 30
        }
    ]

    const recipeList = recipes.map(rec =>  (
        <h2>
            <Recipe name={rec.name} protein={rec.protein} />
        </h2>
    ))

    return (
        <div>
            {recipeList}
        </div>
    )
}

export default List;