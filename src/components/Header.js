import React from 'react'
import '../styles/_variables.sass'
import { commonBorderStyle } from '../styles/CommonStyles.js'
import RoundHoloButton from './RoundHoloButton'
export default function Header() {
    let cs = {
        marginRight: 50,
        fontSize: 16
    }
    return (
        <div id="header">
            <span className="wideFont">PXDP</span>
            <div style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="textDescriptionBold" style={cs}>
                    About
                </span>
                <span className="textDescriptionBold" style={cs}>
                    Services
                </span>
                <RoundHoloButton style={cs} />
            </div>
        </div>
    )
}
