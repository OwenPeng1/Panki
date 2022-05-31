import React, {useState} from 'react'

function Create({setUser, setIsAuthenticated}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState([])

    function handleSubmit(e){
        e.preventDefault()
        const user = {
            username: username,
            password: password
        }
       
        fetch(`/users`,{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
          body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(user=>{
              console.log(user)
            }) 
        }

    return(
      <body> 
        <form onSubmit= {handleSubmit}>
            <h1>Create User</h1>
            <div id="InputLabels">
                <span id="usernameCreate">Username</span>
                <span id="passwordCreate">Password</span>
            </div>
        
            <input id="userCreateInput" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input id="passCreateInput" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="submit" id="createUser"  value="Create User" />
        </form>
        { Object.keys(errors) ? Object.keys(errors).map((key, index) => <div>{key+': ' + Object.values(errors)[index]}</div>) : null }
    </body>
    
    )

}

export default Create