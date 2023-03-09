import React from 'react'
import { sectionLinks } from '../resources/globalConstants'
import { sectionLinkStyles } from '../styles/CommonStyles'
import Logo from './Logo'
function Footer() {
    return (
        <div
            style={{
                borderTop: '1px solid #CDCBC5',
                paddingTop: 30,
                paddingBottom: 30,
                flexDirection: 'row',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <div className="row" style={{ flex: 1 }}>
                {sectionLinks.map((item) => {
                    return (
                        <span key={item} className="textDescriptionBold" style={{marginRight:50,fontSize:16}}>
                            {item}
                        </span>
                    )
                })}
            </div>

            <div style={{  alignItems: 'center', justifyContent: 'center' }}>
                <Logo />
            </div>

            <div className="row" style={{ flex: 1, justifyContent: 'flex-end' }}>
                {['Terms & Conditions', 'Privacy Policy'].map((item) => {
                    return (
                        <span key={item} className="textDescriptionBold" style={{ ...sectionLinkStyles }}>
                            {item}
                        </span>
                    )
                })}
            </div>
        </div>
    )
}

export default Footer
