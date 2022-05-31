import React, {useState} from "react";
import {NavLink} from 'react-router-dom'

function CreateCards({user, fetchDeck}){
const [category, setCategory] = useState("")
const [question, setQuestion] = useState("")
const [answer, setAnswer] = useState("")
    
    function handleSubmit(e){
        e.preventDefault()
        const card = {
            question: question,
            answer: answer,
            category_id: category,
            user_id: user.id,
            count: 0,
        }

        fetch(`http://localhost:3000/cards`,{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(card)
          })
          .then(res => res.json())
          .then(res => console.log(res))
          
    }


    return (
        <body>
            <h1>Panki</h1>
            <h2>Create a Card</h2>
            <form onSubmit={handleSubmit}>
                <h2>Question</h2>
                <input className="cardInput"type="text" value={question} onChange={(e) => setQuestion(e.target.value)}/>
                <h2>Answer</h2>
                <input className="cardInput" type="text" value={answer} onChange={(e) => setAnswer(e.target.value)}/>
                <h2>Category</h2>
                <select className="cardInput" id="chooseCategory" type="text" value={category}
                onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select a Category</option>
                    <option value='1'>Science</option>
                    <option value='4'>History</option>
                    <option value='2'>Math</option>
                    <option value='3'>Sports</option>
                    <option value='5'>Miscellaneous</option>
                </select>
                <button id="cardSubmit" type="submit" onSubmit={handleSubmit}>Submit</button>
            </form>
            <div></div>
            <NavLink id="doneMaking" onClick={fetchDeck} exact to ="/Navigation">Done</NavLink>
        </body>
    )

}

export default CreateCards