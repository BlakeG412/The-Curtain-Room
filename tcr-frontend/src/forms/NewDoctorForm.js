import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import myStyles from '../components/myStyles.css'

export default function NewDoctorForm(props) {

    const history = useHistory()

    let [doctor, setDoctor] = useState({
        firstname: '',
        lastname: '',
        phone_number: '',
        street_address: '',
        city: '',
        state: '',
        zip_code: '',
        practice_id: ''
    })

    let [practices, setPractices] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/practices')
        .then(res => res.json())
        .then(practiceData => {
            setPractices(practiceData)
        })
    }, [])

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
                street_address: doctor.street_address,
                city: doctor.city,
                state: doctor.state,
                zip_code: doctor.zip_code,
                practice_id: doctor.practice_id
            })
        })
        .then(response => response.json())
        .then(response => {
            console.log(response)
            let { success, id } = response
            if(success){
                history.push(`/doctor/${id}`)
            }
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
                <br/>
                <label>Doctor Office Address:</label>
                    <div>
                        <input type="text" value={doctor.street_address} placeholder="Street Address" onChange={ e => setDoctor({ ...doctor, street_address: e.target.value })}></input>
                        <input type="text" value={doctor.city} placeholder="City" onChange={ e => setDoctor({ ...doctor, city: e.target.value })}></input>
                        <input type="text" value={doctor.state} placeholder="State" onChange={ e => setDoctor({ ...doctor, state: e.target.value })}></input>
                        <input type="text" value={doctor.zip_code} placeholder="Zip Code" onChange={ e => setDoctor({ ...doctor, zip_code: e.target.value })}></input>
                        {/* <input type="text" value={doctor.zip_code} placeholder="Zip Code" onChange={ e => setDoctor({ ...doctor, zip_code: e.target.value })}></input> */}
                    </div>
                <div class="dropdown">
                    <span>Practice:</span>
                    <div class="dropdown-content">
                    {practices.map(practice => <a onClick={() => setDoctor({ ...doctor, practice_id: practice.id})}>{practice.medicine}</a>)}
                        <div>{doctor.practice_id}</div>
                    </div>
                </div>
                <br/>
                <input type="submit" />
            </form>
        </div>
    )
}