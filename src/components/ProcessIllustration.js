import React from 'react'
import { commonBorderStyle } from '../styles/CommonStyles'
function ProcessIllustration(props) {
    let imgSize = 450
    return (
        <div
            className="row"
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                alignItems: 'center'
            }}
        >
            <div className="column col-12 col-sm-6" style={{}}>
                <span className="wideFont caps bold howWeWorkTitleText " style={{}}>
                    {props.title}
                </span>

                <span className="lightColorDescription howWeWorkDescText " style={{ marginTop: 10 }}>
                    {props.description}
                </span>
            </div>
            <div className="col-9 col-sm-5 col-md-4 mt-4 mt-sm-0 mx-auto" style={{}}>
                <img src={props.img} className="img-fluid" />
            </div>
        </div>
    )
}

export default ProcessIllustration
