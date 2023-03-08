import React from 'react'
import { commonBorderStyle } from '../styles/CommonStyles'
function RoundHoloButton(props) {
    return (
        <span
            style={{ paddingTop: 10, paddingBottom: 10, paddingLeft: 30, paddingRight: 30, borderRadius: 30, marginRight: 0, border: commonBorderStyle,...props.style }}
            className="textDescriptionBold"
        >
            {props.title || 'Hire us'}
        </span>
    )
}

export default RoundHoloButton
