import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

export default function DoctorCard(props) {

    const history = useHistory()

    return(
        <button onClick={() => history.push(`/doctors/${props.doctor.id}`)}>
        <h1>
            {props.doctor.lastname}, {props.doctor.firstname}
        </h1>
        <h4>{props.doctor.city}, {props.doctor.state}</h4>
        <h4>{props.doctor.phone_number}</h4>
        <h4>{props.doctor.practice.medicine}</h4>
        </button>
    )
}