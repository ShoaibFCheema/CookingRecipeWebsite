import React from "react";
import "./RecipeIndex.css";

function Recipe({name, protein, url}) {

    return (
        <div>
            <a href={url} target="blank_">
                <h2 className>
                    {name} <br></br>Protein {protein}g
                </h2>
            </a>
        </div>
    )
}

export default Recipe;