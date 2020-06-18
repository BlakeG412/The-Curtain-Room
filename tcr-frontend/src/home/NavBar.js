import React from 'react'
import {useHistory} from 'react-router-dom'
import myStyles from '../components/myStyles.css'

export default function NavBar(props){

    const history = useHistory()

    let logout = () => {
        fetch('http://localhost:3000/logout', {
            credentials: 'include',
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            let { success, id } = response
            if(!success){
                props.setUserid(id)
                history.push(`/`)
            }
        })
    }
    
    return(
        <div>
            <ul>
                <li><a href="/home">The Curtain Room</a></li>
                <li><a href="/practices">Practices</a></li>
                <li><a href="/doctors">Doctors</a></li>
                <li><a href="/reviews/new">Write Review</a></li>
                <li><a href="/doctors/new">Add Doctor</a></li>
                <li><a href={`/user/${props.userid}`}>Profile</a></li>
                <li style={{float:"right"}}><a onClick={logout}>Logout</a></li>
            </ul>
            
            {/* <div>
                <h4>
                        <button onClick={logout}>Logout</button>
                </h4>
            </div> */}
        </div>
    )
}