import React from 'react'
import {Link, useHistory} from 'react-router-dom'

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
            <a>
                <h1>
                    <Link to="/home" style={{color: "black"}}>The Curtain Room</Link>
                </h1>
            </a>
            <div>
                <h2>
                    <div>
                        <Link to="/practices" style={{color: "black"}}>Practices</Link>
                    </div>
                </h2>
            </div>
            <div>
                <h2>
                    <div>
                        <Link to="/reviews/new" style={{color: "black"}}>Write Review</Link>
                    </div>
                </h2>
            </div>
            <div>
                <h2>
                    <div>
                        <Link to="/doctors/new" style={{color: "black"}}>Add Doctor </Link>
                    </div>
                </h2>
            </div>
            <div>
                <h2>
                    <div>
                        <Link to={`/user/${props.userid}`} style={{color: "black"}}>Profile</Link>
                    </div>
                </h2>
            </div>
            <div>
                <h4>
                        <button onClick={logout}>Logout</button>
                </h4>
            </div>
        </div>
    )
}