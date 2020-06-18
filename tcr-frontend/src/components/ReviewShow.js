import React, {useState, useEffect, useImperativeHandle} from 'react'
import {useParams, useHistory} from 'react-router-dom'

export default function ReviewShow(props) {

    const params = useParams()
    const history = useHistory()

    let [review, setReview] = useState({
        doctor: {},
        user: {},
        likes: [],
        created_at: ''
    })
    console.log(review.likes)

    let reviewLikes = review.likes
    // setLike(reviewLikes.length)

    let [likecount, setLike] = useState(reviewLikes.length || 0)

    let handleLike = () => {
        console.log(reviewLikes)
        reviewLikes.forEach(like => {
            console.log(like)
            if (like.user.id === props.userid) {
                console.log(like)
                    fetch(`http://localhost:3000/likes/${like.id}`, {
                        credentials: 'include',
                        method: 'DELETE',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        }
                    })
                    setLike(likecount-1)
                    setReview({
                        ...review, likes: review.likes.filter(currentlike => currentlike !== like)
                    })
            }
        })
        if (reviewLikes.length==0){
            console.log('here')
            fetch('http://localhost:3000/likes', {
                        credentials: 'include',
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            user_id: props.userid,
                            review_id: review.id
                        })
            })
            .then(res => res.json())
            .then(res => {
                setReview({
                    ...review, likes: [...review.likes, res]
                })
            })
            setLike(likecount+1)
        }
    }

    useEffect(() => {
        fetch('http://localhost:3000/reviews', {
            credentials: 'include',
            method: 'GET'
        })
        .then(res => res.json())
        .then(reviewsData => {
            let currentReview = reviewsData.find(review => review.id === parseInt(params.id))
            setReview(currentReview)
            setLike(currentReview.likes.length)
        })
    }, [])

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
            <button onClick={handleLike}>{likecount} Like(s)</button>
            <button onClick={() => history.push('/home')}>Home</button>
            <button onClick={() => history.push('/doctors')}>All Doctors</button>
        </div>
    )
}