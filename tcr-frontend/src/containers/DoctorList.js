import React, {useState, useEffect} from 'react'
import DoctorCard from '../components/DoctorCard'

export default function DoctorList() {

    const [doctors, setDoctors] = useState([])

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
            <label>All Doctors</label>
            <div>{doctors.map((doctor) => <DoctorCard doctor={doctor} key={doctor.id}/>)}</div>
        </div>
    )
}