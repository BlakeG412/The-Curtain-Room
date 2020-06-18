import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ReviewCard from './ReviewCard'

export default function UserShow(props) {

    const params = useParams()

    let [user, setUser] = useState({})

    let [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(users => {
            let currentUser = users.find(user => user.id === parseInt(params.id))
            setUser(currentUser)
        })
    }, [])

    useEffect(() => {
        fetch('http://localhost:3000/reviews', {
            credentials: 'include',
            method: 'GET'
        })
        .then(res => res.json())
        .then(reviews => {
            let userReviews = reviews.filter(review => review.user.id === parseInt(params.id))
            setReviews(userReviews)
        })
    }, [])

    return(
        <div>
            <h1>{user.firstname} {user.lastname}</h1>
            <label>Username:</label>
            <h2>{user.username}</h2>
            {/* <label>Password:</label>
            <h2>{user.password_digest}</h2> */}
            <label>Age:</label>
            <h3>{user.age}</h3>
            <h1>Reviews:</h1>
            <div>
                {reviews.map((review) => <ReviewCard doctor={review.doctor} review={review} key={review.id} />)}
            </div>
        </div>
    )
}