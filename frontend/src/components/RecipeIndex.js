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
            <h1 style={{textAlign: 'center'}} className="item1">Recipe Index</h1>
            <Button classname="Button" text="Main Page" onClick={mainPageClicked} />
            <Button classname="Button" text="Add Recipe" onClick={sendData} />
            <table className='table'>
                <tbody>
                    <tr>
                {
                    data && data.map(recipes => {
                        return(
                                <td className='td'>
                                    <RTableElements name={recipes.recipe_name} 
                                        calories={recipes.calorie_count} 
                                        protein={recipes.protein_count}
                                        carb={recipes.carb_count}
                                        fat={recipes.fat_count}
                                    />
                                </td>
                        )
                    })
                }
                    </tr>
                </tbody>
            </table>
        </div>
    );

}
export default RecipeIndex;