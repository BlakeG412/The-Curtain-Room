import React from 'react'
import DoctorShow from './DoctorShow'
import {useHistory} from 'react-router-dom'

export default function DoctorCard(props) {

    const history = useHistory()

    return(
        <button onClick={() => history.push(`/doctor/${props.doctor.id}`)}>
        <h1>
            {props.doctor.lastname}, {props.doctor.firstname}
        </h1>
        <h4>{props.doctor.office.city}, {props.doctor.office.state}</h4>
        <h4>{props.doctor.phone_number}</h4>
        <h4>{props.doctor.practice.medicine}</h4>
        </button>
    )
}