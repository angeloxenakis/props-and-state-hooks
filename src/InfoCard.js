import { React } from 'react'

export const InfoCard = (props) => {
    return (
        <div>
            <h2 onClick={() => props.updateName()}>{props.name}</h2>
            <h3>My dudes</h3>
        </div>
    )
}