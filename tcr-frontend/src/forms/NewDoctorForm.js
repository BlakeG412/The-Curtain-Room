import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

export default function NewDoctorForm(props) {

    const [doctor, setDoctor] = useState({
        firstname: '',
        lastname: '',
        phone_number: '',
        office_details: {
            street_address: '',
            city: '',
            state: '',
            zip_code: ''
        },
        practice: []
    })

    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:3000/doctors', {
            credentials: 'include',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: doctor.firstname,
                lastname: doctor.lastname,
                phone_number: doctor.phone_number,
                office_details: {
                    street_address: doctor.office.street_address,
                    city: doctor.office.city,
                    state: doctor.office.state,
                    zip_code: doctor.office.zipcode
                },
                practice: doctor.office.practice
            })
        })
        .then(response => response.json())
        .then(response => {
            // console.log(response)
            // let { success, id } = response
            // if(success){
            //     history.push(`/home`)
            // }
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Doctor First-Name:</label>
                <input type="text" value={doctor.firstname} onChange={ e => setDoctor({ ...doctor, firstname: e.target.value })}></input>
                <label>Doctor Last-Name:</label>
                <input type="text" value={doctor.lastname} onChange={ e => setDoctor({ ...doctor, lastname: e.target.value })}></input>
                <label>Doctor Phone Number:</label>
                <input type="text" value={doctor.phone_number} onChange={ e => setDoctor({ ...doctor, phone_number: e.target.value })}></input>
                <label>Doctor Office Address:</label>
                    <div>
                        <input type="text" value={doctor.office_details.street_address} placeholder="Street Address" onChange={ e => setDoctor({ ...doctor.office_details, street_address: e.target.value })}></input>
                        <input type="text" value={doctor.office_details.city} placeholder="City" onChange={ e => setDoctor({ ...doctor.office_details, city: e.target.value })}></input>
                        <input type="text" value={doctor.office_details.state} placeholder="State" onChange={ e => setDoctor({ ...doctor.office_details, state: e.target.value })}></input>
                        <input type="text" value={doctor.office_details.zip_code} placeholder="Zip Code" onChange={ e => setDoctor({ ...doctor.office_details, zip_code: e.target.value })}></input>
                    </div>
                <label>Practice:</label>
                <input></input>
                <input type="submit" />
            </form>
        </div>
    )
}