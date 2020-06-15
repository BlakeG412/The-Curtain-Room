import React from 'react'
import DoctorCard from '../components/DoctorCard'


export default function DoctorList(props) {

    return(
        <div>
            <label>All Doctors</label>
            <div>{props.doctors.map((doctor) => <DoctorCard doctor={doctor}/>)}</div>
        </div>
    )
}