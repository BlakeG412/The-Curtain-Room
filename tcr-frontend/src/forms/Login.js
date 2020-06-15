import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
// import SignUp from './SignUp'
// import Home from '../components/Home'

  
export default function Login(props) {

    const [ user, changeUser ] = useState({
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
                history.push(`/home`)
        }
        //     let { success, id, token } = userInfo
        //     if(success){
        //         localStorage.setItem('token', token)
        //         props.history.push(`/users/${id}`)
            // localStorage.setItem("token", userInfo.token)
            // console.log(userInfo.token)
            // if(localStorage.token === userInfo.token){
            // localStorage.setItem("currentUserUsername", userInfo.user.username)                   
            // localStorage.setItem("currentUserId", userInfo.user.id) 
            // }
            // if(localStorage.token === userInfo.token){
            //     props.checkToken()
            //     props.history.history.push('/home')
            // }else{
            //     alert('Password or email is invalided')
            // }
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