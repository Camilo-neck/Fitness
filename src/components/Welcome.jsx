import React from 'react'
import './styles/Welcome.css'

const Welcome = (props) => (
    <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hello {props.username}!</h1>
                <p>{props.description}</p>
            </div>
        </div>
)

export default Welcome