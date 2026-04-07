import React from 'react'

const Card = (props) => {
    return (
        <div className='card'>
            <img src={props.img} alt="image" />
            <h2>{props.user}</h2>
            <p>{props.age}</p>
            <button>View Profile</button>
        </div>
    )
}

export default Card