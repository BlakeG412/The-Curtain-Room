import React, { useState, useEffect } from 'react'
import ReviewCard from '../components/ReviewCard'

export default function ReviewList(props) {

    let [reviews, setReviews] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/reviews', {
            credentials: 'include',
            method: 'GET'
        })
        .then(res => res.json())
        .then(reviewData => {
            setReviews(reviewData)
        })
    }, [])

    return (
        <div>
            <h1 class="center">Reviews:</h1>
            <div>
                {reviews.map(review => <ReviewCard doctor={review.doctor} review={review} key={review.id}/>)}
            </div>
        </div>
    )
}