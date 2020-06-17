import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import ReviewCard from './ReviewCard'

export default function UserShow(props) {

    const params = useParams()
    const history = useHistory()

    let [user, setUser] = useState({
        reviews: []
    })

    useEffect(() => {
        fetch('http://localhost:3000/users', {
            credentials: 'include',
            method: 'GET'
        })
        .then(res => res.json())
        .then(users => {
            let currentUser = users.find(user => user.id === parseInt(params.id))
            setUser(currentUser)
        })
    }, [])

    return(
        <div>
            <h1>{user.username}</h1>
            <label>Age:</label>
            <h3>{user.age}</h3>
            <h1>Reviews:</h1>
            <div>
                {user.reviews.map((review) => <ReviewCard review={review} key={review.id} />)}
            </div>
        </div>
    )
}