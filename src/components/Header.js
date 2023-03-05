import React from 'react'
import '../styles/_variables.sass'
export default function Header() {
    const lightBlack = getComputedStyle(document.documentElement).getPropertyValue('--lightBlack')
  let cs = {
    marginRight:50,
    fontSize:16
  }
    return (
        <div id="header">
            <span className="logoText">PXDP</span>
            <div style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="textDescriptionBold" style={cs}>About</span>
                <span className="textDescriptionBold" style={cs}>Services</span>
                <span
                    style={{ paddingTop: 10, paddingBottom: 10, paddingLeft: 30, paddingRight: 30, borderRadius: 30, border: `2px solid ${lightBlack}`,...cs,marginRight:0 }}
                    className="textDescriptionBold"
                >
                    Hire us
                </span>
            </div>
        </div>
    )
}
