import React, {useState, useEffect} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './forms/Login'
import SignUp from './forms/SignUp'
import Home from './components/Home'
import NewDoctorForm from './forms/NewDoctorForm'
import NewReviewForm from './forms/NewReviewForm'
import UserShow from './components/UserShow'
import DoctorList from './containers/DoctorList'
import DoctorShow from './components/DoctorShow'
import ReviewList from './containers/ReviewList'
import ReviewShow from './components/ReviewShow'
import PracticeList from './containers/PracticeList'
import PracticeShow from './components/PracticeShow'

function App() {

    return (
    <div>
      <BrowserRouter>
                <Switch>
                    <Route exact path = "/" component={Login} />
                    <Route exact path= "/signup" component={SignUp} />
                    <Route exact path= "/home" component={Home} />
                    <Route exact path="/users/:id" component={UserShow} />
                    <Route exact path="/doctors" component={DoctorList} />
                    <Route exact path="/doctors/:id" component={DoctorShow} />
                    <Route exact path="/doctors/new" component={NewDoctorForm} />
                    <Route exact path="/reviews" component={ReviewList} />
                    <Route exact path="/reviews/:id" component={ReviewShow} />
                    <Route exact path="/reviews/new" component={NewReviewForm} />
                    <Route exact path="/practices" component={PracticeList} />
                    <Route exact path="/practices/:id" component={PracticeShow} />
                </Switch>
      </BrowserRouter>
    </div>
    )};

export default App;