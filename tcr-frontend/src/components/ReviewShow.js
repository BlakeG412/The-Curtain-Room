import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'

export default function ReviewShow() {

    const params = useParams()
    const history = useHistory()

    let [review, setReview] = useState({
        doctor: {},
        user: {},
        created_at: ''
    })

    // let [like, setLike] = useState({
    //     user_id: '',
    //     review_id: ''
    // })

    // let [liked, setLiked] = useState({
    //     success: 'false'
    // })

    useEffect(() => {
        fetch('http://localhost:3000/reviews', {
            credentials: 'include',
            method: 'GET'
        })
        .then(res => res.json())
        .then(reviewsData => {
            let currentReview = reviewsData.find(review => review.id === parseInt(params.id))
            setReview(currentReview)
        })
    }, [])

    // function handleLike(e) {
    //     e.preventDefault()
    //     if (liked.sucess = 'false')
    //         useEffect(() => {
    //             fetch('http://localhost:3000/likes', {
    //                 credentials: 'include',
    //                 method: 'POST',
    //                 headers: {
    //                     'Accept': 'application/json',
    //                     'Content-Type': 'application/json'
    //                 },
    //                 body: JSON.stringify({
    //                     // user_id: user.id,
    //                     // review_id: review.id
    //                 })
    //             })
    //             .then(res => res.json())
    //             .then(like => {
    //                 setLike(like)
    //                 setLiked('true')
    //             })
    //         }, [])
    //     else
    //         useEffect(() => {
    //             fetch('http://localhost:3000/likes', {
    //                 credentials: 'include',
    //                 method: 'DELETE',
    //                 headers: {
    //                     'Accept': 'application/json',
    //                     'Content-Type': 'application/json'
    //                 },
    //                 body: JSON.stringify({
    //                     // user_id: user.id,
    //                     // review_id: review.id
    //                 })
    //             })
    //             .then(res => res.json())
    //             .then(like => {
    //                 setLike(like)
    //                 setLiked('false')
    //             })
    //         }, [])
    //     end
    // }

    return(
        <div>
            <label>Doctor:</label>
            <h2>{review.doctor.lastname}, {review.doctor.firstname}</h2>
            <h4>{review.doctor.street_address}</h4>
            <h4>{review.doctor.city}, {review.doctor.state}</h4>
            <label>User:</label>
            <h2>{review.user.username}</h2>
            <label>Description:</label>
            <h3>{review.description}</h3>
            <label>Date:</label>
            <h3>{review.created_at.slice(0, 10)}</h3>
            {/* <button onClick={(e) => handleLike}>{likes.count}Likes</button> */}
            <button onClick={() => history.push('/home')}>Home</button>
            <button onClick={() => history.push('/doctors')}>All Doctors</button>
        </div>
    )
}