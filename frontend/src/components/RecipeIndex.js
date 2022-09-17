import React from 'react';
import Button from './Button';
//import List from './List';
//import Recipe from './Recipe';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './RecipeIndex.css'
import axios from "axios";

function RecipeIndex() {

    const navigate = useNavigate();

    const [data, setData] = useState(null);

    React.useEffect(() => {
        axios.get("http://localhost:5000/api")
            .then(res => {
                setData(res.data);
            })
    }, []);

    function mainPageClicked() {
        navigate("/")
    }

    async function sendData() {
        const datatest = {
            "recipe_name": "This was not added from frontend",
            "protein_count": 100,
            "carb_count": 1000,
            "fat_count": 25,
            "calorie_count": 21
        }

        let stop = null;
        await axios.post("http://localhost:5000/api", datatest)
            .then(res => {
                if (res.data) {
                    setData([... data, datatest]);
                }
            });
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