import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import ReviewCard from './ReviewCard'

export default function DoctorShow() {

    const history = useHistory()
    const params = useParams()
    
    let [doctor, setDoctor] = useState({
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
                <h1>{doctor.firstname}, {doctor.lastname}</h1>
                <label>Office Details:</label>
                <h2>{doctor.street_address}</h2>
                <h2>{doctor.city}, {doctor.state}</h2>
                <h3>{doctor.zip_code}</h3>
                <label>Phone Number:</label>
                <h3>{doctor.phone_number}</h3>
                <label>Practice:</label>
                <h3>{doctor.practice.medicine}</h3>
            </div>

            <div>
                <h1>Reviews:</h1>
                <div>
                    {doctor.reviews.map((review) => <ReviewCard doctor={doctor} review={review} key={review.id}/>)}
                </div>
            </div>

            <div>
                <button onClick={() => history.push('/reviews/new')}>Write a Review</button>
                <button onClick= {() => history.push('/doctors') }>All Doctors</button>
            </div>

        </div>
    )
}