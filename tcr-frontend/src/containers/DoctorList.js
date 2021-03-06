import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import DoctorCard from '../components/DoctorCard'

export default function DoctorList() {

    const history = useHistory()

    let [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/doctors', {
            method: 'GET',
            credentials: 'include',
        })
        .then(res => res.json())
        .then(doctors => {
            setDoctors(doctors)
        })
    }, [])

    return(
        <div>
            <h1 class="center">Doctors:</h1>
            <div>{doctors.map((doctor) => <DoctorCard doctor={doctor} key={doctor.id}/>)}</div>
        </div>
    )
}