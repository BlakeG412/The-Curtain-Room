import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import DoctorCard from '../components/DoctorCard'

export default function ReviewShow(props) {

    const history = useHistory()

    const params = useParams()

    let [review, setReview] = useState({
        doctor: {},
        user: {},
        likes: [],
        created_at: ''
    })

    let reviewLikes = review.likes

    let [likecount, setLike] = useState(reviewLikes.length || 0)

    // let [dctr, setDctr] = useState({})

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

    useEffect(() => {
        fetch('http://localhost:3000/doctors', {
            method: 'GET',
            credentials: 'include',
        })
        .then(res => res.json())
        .then(doctors => {
            // let doctor = doctors.find((doctor) => doctor.id === review.doctor.id)
            // setDctr(doctor)
        })
    }, [])

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

    return(
        <div>
            <p>
            <label>Doctor:</label>
                <h2 onClick={() => history.push(`/doctor/${review.doctor.id}`)}>{review.doctor.lastname}, {review.doctor.firstname}</h2>
                <h4>{review.doctor.street_address}</h4>
                <h4>{review.doctor.city}, {review.doctor.state}</h4>
                    {/* {<DoctorCard doctor={dctr} key={dctr.id}/>} */}
            </p>
            <p>
                <label>Author:</label>
                <h2>{review.user.username}</h2>
            </p>
            <p>
                <label>Description:</label>
                <h3>{review.description}</h3>
            </p>
            <p>
                <label>Date:</label>
                <h3>{review.created_at.slice(0, 10)}</h3>
            </p>
            <button onClick={handleLike}>{likecount} Like(s)</button>
        </div>
    )
}