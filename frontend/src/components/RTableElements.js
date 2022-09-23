import React from "react";
import './RecipeIndex.css'

function RTableElements({name, calories, protein, carb, fat}) {


    return (
        <div>
            <img className='image' src="/image/chickenfriedrice.jpg" alt="Picture goes here" />
            <p> Name: {name} </p>
            <p> Calories: {calories}g</p>
            <p> Protein: {protein}g</p>
            <p> Carb: {carb}g</p>
            <p> Fat: {fat}g</p>
        </div>
    );
}

export default RTableElements