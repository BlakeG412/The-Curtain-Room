import React, {useState, useEffect} from 'react'
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom'
import Login from './forms/Login'
import SignUp from './forms/SignUp'
import DefaultPage from './components/DefaultPage'

function App() {

    const history = useHistory()

    let [userid, setUserid] = useState(null)

    useEffect(() => {
      fetch('http://localhost:3000/getuser', {
        credentials: 'include',
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(currentUser => {
        let { success, id } = currentUser
            if(success){
              setUserid(id)
            }
      })
    }, [])

    return (
    <div>
      <BrowserRouter>
                <Switch>
                    <Route exact path = "/" component={() => <Login setUserid={setUserid} userid={userid}/>} />
                    <Route exact path = "/login" component={() => <Login setUserid={setUserid} userid={userid}/>} />
                    <Route exact path= "/signup" component={() => <SignUp setUserid={setUserid}/>} />
                    {userid?<DefaultPage userid={userid} setUserid={setUserid}/>:''}
                </Switch>
      </BrowserRouter>
    </div>
    )};

export default App;