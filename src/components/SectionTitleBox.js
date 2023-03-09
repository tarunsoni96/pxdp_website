import React from 'react'
import { commonBorderStyle } from '../styles/CommonStyles'
function SectionTitleBox(props) {
    return (
        <div
            style={{
                paddingTop: 70,
                marginBottom: props.marginBottom || 0,
                display: 'flex',
                flexDirection: 'column',
                borderBottom: props.hideBorder ? 0 : commonBorderStyle,
                paddingBottom:props.hideBorder ? 0 : 15
            }}
        >
            <span className="wideFont sectionTitle caps" style={{}}>{props.sectionTitle}</span>
            <div style={{ flexDirection: 'row',alignItems:'flex-start', marginTop: 0, justifyContent: 'space-between',display: props.description ? 'flex' : 'block' }}>
                <span className="wideFont caps" style={{ fontSize: 90, fontWeight: 900 }}>
                    {props.title}
                </span>
                {props.description && (
                    <span className="textDescriptionBold lightColorDescription " style={{marginTop:16, fontSize: 18, maxWidth: 300 }}>
                        {props.description}
                    </span>
                )}
            </div>
        </div>
    )
}

export default SectionTitleBox
