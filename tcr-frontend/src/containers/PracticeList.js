import React, {useState, useEffect} from 'react'
import PracticeCard from '../components/PracticeCard'

export default function PracticeList() {

    const [practices, setPractices] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/practices', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify()
        })
        .then(res => res.json())
        .then(practices => {
            setPractices(practices)
        })
    })

    return(
        <div>
            {practices.map(practice => <PracticeCard />)}
        </div>
    )
}