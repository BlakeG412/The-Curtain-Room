import React, {useState, useEffect} from 'react'
import PracticeCard from '../components/PracticeCard'

export default function PracticeList() {

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
    })

    return(
        <div>
            <label>All Practices:</label>
            <div>
                {practices.map((practice) => <PracticeCard practice={practice} key={practice.id} />)}
            </div>
        </div>
    )
}