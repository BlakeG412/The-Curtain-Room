import React, {useState, useEffect} from 'react'

export default function NewReviewForm(props) {

    let [reviewuser, setReviewuser] = useState({})

    useEffect(() => {
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then(users => {
            let currentUser = users.find(user => user.id === props.userid)
            setReviewuser(currentUser)
        })
    })

    function handleSubmit(e) {
        // e.preventDefault()
        // fetch('http://localhost:3000/reviews', {
        //     credentials: 'inlcude',
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify({
        //         user_id: props.userid,
        //         doctor_id: doctor.id,
        //         description: description.value
        //     })
        // })
        // .then(res => res.json())
        // .then(reviewInfo => {
    
        // })
    }

    return(
        <div>
            <h1>New Review</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>User:</label>
                    <div>{reviewuser.username}</div>
                </div>
                <div>
                    <label>Doctor:</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Description of Visit:</label>
                    <input type="text"></input>
                </div>
                <input type="submit" />
            </form>
        </div>
    )
}