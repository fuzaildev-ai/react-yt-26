import React from 'react'
import { Bookmark } from 'lucide-react'


const cards = (props) => {

    return (
        <div className='card'>
            <div>
                <div className='top'>
                    <img src={props.brandLogo} alt="props.companyName" />
                    <button>Save <Bookmark size={10} /></button>
                </div>
                <div className='center'>
                    <h3>{props.companyName}</h3>
                    <h2>{props.post}</h2>
                    <div className='tag'>
                        <h4>{props.tag1}</h4>
                        <h4>{props.tag2}</h4>

                    </div>
                </div>
            </div>
            <div className='bottom'>
                <div>
                    <h3>{props.pay}</h3>
                    <p>{props.location}</p>
                </div>
                <button>Apply Now</button>
            </div>
        </div>
    )
}

export default cards