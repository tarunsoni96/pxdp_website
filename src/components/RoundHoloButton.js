import React from 'react'
import { commonBorderStyle } from '../styles/CommonStyles'
import { Button } from '@mui/material'
function RoundHoloButton(props) {
    return (
        <Button className='py-1 py-sm-2' style={{paddingInline:'6%'}} >
        <span className="textDescriptionBold buttonText" style={{}}>{props.title || 'Hire us'}</span>
    </Button>
        // <span
        //     style={{
        //         paddingTop: 10,
        //         paddingBottom: 10,
        //         paddingLeft: 30,
        //         paddingRight: 30,
        //         borderRadius: 30,
        //         marginRight: 0,
        //         border: commonBorderStyle,
        //         cursor:'pointer',

        //         ...props.style
        //     }}
        //     className="textDescriptionBold"
        // >
            
        // </span>
    )
}

export default RoundHoloButton
