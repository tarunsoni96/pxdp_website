import React, { useEffect, useRef, useState } from 'react'
import { commonBorderStyle } from '../styles/CommonStyles'
import RoundHoloButton from './RoundHoloButton'
import { Button, Typography } from '@mui/material'
function ProjectSection(props) {
    const ref = useRef(null)
    const [imgWidth, setImgWidth] = useState(0)
    useEffect(() => {
        setImgWidth(ref.current ? ref.current.offsetWidth / 2 : 0)
    }, [ref.current])

    return (
        <div
        className='mt-5 mt-sm-5'
            ref={ref}
            style={{
                display: 'flex',
                flexDirection: 'row',
                borderBottom: commonBorderStyle,
                borderTop: commonBorderStyle
            }}
        >
            {props.left && (
                <div className="col-6">
                    <img src={props.img} className="img-fluid" />
                </div>
            )}
            <div className="px-3 py-1 p-sm-5 py-sm-3 py-lg-5 px-lg-5" style={{ justifyContent: 'space-between', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div className="col-12" style={{}}>
                    <span className="wideFont projectTypeText" style={{}}>
                        Branding
                    </span>
                </div>
                <div className={`col-12  `} style={{}}>
                    <div className="">
                        <span className="wideFont sectionTitle projectNameText" style={{ fontWeight: 900 }}>
                            Corridor
                        </span>
                    </div>
                    <div className="col-12 d-none d-lg-block">
                        <span
                            className="textDescriptionBold lightColorDescription text-wrap text-truncate d-inline-block col-12"
                            style={{ overflow: 'hidden' }}
                        >
                            Eiusmod sint eu labore ullamco deserunt do quis dolor. Eu dolor reprehenderit eu proident sint elit elit eiusmod. Duis ex
                            reprehenderit in non id.{' '}
                        </span>
                    </div>
                    <div className="d-block d-md-block" style={{}}>
                        <RoundHoloButton title="View Project" />
                    </div>
                </div>
            </div>

            {props.right && (
                <div className="col-6">
                    <img src={props.img} className="img-fluid" />
                </div>
            )}
        </div>
    )
}

export default ProjectSection
