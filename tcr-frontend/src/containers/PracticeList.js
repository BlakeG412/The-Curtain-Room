import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import PracticeCard from '../components/PracticeCard'

export default function PracticeList() {

    const history = useHistory()

    let [practices, setPractices] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/practices', {
            method: 'GET',
            credentials: 'include'
        })
        .then(res => res.json())
        .then(practices => {
            setPractices(practices)
        })
    }, [])

    return(
        <div>
            <h1 class="center">Practices:</h1>
                {practices.map((practice) => <PracticeCard practice={practice} key={practice.id} />)}
        </div>
    )
}