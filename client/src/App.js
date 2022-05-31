import './App.css';
import React, { useEffect, useState }from "react"
import {Switch, Route} from 'react-router-dom'
import Login from "./Login"
import Question from "./Question"
import Answer from "./Answer"
import Navigation from "./Navigation"
import CreateCards from "./CreateCards"

function App() {
  const [deck, setDeck] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [card, setCard] = useState({})
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  function fetchDeck(){
    fetch('/cards')
    .then((resp) => resp.json())
    .then(setDeck);
  }
  
  useEffect(() => {
  
    fetchDeck();
    
    // fetch('http://localhost:3000/userInSession')
 
    //   .then((res) => res.json())
    //   .then((user) => {
    //        setIsAuthenticated(true)
    //        setUser(user);
    //   })
    fetch('/users/1')
    .then((res) => res.json())
    .then((user) => {
          setIsAuthenticated(true);
          setUser(user);
      })
   }, [])

  function findNewCard(){
    //console.log(deck)
    let userCards= []
    for (let i=0; i<deck.length; i++){
      if (deck[i].user_id === user.id){
        userCards.push(deck[i])
      }
    }
    let cardIndex = Math.floor(Math.random() * userCards.length)
    setCard(userCards[cardIndex])
  }

  // if (!isAuthenticated) return 
  //    <Login error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;

  return (
   <body>
     <Switch>
       <Route exact path="/">
         <Login setCard={setCard} findNewCard={findNewCard}setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user} setUsername={setUsername} setPassword={setPassword} username={username} password={password} />
       </Route>
       <Route exact path="/Question">
         <Question card={card} fetchDeck={fetchDeck} />
       </Route>
       <Route exact path="/Answer">
         <Answer card={card} fetchDeck={fetchDeck} setCard={setCard}findNewCard={findNewCard} setDeck={setDeck}/>
       </Route>
       <Route exact path="/Navigation">
         <Navigation findNewCard={findNewCard} fetchDeck={fetchDeck} setUser={setUser}/>
       </Route>
       <Route exact path="/CreateCards">
         <CreateCards user={user} fetchDeck={fetchDeck}/>
       </Route>
     </Switch>
    
   </body>
  );
}

export default App;

