import React from 'react';
import Button from './Button';
//import List from './List';
//import Recipe from './Recipe';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './RecipeIndex.css'

function RecipeIndex() {

    const navigate = useNavigate();

    const [data, setData] = useState(null);

    React.useEffect(() => {
        fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data));
    }, []);

    function mainPageClicked() {
        navigate("/")
    }

    async function sendData() {
        const datatest = {
            "recipe_name": "This was added from frontend",
            "protein_count": 100,
            "carb_count": 1000,
            "fat_count": 25,
            "calorie_count": 2000
        }

        await fetch("/api", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'no-cors',
            body: JSON.stringify(datatest)
        })

        setData(prev => [...prev, datatest])
    }

    return(
        <div className='flex-container'>
            <Button classname="Button" text="Add Recipe" onClick={sendData} />
            <h1 style={{textAlign: 'center'}} className="item1">Recipe Index</h1>
            <Button classname="Button" text="Main Page" onClick={mainPageClicked} />
            <table className='table'>
                <tbody>
                    <tr>
                        <td className='td'>
                            <b>Recipes</b>
                        </td>
                        <td className='td'>
                            <b>Name</b>
                        </td>
                        <td className='td'>
                            <b>Protein</b>
                        </td>
                    </tr>
                {
                    data && data.map(recipes => {
                        return(
                            <tr key={recipes.id}>
                                <td className='td'>
                                    <img  alt={recipes.recipe_name} className="image" />
                                </td>
                                <td className='td'>
                                    <p>{recipes.recipe_name}</p>
                                </td>
                                <td className='td'>
                                    <p>{recipes.protein_count}g</p>
                                </td>
                             </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );

}
export default RecipeIndex;