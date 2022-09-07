import React from 'react';
import PropTypes from 'prop-types';
import './RecipeIndex.css';

function Button({text, onClick, classname}) {

    return (
        <button className={classname} onClick={onClick}> {text} </button>
    );
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired
}


export default Button;