import React from 'react'
import { commonBorderStyle } from '../styles/CommonStyles'

class QuadrantView extends React.Component {
    render() {
        function renderMeasuresView(number, unit, desc) {
            return (
                <div style={{ flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="wideFont caps bold aboutusQuadrantMeasureText" style={{  }}>
                        {number}
                        <span className="wideFont  " style={{ fontWeight: '400', }}>
                            {unit}
                        </span>
                    </span>

                    <span className="textDescriptionBold lightColorDescription" style={{ fontSize: 12, textAlign: 'center' }}>
                        {desc}
                    </span>
                </div>
            )
        }
        let quadPadding = 'p-1 p-sm-2 p-md-4'
        let rightFlex = 0.4
        let borderStyle = '1px solid black'
        return (
            // <div style={{ display: 'flex', flexDirection: 'column' }}>
            //     <div style={{ display: 'flex', flexDirection: 'row' }}>
            //         <div
            //         className={quadPadding}
            //             style={{
            //                 flex: 1,
            //                 paddingBottom: quadPadding / 2,
            //                 borderRight: '1px solid black',
            //                 flexDirection: 'row',
            //                 display: 'flex',
            //                 alignItems: 'center',
            //                 justifyContent: 'space-between',
            //                 borderBottom: '1px solid black'
            //             }}
            //         >
            //             <div style={{ display: 'flex', flex: 1 }}>
            //                 <span className="wideFont caps bold aboutUsQuadrantTopLeftText" style={{ }}>
            //                     values of our industry
            //                 </span>
            //             </div>

            //             {renderMeasuresView(50, '%', 'More Cost Efficient')}
            //         </div>
            //         <div
            //         className={quadPadding}

            //             style={{
            //                 flex: rightFlex,
                            
            //                 paddingBottom: quadPadding / 2,
            //                 borderLeft: '1px solid black',
            //                 borderBottom: '1px solid black',
            //                 display: 'flex'
            //             }}
            //         >
            //             {renderMeasuresView(79, '+', 'Successful projects')}
            //         </div>
            //     </div>
            //     <div style={{ display: 'flex', flexDirection: 'row' }}>
            //         <div
            //         className={quadPadding}

            //             style={{
            //                 flex: 1,
            //                 flexDirection: 'row',
            //                 alignItems: 'center',
            //                 justifyContent: 'space-between',
            //                 display: 'flex',
            //                 borderRight: '1px solid black',
            //                 borderTop: '1px solid black'
            //             }}
            //         >
            //             <span className="textDescriptionBold lightColorDescription col-7 col-md-9" style={{  fontSize: 15 }}>
            //                 Exercitation ea laborum et reprehenderit anim ut adipisicing duis consequat ea.
            //             </span>

            //             {renderMeasuresView(3, 'x', 'More Output')}
            //         </div>
            //         <div
            //         className={quadPadding}

            //             style={{
            //                 flex: rightFlex,
            //                 display: 'flex',
            //                 borderLeft: '1px solid black',
            //                 borderTop: '1px solid black'
            //             }}
            //         >
            //             {renderMeasuresView(3, 'x', 'More Output')}
            //         </div>
            //     </div>
            // </div>
            <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-6 quadrant-line"></div>
                      <div className="col-6 quadrant-line"></div>
                    </div>
                    <div className="row">
                      <div className="col-6 quadrant-content" style={{borderRight:borderStyle}}>
                        <p>Quadrant 1</p>
                        <p>Some dummy text goes here</p>
                      </div>
                      <div className="col-6 quadrant-content">
                        <p>Quadrant 2</p>
                        <p>Some dummy text goes here</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6 quadrant-line-horizontal"></div>
                      <div className="col-6 quadrant-line-horizontal"></div>
                    </div>
                    <div className="row">
                      <div className="col-6 quadrant-content"  style={{borderRight:borderStyle}}>
                        <p>Quadrant 3</p>
                        <p>Some dummy text goes here</p>
                      </div>
                      <div className="col-6 quadrant-content">
                        <p>Quadrant 4</p>
                        <p>Some dummy text goes here</p>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          

        )
    }
}

export default QuadrantView
