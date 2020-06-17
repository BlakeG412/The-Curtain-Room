import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
  
export default function Login(props) {

    let [ user, changeUser ] = useState({
        username: '',
        password: ''
    })

    const history = useHistory();

    function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:3000/login', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: user.username,
                password: user.password
            })
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
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
            <h1>Login</h1>
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
            Don't have an account?
            <Link to="/signup">SignUp</Link>
        </div>
        </div>
    )
}