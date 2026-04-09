import React from 'react'
import 'remixicon/fonts/remixicon.css';
import RightCard from './RightCard'

const RightContent = (props) => {
    console.log(props.users);


    return (
        <div id='right' className='h-auto lg:h-full flex rounded-4xl overflow-auto flex-nowrap gap-6 lg:gap-10 p-4 lg:p-6 w-full lg:w-2/3'>
            {props.users.map(function (elem, idx) {
                return <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag} />
            })}

        </div>
    )
}

export default RightContent