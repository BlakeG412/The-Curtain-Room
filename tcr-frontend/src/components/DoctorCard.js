import React from 'react'
import DoctorShow from './DoctorShow'

export default function DoctorCard(props) {

    return(
        <div>
        <h1>
            {props.doctor.lastname}, {props.doctor.firstname}
        </h1>
        {/* <h4>{props.doctor.office.city}, {props.doctor.office.state}</h4> */}
        <h4>{props.doctor.phone_number}</h4>
        {/* <h4>{props.doctor.practice}</h4> */}
        </div>
    )
}