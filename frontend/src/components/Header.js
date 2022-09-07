import React, { useEffect } from 'react';
import Button from './Button';
import List from './List';
import { useNavigate, Link } from "react-router-dom";
import './Header.css'

function Header() {

    const navigate = useNavigate();

    function mainPageClicked() {
        navigate("/")
    }

    function recipeIndexClicked() {              
        navigate("/RecipeIndex")
    }

    return (
        <div className='grid-container'>
            <div className='heading'>
                <h1 className='h1'> Cooking Recipes </h1>
            </div>
            <div className='nav'>
                <Button classname="Button" text="Main Page" onClick={mainPageClicked} />
                <Button classname="Button" text="Recipe Index" onClick={recipeIndexClicked} />
            </div>
            <div className='pic1'>
                <img src="/image/chickenfriedrice.jpg"/>
            </div>
            <div className='body'>
                <p className='h1'>
                    Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat. It is often eaten by itself or as an accompaniment to another dish.
                </p>
            </div>
            <div className='pic2'>
                <img src="/image/chickenfriedrice.jpg"/>
            </div>
            <div className='body2'>
                <p className="h1">
                Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat. It is often eaten by itself or as an accompaniment to another dish.
                </p>
            </div>
            <div className='pic3'>
                <img src="/image/chickenfriedrice.jpg"/>
            </div>
            <div className='body3'>
                <p className="h1">
                Fried rice is a dish of cooked rice that has been stir-fried in a wok or a frying pan and is usually mixed with other ingredients such as eggs, vegetables, seafood, or meat. It is often eaten by itself or as an accompaniment to another dish.
                </p>
            </div>
        </div>
    );
}

export default Header;