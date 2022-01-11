import React from 'react'
import { useParams }from 'react-router-dom'

export default function Params() {
    const { id } = useParams()
    
    return (
        <div>
            <h1>Paramentro</h1>
            <h2>valor: {id}!</h2>
        </div>
    )
}
