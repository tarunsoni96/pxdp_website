import React from 'react'
import { commonBorderStyle } from '../styles/CommonStyles'
import ProcessIllustration from './ProcessIllustration'
function HowWeWork(props) {
    return (
        <div
        className='p-1 pt-5 p-sm-5'
            style={{
                paddingBottom:0,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
         <ProcessIllustration {...props} />   
        </div>
    )
}

export default HowWeWork
