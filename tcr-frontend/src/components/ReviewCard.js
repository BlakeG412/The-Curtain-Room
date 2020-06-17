import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

export default function ReviewCard(props) {

    const history = useHistory()

    let [review, setReview] = useState({
        doctor: {},
        user: {},
    })

    return (
        <div>
            <button onClick={() => history.push(`/reviews/${props.review.id}`)}>
                <h3>{props.doctor.lastname}, {props.doctor.firstname}</h3>
                <h4>{props.review.user.username}</h4>
                <h5>{props.review.description}</h5>
                <h4>{props.review.created_at}</h4>
            </button>
        </div>
    )
}