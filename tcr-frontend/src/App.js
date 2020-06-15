import React, {useState, useEffect} from 'react';
import Login from './forms/Login';
import SignUp from './forms/SignUp';
import UserShow from './components/UserShow'
import Home from './components/Home';
// import NavBar from './components/NavBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DoctorList from './containers/DoctorList'
import DoctorShow from './components/DoctorShow'
import DoctorCard from './components/DoctorCard'
import PracticeList from './containers/PracticeList'

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
            console.log(doctors)
            setDoctors(doctors)
        })
    })

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
                    <Route exact path="/doctor/:id" component={() => <DoctorShow doctors={doctors}/>} />
                    <Route exact path="/doctorCard/:id" component={() => <DoctorCard doctors={doctors}/>} />
                    <Route exact path="/practices" component={PracticeList} />
                </Switch>
      </BrowserRouter>
    </div>
    )};

export default App;