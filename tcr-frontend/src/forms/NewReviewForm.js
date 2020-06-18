import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import '../components/myStyles.css'

export default function NewReviewForm(props) {

    const history = useHistory()

    let [review, setReview] = useState({
        user_id: props.userid,
        doctor_id: '',
        description: ''
    })

    let [reviewuser, setReviewuser] = useState({})

    let [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(users => {
            let currentUser = users.find(user => user.id === props.userid)
            setReviewuser(currentUser)
        })
    }, [])

    useEffect(() => {
        fetch('http://localhost:3000/doctors')
        .then(res => res.json())
        .then(doctorsData => {
            setDoctors(doctorsData)
        })
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:3000/reviews', {
            credentials: 'include',
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_id: props.userid,
                doctor_id: review.doctor_id,
                description: review.description
            })
        })
        .then(res => res.json())
        .then(response => {
            console.log(response)
            let { success, id } = response
            if(success){
                history.push(`/review/${id}`)
            }
        })
    }

    return(
        <div>
            <h1>New Review</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>User:</label>
                    <div>{reviewuser.username}</div>
                </div>
                <div>
                    {/* <label>Doctor:</label> */}
                    <div class="dropdown">
                    <span>Doctor:</span>
                    <div class="dropdown-content">
                    {doctors.map(doctor => <a onClick={() => setReview({ ...review, doctor_id: doctor.id})}>{doctor.lastname}, {doctor.firstname}</a>)}
                        {/* <div>{doctor.lastname}, {doctor.firstname}</div> */}
                    </div>
                </div>
                </div>
                <div>
                    <label>Description of Visit:</label>
                    <textarea placeholder={'Description of Office Visit'} value={review.description} onChange={ e => setReview({ ...review, description: e.target.value })}></textarea>
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}