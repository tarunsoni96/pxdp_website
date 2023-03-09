import React from 'react'
import { commonBorderStyle } from '../styles/CommonStyles'
function CustomButton(props) {
    return (

        <span
        
        onClick={()=>props.onPress()}
            style={{
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 30,
                paddingRight: 30,
                borderRadius: 30,
                marginRight: 0,
                border: commonBorderStyle,
                background:'#232E3E',
                color:'#fff',
                cursor:'pointer',
                ...props.style
            }}
            className="textDescriptionBold"
        >
            {props.title || 'Hire us'}
        </span>
    )
}

export default CustomButton
