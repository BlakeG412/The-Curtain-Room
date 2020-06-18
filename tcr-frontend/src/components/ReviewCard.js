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
            <button class="button1" onClick={() => history.push(`/review/${props.review.id}`)}>
                <h3>{props.doctor.lastname}, {props.doctor.firstname}</h3>
                <h4>{props.review.user.username}</h4>
                <h5>{props.review.description}</h5>
                <h4>{props.review.created_at.slice(0,10)}</h4>
            </button>
        </div>
    )
}