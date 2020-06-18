import React, {useState, useEffect} from 'react'
import ReviewList from '../containers/ReviewList'

export default function Home(props){

    // let [reviews, setReviews] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/reviews', {
            method: 'GET',
            credentials: 'include',
        })
        .then(res => res.json())
        .then(reviews => {
            let relevantReviews = reviews.sort(review => function(a, b){return review.likes})
            console.log(relevantReviews)
        })
    })
    
    return(
        <div>
            <ReviewList />
        </div>
    )
}