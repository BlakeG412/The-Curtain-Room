import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './forms/Login'
import SignUp from './forms/SignUp'
import DefaultPage from './components/DefaultPage'

function App() {

    return (
    <div>
      <BrowserRouter>
                <Switch>
                    <Route exact path = "/" component={Login} />
                    <Route exact path= "/signup" component={SignUp} />
                    <DefaultPage />
                </Switch>
      </BrowserRouter>
    </div>
    )};

export default App;