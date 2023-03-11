import React from 'react'
import { commonBorderStyle } from '../styles/CommonStyles'
import ProcessIllustration from './ProcessIllustration'
function AboutusSections(props) {
    let imgSizeRight = 750
    let aboutUsText =
        'We are firm believers in delivering small but very valuable pieces of work as quickly as possible. We want the product in the hand of your users so we can get real-world feedback, learn and improve without stalling the development process.'
    return (
        <div>
            <div
                className="d-none d-md-flex"
                style={{
                    padding: 40,
                    marginTop: 20,
                    display: 'flex',
                    flexDirection: 'row'
                }}
            >
                <div className="column" style={{ flex: 1, border: commonBorderStyle, borderRight: 0, borderBottom: 0 }}>
                    <div className="p-sm-2 p-lg-3 p-xl-5 mx-auto" style={{ maxHeight: 300, overflow: 'auto' }}>
                        <span className="lightColorDescription aboutUsText" style={{}}>
                            {aboutUsText}
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

            <div
                className="d-block d-md-none p-3"
                style={{
                    marginTop: 20,
                    display: 'flex',
                    flexDirection: 'row'
                }}
            >
                <span className="lightColorDescription aboutUsTextStandAlone" style={{}}>
                    {aboutUsText}
                </span>

                <div
                className='p-2'
                style={{
                    marginTop: 10,
                    display: 'flex',
                    flexDirection: 'row'
                }}
            >
                <div className="column" style={{ flex: 1, borderRight: 0, borderBottom: 0 }}>

                    <div style={{ flex: 1,alignItems:'flex-end',display:'flex' }}>
                        <img
                            src={require('../assets/images/aboutUsImage2.png')}
                            style={{ objectFit: 'cover', border: commonBorderStyle }}
                            width={'98%'}
                            height={'50%'}
                        />
                    </div>
                </div>

                <div className="column" style={{ flex: 1.5, border: commonBorderStyle, borderLeft: 0, borderBottom: 0, borderRight: 0 }}>
                    <img src={require('../assets/images/aboutUsImage1.png')} style={{ flex: 1, objectFit: 'cover' }} width={'100%'} height={'100%'} />
                </div>
            </div>


            </div>
        </div>
    )
}

export default AboutusSections
