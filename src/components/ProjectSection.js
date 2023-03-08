import React, { useEffect, useRef, useState } from 'react'
import { commonBorderStyle } from '../styles/CommonStyles'
import RoundHoloButton from './RoundHoloButton'
function ProjectSection(props) {
    const ref = useRef(null)
    const [imgWidth, setImgWidth] = useState(0)
    useEffect(() => {
        setImgWidth(ref.current ? ref.current.offsetWidth / 2 : 0)
    }, [ref.current])

    return (
        <div
            ref={ref}
            style={{
                marginBottom: 70,
                display: 'flex',
                flexDirection: 'row',
                borderBottom: commonBorderStyle,
                borderTop: commonBorderStyle
            }}
        >
            {props.left && <img src={props.img} width={imgWidth} height={imgWidth - 200} />}
            <div style={{ flex: 1, padding: 60, paddingLeft: 120, flexDirection: 'column', display: 'flex' }}>
                <span className="wideFont" style={{fontSize:29}}>Branding</span>
                <div style={{ height: 190 }}></div>
                <span className="wideFont" style={{ fontWeight: 900 }}>
                    Corridor
                </span>
                <span className="textDescriptionBold lightColorDescription" style={{ maxHeight: 30 }}>
                    Eiusmod sint eu labore ullamco deserunt do quis dolor. Eu dolor reprehenderit eu proident sint elit elit eiusmod. Duis ex reprehenderit in
                    non id.{' '}
                </span>
                {/* <RoundHoloButton /> */}
            </div>

            {props.right && <img src={props.img} width={imgWidth} height={imgWidth - 200} />}
        </div>
    )
}

export default ProjectSection
