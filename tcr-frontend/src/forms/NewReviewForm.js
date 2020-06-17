import React from 'react'

export default function NewReviewForm(props) {

    function handleSubmit(e) {
    //     e.preventDefault()
    //     fetch('http://localhost:3000/reviews', {
    //         credentials: 'inlcude',
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             user: user.id,
    //             doctor: doctor.id,
    //             description: description.value
    //         })
    //     })
    //     .then(res => res.json())
    //     .then(reviewInfo => {
    
    //     })
    }

    return(
        <div>
            <h1>New Review</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>User</label>
                    <input></input>
                </div>
                <div>
                    <label>Doctor</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Description of Visit</label>
                    <input type="text"></input>
                </div>
            </form>
        </div>
    )
}