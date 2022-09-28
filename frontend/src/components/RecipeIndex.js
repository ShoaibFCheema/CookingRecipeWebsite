import React from 'react';
import Button from './Button';
import RTableElements from './RTableElements';

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './RecipeIndex.css'
import axios from "axios";

function RecipeIndex() {

    const navigate = useNavigate();

    const [data, setData] = useState(null);

    const[givenRecipe, setNewRecipe] = useState({});

    React.useEffect(() => {
        axios.get("http://localhost:5000/api")
            .then(res => {
                setData(res.data);
            })
    }, []);

    function mainPageClicked() {
        navigate("/")
    }

    async function sendData(e) {
        e.preventDefault();

        await axios.post("http://localhost:5000/api", givenRecipe)
            .then(res => {
                if (res.data) {
                    setData([... data, givenRecipe]);
                }
                console.log(false, "Error occurred");
            });
        
        setNewRecipe({});
    }

    function handleChange(e) {
        e.preventDefault();
        let newElement = {};
        let key = e.target.name;
        let value = e.target.value;
        if (key != "recipe_name") {
            value = parseInt(value);
        }
        newElement={
            [key]:value
        };
        setNewRecipe({
            ...givenRecipe,
            ...newElement
        });
    }

    return(
        <div id="maindiv">
            <h1 style={{textAlign: 'center', fontFamily: 'sans-serif', color: 'white'}} className="item1">Recipe Index</h1>
            <Button classname="Button" text="Main Page" onClick={mainPageClicked} />
            
            <section id="mainsection">
                
                <section id="recipeaddsection">
                    <article id="formarticle">
                        <form>
                            <label>
                                Recipe Name:
                                <input type="text" name="recipe_name" onChange={e => handleChange(e)}/>
                            </label>
                            <label>
                                # of Calories:
                                <input type="number" name="calorie_count" onChange={e => handleChange(e)}/>
                            </label>
                            <label>
                                # of Protein:
                                <input type="number" name="protein_count" onChange={e => handleChange(e)}/>
                            </label>
                            <label>
                                # of Carbohydrates:
                                <input type="number" name="carb_count" onChange={e => handleChange(e)}/>
                            </label>
                            <label>
                                # of Fats:
                                <input type="number" name="fat_count" onChange={e => handleChange(e)}/>
                            </label>
                            <Button classname="Button" text="Add Recipe" onClick={e => sendData(e)} />
                        </form>
                    </article>
                </section>

                <section id="recipesection">
                {  
                    data && data.map(recipes => {
                            return(
                                    <article id="recipearticle">
                                        <RTableElements name={recipes.recipe_name} 
                                            calories={recipes.calorie_count} 
                                            protein={recipes.protein_count}
                                            carb={recipes.carb_count}
                                            fat={recipes.fat_count}
                                        />
                                    </article>
                            )
                    })
                }
                </section>
            </section>
        </div>
    );

}
export default RecipeIndex;