import React from 'react'
import '../styles/_variables.sass'
import { commonBorderStyle } from '../styles/CommonStyles.js'
import RoundHoloButton from './RoundHoloButton'
import Logo from './Logo'
export default function Header() {
    let cs = {
        marginRight: 50,
        fontSize: 16
    }
    return (
        <div id="header">
            <Logo />
            <div style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="textDescriptionBold" style={cs}>
                    About
                </span>
                <span className="textDescriptionBold" style={cs}>
                    Services
                </span>
                <RoundHoloButton  />
            </div>
        </div>
    )
}
