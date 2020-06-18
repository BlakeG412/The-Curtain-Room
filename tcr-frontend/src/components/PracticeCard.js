import React from 'react'
import {useHistory} from 'react-router-dom'
import './myStyles.css'

export default function PracticeCard(props) {

    const history = useHistory()

    return(
        <div>
            <ul className="ulformStyle">
                <li className="liformStyle"><a onClick={() => history.push(`/practice/${props.practice.id}`)}>{props.practice.medicine}</a></li>
            </ul>
        </div>
    )
}