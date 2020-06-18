import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

export default function NewDoctorForm(props) {

    let [doctor, setDoctor] = useState({
        firstname: '',
        lastname: '',
        phone_number: '',
        street_address: '',
        city: '',
        state: '',
        zip_code: '',
        practice: []
    })

    const history = useHistory()

    function handleSubmit(e){
        // e.preventDefault()
        // fetch('http://localhost:3000/doctors', {
        //     credentials: 'include',
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         firstname: doctor.firstname,
        //         lastname: doctor.lastname,
        //         phone_number: doctor.phone_number,
        //         street_address: doctor.street_address,
        //         city: doctor.city,
        //         state: doctor.state,
        //         zip_code: doctor.zipcode,
        //         practice: doctor.practice
        //     })
        // })
        // .then(response => response.json())
        // .then((response) => {
        //     // console.log(response)
        //     let { success, id } = response
        //     if(success){
        //         history.push(`/doctors/${doctor.id}`)
        //     }
        // })
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
                        <input type="text" value={doctor.street_address} placeholder="Street Address" onChange={ e => setDoctor({ ...doctor, street_address: e.target.value })}></input>
                        <input type="text" value={doctor.city} placeholder="City" onChange={ e => setDoctor({ ...doctor, city: e.target.value })}></input>
                        <input type="text" value={doctor.state} placeholder="State" onChange={ e => setDoctor({ ...doctor, state: e.target.value })}></input>
                        <input type="text" value={doctor.zip_code} placeholder="Zip Code" onChange={ e => setDoctor({ ...doctor, zip_code: e.target.value })}></input>
                    </div>
                <label>Practice:</label>
                
                {/* <div class="dropdown">
                    <button class="dropbtn">Dropdown</button>
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                </div> */}
                <input type="submit" />
            </form>
        </div>
    )
}