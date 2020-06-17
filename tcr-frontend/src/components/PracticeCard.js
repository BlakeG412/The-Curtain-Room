import React from 'react'
import {useHistory} from 'react-router-dom'

export default function PracticeCard(props) {

    const history = useHistory()

    return(
        <div onClick={() => history.push(`/practices/${props.practice.id}`)}>
            <button>
            <h3>{props.practice.medicine}</h3>
            </button>
        </div>
    )
}