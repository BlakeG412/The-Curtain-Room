import React, {useState, useEffect} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './forms/Login'
import SignUp from './forms/SignUp'
import UserShow from './components/UserShow'
import Home from './components/Home'
import DoctorList from './containers/DoctorList'
import DoctorShow from './components/DoctorShow'
// import DoctorCard from './components/DoctorCard'
import PracticeList from './containers/PracticeList'
import NewDoctorForm from './forms/NewDoctorForm'
import NewReviewForm from './forms/NewReviewForm'
import ReviewList from './containers/ReviewList'
import ReviewShow from './components/ReviewShow'

function App() {

    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/doctors', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
        .then(res => res.json())
        .then(doctors => {
            setDoctors(doctors)
        })
    }, [])

    return (
    <div>
      <BrowserRouter>
                {/* <NavBar /> */}
                <Switch>
                    <Route exact path = "/" component={Login} />
                    <Route exact path= "/signup" component={SignUp} />
                    <Route exact path= "/home" component={Home} />
                    <Route exact path="/users/:id" component={UserShow} />
                    <Route exact path="/doctors" component={() => <DoctorList doctors={doctors}/>} />
                    <Route exact path="/doctors/:id" component={() => <DoctorShow doctors={doctors}/>} />
                    {/* <Route exact path="/doctorCard/:id" component={() => <DoctorCard doctors={doctors}/>} /> */}
                    <Route exact path="/doctors/new" component={NewDoctorForm} />
                    <Route exact path="/practices" component={PracticeList} />
                    <Route exact path="/reviews" component={ReviewList} />
                    <Route exact path="/reviews/:id" component={ReviewShow} />
                    <Route exact path="/reviews/new" component={NewReviewForm} />
                </Switch>
      </BrowserRouter>
    </div>
    )};

export default App;