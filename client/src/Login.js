import React, {useState} from "react";
import {NavLink} from 'react-router-dom'
import Create from './Create'

function Login({setUser, setIsAuthenticated,username, password, setUsername, setPassword, findNewCard, setCard, card}){
    
    const [error, setError] = useState([])

    function handleSubmit(e){
        e.preventDefault()
        const user = {
            username: username,
            password: password
        }

        fetch('/login',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
          })
          .then(res => {res.json()})
          .then(user=>{
                setUser(user)
                setIsAuthenticated(true)
                
              })
            
            }
    
    return(
        <body>
            <h1>Login</h1>
            <div id="InputLabels">
                <span id="username">Username</span>
                <span id="password">Password</span>
            </div>
            <input id="usernameInput" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input id="passwordInput" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <NavLink id="loginUser" exact to ="/Navigation" onSubmit={(handleSubmit)}>
                Login
            </NavLink>
            {error?<div>{error}</div>:null}
            <Create setUser={setUser} setIsAuthenticated={setUser}/>
        </body>    
      
    )
}

export default Login