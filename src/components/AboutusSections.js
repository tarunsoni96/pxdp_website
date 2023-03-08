import React from 'react'
import { commonBorderStyle } from '../styles/CommonStyles'
import ProcessIllustration from './ProcessIllustration'
function AboutusSections(props) {
    let imgSizeRight = 750
    return (
        <div
            style={{
                padding: 40,
                marginTop: 20,
                display: 'flex',
                flexDirection: 'row'
            }}
        >
            <div className="column" style={{ flex: 1, border: commonBorderStyle, borderRight: 0, borderBottom: 0 }}>
                <div style={{ padding: 100, paddingRight: 0, paddingTop: 60, width: '80%', maxHeight: 200, alignItems: 'center', justifyContent: 'center' }}>
                    <span className="lightColorDescription" style={{}}>
                        We are firm believers in delivering small but very valuable pieces of work as quickly as possible. We want the product in the hand of
                        your users so we can get real-world feedback, learn and improve without stalling the development process.
                    </span>
                </div>

                <div style={{ flex: 1 }}>
                    <img
                        src={require('../assets/images/aboutUsImage2.png')}
                        style={{ objectFit: 'cover', border: commonBorderStyle }}
                        width={'98%'}
                        height={'100%'}
                    />
                </div>
            </div>

            <div className="column" style={{ flex: 1.5, border: commonBorderStyle, borderLeft: 0, borderBottom: 0, borderRight: 0 }}>
                <img src={require('../assets/images/aboutUsImage1.png')} style={{ flex: 1, objectFit: 'cover' }} width={'100%'} height={'100%'} />
            </div>
        </div>
    )
}

export default AboutusSections
