import React from 'react'
import { commonBorderStyle } from '../styles/CommonStyles'
function WhatDoYouNeed() {
    function getView(direction, image, title, style) {
        let imgSize = 60
        return (
            <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', borderBottom: commonBorderStyle, paddingBottom: 20, ...style }}>
                {direction == 'left' && <img src={image} width={imgSize} height={imgSize} />}
                <span className="bold wideFont caps" style={{ fontSize: 100, marginLeft: 30, marginRight: 30 }}>
                    {title}
                </span>
                {direction == 'right' && <img src={image} width={imgSize} height={imgSize} />}
            </div>
        )
    }

    let margin = 200
    let vSpacing = 25
    return (
        <div>
            {getView('left', './images/pencil.png', 'what', { paddingLeft: margin })}
            {getView('right', './images/scaleHammer.png', 'do you', { justifyContent: 'center', paddingBottom: vSpacing, paddingTop: vSpacing })}
            {getView('left', './images/docPencil.png', 'need?', {
                paddingRight: margin,
                justifyContent: 'flex-end',
                paddingBottom: vSpacing,
                paddingTop: vSpacing
            })}
        </div>
    )
}

export default WhatDoYouNeed
