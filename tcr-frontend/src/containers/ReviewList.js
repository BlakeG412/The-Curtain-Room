import React, { useState, useEffect } from 'react'
import ReviewCard from '../components/ReviewCard'

export default function ReviewList() {
    let [reviews, setReviews] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/reviews')
        .then(res => res.json())
        .then(reviewData => {
            setReviews(reviewData)
        })
    },[])

    return (
        <div>
            ReviewList
            {reviews.map(review => <ReviewCard review= {review} key= {review.id}/>)}
        </div>
    )
}