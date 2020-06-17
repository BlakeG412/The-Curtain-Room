import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar(props){

    let logout = () => {
        localStorage.clear()
    }
    
    return(
        <div className="ui inverted red menu">
            <a className="item" href={"/home"}>
            <h2 className="ui header">
            <div className="content">The Curtain Room</div>
            </h2>
            </a>
            <div className="item">
            <h2 className="ui header">
                <div className="content">
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
            <div className="item">
                <h2 className="ui header">
                    <div className="content">
                        <Link to="/user/:id" style={{color: "black"}}>Profile</Link>
                    </div>
                </h2>
            </div>
            <div className="item">
            <h2 className="ui header">
                <div className="content">
                   <button onClick={logout}>Logout</button>
                </div>
            </h2>
            </div>
            
        </div>
    )
}