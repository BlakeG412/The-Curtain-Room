import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
  
export default function SignUp(props) {

    let [ user, changeUser ] = useState({
        firstname: '',
        lastname: '',
        age: '',
        username: '',
        password: ''
    })

    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:3000/users', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: user.firstname,
                lastname: user.lastname,
                age: user.age,
                username: user.username,
                password: user.password
            })
        })
        .then(response =>  response.json())
        .then(response => {
            let { success, id } = response
            if(success){
                props.setUserid(id)
                history.push(`/home`)
            }
        })
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <h1>SignUp</h1>
            <div>
              <label>First Name:</label>
              <input type="text" value={user.firstname} onChange={e => changeUser({ ...user, firstname: e.target.value})} />
            </div>
            <div>
              <label>Last Name:</label>
              <input type="text" value={user.lastname} onChange={e => changeUser({ ...user, lastname: e.target.value})} />
            </div>
            <div>
              <label>Age:</label>
              <input type="text" value={user.age} onChange={e => changeUser({ ...user, age: e.target.value})} />
            </div>
            <div>
                <label>Username:</label>
                <input type="text" value={user.username} onChange={ e => changeUser({ ...user, username: e.target.value })} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={user.password} onChange={ e => changeUser({ ...user, password: e.target.value })} />
            </div>
            <input type="submit" />
        </form>
        <div>
              Already have an account?
            <Link to="/">Login</Link>
        </div>
        </div>
        
    )
}