import React, {useEffect, useState} from "react";
import {NavLink} from 'react-router-dom'

function Question({card}){
    console.log(card)
    if (!card) return(
        <body>
            <h1 className = "title" id="questionTitle"> Panki</h1>
            <h1> Congratulations! You Have Finished Studying</h1>
            <NavLink exact to= "/Navigation"> Done</NavLink>
        </body>
    )
    return(
        <body>
            <h1 className = "title" id="questionTitle"> Panki</h1>
            <h1 id = "questionBody"> {card.question}</h1>
            <NavLink exact to ="/Answer" className="cardButton" id="showButton">Show Answer</NavLink>
        
        </body>
    )
}

export default Question