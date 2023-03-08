import React from 'react'
import { commonBorderStyle } from '../styles/CommonStyles'
function ProcessIllustration(props) {
    let imgSize = 450
    return (
        <div
            style={{
                paddingLeft: 30,
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center'
            }}
        >
            <div className="column" style={{ maxWidth: 500 }}>
                <span className="wideFont caps bold" style={{ fontSize: 70 }}>
                    {props.title}
                </span>

                <span className="lightColorDescription " style={{ marginTop: 10 }}>
                    {props.description}
                </span>
            </div>

            <img src={props.img} style={{ objectFit:'contain' }} width={imgSize} height={imgSize} />
        </div>
    )
}

export default ProcessIllustration
