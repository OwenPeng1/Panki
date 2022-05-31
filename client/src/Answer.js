import React, {useState} from "react";
import {NavLink} from 'react-router-dom'

function Answer({card,setDeck, fetchDeck, findNewCard}){

function handleCorrect(e){
    e.preventDefault()
    if (card.count===0){
        fetch(`/cards/${card.id}`, {
            method: 'PATCH',
            body: JSON.stringify({
            count: 1,
             }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
        .then((response) => response.json())
        .then((json) => {console.log(json)
            //card.count++
            fetch('/cards')
            .then((resp) => resp.json())
            .then(setDeck);
        });
    
    

    }
    if (card.count===1){
        fetch(`/cards/${card.id}`, {
            method: 'DELETE'
                })
        .then((response) => response.json())
        .then((json) => {console.log(json)
        },
        fetch('/cards')
        .then((resp) => resp.json())
        .then(setDeck)
        );
    
    }
   

}

function handleIncorrect(e){
    e.preventDefault()
    fetch(`/cards/${card.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
        count: 0,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => {console.log(json)
    card.count=0   
    fetchDeck() 
});

    

}

    return(
        <body>
             <h1 className = "title" id="questionTitle"> Panki</h1>
            <h1 id = "questionBody"> {card.answer}</h1>
            <button  onClick = {handleCorrect} className = "answerButton" id="correctButton"> Correct</button>
            <button  onClick = {handleIncorrect} className = "answerButton" id="incorrectButton"> Incorrect</button>
            <div></div>
            <NavLink exact to ="/Question" className="cardButton" onClick = {findNewCard}>Next Card</NavLink>
            <div></div>
            <NavLink exact to ="/Navigation" className="cardButton">Done Studying</NavLink>
            
        </body>
    )

}

export default Answer