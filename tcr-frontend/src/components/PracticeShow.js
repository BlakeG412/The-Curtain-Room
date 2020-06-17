import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import DoctorCard from './DoctorCard'

export default function PracticeShow(){

    const params = useParams()

    let [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/doctors', {
            credentials: 'include',
            method: 'GET'
        })
        .then(res => res.json())
        .then(doctorsData => {
            let currentDoctors = doctorsData.filter(doctor => doctor.practice.id === parseInt(params.id))
            setDoctors(currentDoctors)
        })
    }, [])

    useEffect(() => {
        fetch('http://localhost:3000/practices', {
            credentials: 'include',
            method: 'GET'
        })
        .then(res => res.json())
        .then(practices => {
 
        })
    })

    return(
        <div>{doctors.map(doctor => <DoctorCard doctor={doctor} key={doctor.id}/>)}</div>
    )
}