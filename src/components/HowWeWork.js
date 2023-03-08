import React from 'react'
import { commonBorderStyle } from '../styles/CommonStyles'
import ProcessIllustration from './ProcessIllustration'
function HowWeWork(props) {
    return (
        <div
            style={{
                padding: 70,
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
