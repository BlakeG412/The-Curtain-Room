import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../home/Home'
import NewDoctorForm from '../forms/NewDoctorForm'
import NewReviewForm from '../forms/NewReviewForm'
import UserShow from './UserShow'
import DoctorList from '../containers/DoctorList'
import DoctorShow from './DoctorShow'
import ReviewList from '../containers/ReviewList'
import ReviewShow from './ReviewShow'
import PracticeList from '../containers/PracticeList'
import PracticeShow from './PracticeShow'
import NavBar from '../home/NavBar'

export default function DefaultPage(props) {

    return (
    <div>
        <NavBar />
                <Switch>
                    <Route exact path= "/home" component={Home} />
                    <Route exact path="/users/:id" component={UserShow} />
                    <Route exact path="/doctors" component={DoctorList} />
                    <Route exact path="/doctors/:id" component={DoctorShow} />
                    <Route exact path="/doctor/new" component={NewDoctorForm} />
                    <Route exact path="/reviews" component={ReviewList} />
                    <Route exact path="/reviews/:id" component={() => <ReviewShow userid={props.userid}/>} />
                    <Route exact path="/review/new" component={NewReviewForm} />
                    <Route exact path="/practices" component={PracticeList} />
                    <Route exact path="/practices/:id" component={PracticeShow} />
                </Switch>
    </div>
    )};