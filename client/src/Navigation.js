import React, {useState} from "react";
import {NavLink} from 'react-router-dom'

function Navigation({findNewCard, setUser}){


    return(
        <body>
            <h1>Panki</h1>
            <NavLink onClick={findNewCard} exact to ="/Question" className="navButton"> Start Studying</NavLink>
            <div></div>
            <NavLink exact to ="/CreateCards" className="navButton"> Create Cards</NavLink>
            <div></div>
            <NavLink exact to= "/" id="logout">Logout</NavLink>
        </body>
    )

}

export default Navigation