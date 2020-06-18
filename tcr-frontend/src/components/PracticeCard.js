import React from 'react'
import {useHistory} from 'react-router-dom'
import './myStyles.css'

export default function PracticeCard(props) {

    const history = useHistory()

    return(
        <div>
                <button class="button1" onClick={() => history.push(`/practice/${props.practice.id}`)}>{props.practice.medicine}</button>
        </div>
    )
}