import React from "react";
import './RTableElements.css'


function RTableElements({name, calories, protein, carb, fat}) {


    return (
        <div id="elementdiv">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <img src="/image/chickenfriedrice.jpg" alt="rice" />
                        </td>
                    </tr>
                    <tr>
                        <td> 
                            Name: {name} 
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Calories: {calories}g 
                        </td>
                    </tr>
                    <tr> 
                        <td>
                            Protein: {protein}g
                        </td>
                    </tr>
                    <tr> 
                        <td>
                            Carb: {carb}g
                        </td>
                    </tr>
                    <tr>
                        <td> 
                            Fat: {fat}g
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default RTableElements