import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import ReviewCard from './ReviewCard'

export default function DoctorShow() {

    const history = useHistory()

    const params = useParams()
    
    let [doctor, setDoctor] = useState({
        firstname: '',
        lastname: '',
        street_address: '',
        city: '',
        state: '',
        zip_code: '',
        phone_number: '',
        reviews: [],
        practice: {
            medicine: ''
        }
    })

    useEffect(() => {
        fetch('http://localhost:3000/doctors', {
            credentials: 'include',
            method: 'GET'
        })
        .then(res => res.json())
        .then(doctorsData => {
            let currentDoctor = doctorsData.find(doctor => doctor.id === parseInt(params.id))
            setDoctor(currentDoctor)
        })
    }, [])

    return(
        <div>
            <div>
                <h1>Dr. {doctor.firstname} {doctor.lastname}</h1>
                <p>
                    <label>Office Details:</label>
                    <h2>
                        {doctor.street_address}
                        <br/>
                        {doctor.city}, {doctor.state}
                        <br/>
                        {doctor.zip_code}
                    </h2>
                </p>
                <p>
                    <label>Phone Number:</label>
                    <h3>{doctor.phone_number}</h3>
                </p>
                <p>
                    <label>Practice:</label>
                    <h3>{doctor.practice.medicine}</h3>
                </p>
            </div>
            <div>
                <h1 class="center">Reviews:</h1>
                <div>
                    {doctor.reviews.map((review) => <ReviewCard doctor={doctor} review={review} key={review.id}/>)}
                </div>
            </div>
            <button onClick={() =>history.push('/doctors')}>All Doctors</button>
            <button onClick={() => history.push('/home')}>Home</button>
        </div>
    )
}