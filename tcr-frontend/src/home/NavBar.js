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
            <a href={"/home"}>
                <h2>
                    <div>The Curtain Room</div>
                </h2>
            </a>
            <div>
            <h2>
                <div>
                    <Link to="/home" style={{color: "black"}}>Home</Link>
                </div>
            </h2>
            </div>
            <div className="item">
            <h2 className="ui header">
                <div className="content">
                    <Link to="/practices" style={{color: "black"}}>Practices</Link>
                </div>
            </h2>
            </div>
            <div>
                <h2>
                    <div>
                        <Link to={`/users/${props.userid}`} style={{color: "black"}}>Profile</Link>
                    </div>
                </h2>
            </div>
            <div>
                <h2>
                    <div>
                        <Link to="/review/new" style={{color: "black"}}>New Review</Link>
                    </div>
                </h2>
            </div>
            <div>
            <h2>
                <div>
                   <button onClick={logout}>Logout</button>
                </div>
            </h2>
            </div>
        </div>
    )
}