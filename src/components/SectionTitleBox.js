import React from 'react'
import { commonBorderStyle } from '../styles/CommonStyles'
function SectionTitleBox(props) {
    return (
        <div
        className='container-fluid'

            style={{
                paddingTop: 70,
                marginBottom: props.marginBottom || 0,
                display: 'flex',
                flexDirection: 'column',
                borderBottom: props.hideBorder ? 0 : commonBorderStyle,
                paddingBottom: props.hideBorder ? 0 : 15
            }}
        >
            <div className="row align-items-end" >
                <div className="col-12 col-sm-12 col-md-9" style={{}}>
                    <span className="wideFont sectionTitle caps" style={{}}>
                        {props.sectionTitle}
                    </span>
                    <div
                        style={{
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            marginTop: 0,
                            justifyContent: 'space-between',
                            display: props.description ? 'flex' : 'block'
                        }}
                    >
                        <span className="wideFont caps bold sectionMainTitle" style={{  }}>
                            {props.title}
                        </span>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-3" style={{}}>
                    {props.description && (
                        <span className="textDescriptionBold lightColorDescription " style={{ fontSize: 18, }}>
                            {props.description}
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SectionTitleBox
