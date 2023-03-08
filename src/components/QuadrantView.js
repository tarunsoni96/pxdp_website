import React from 'react'

class QuadrantView extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div
                        style={{
                            flex: 1,
                            borderRight: '1px solid black',
                            alignItems:'center',
                            display:'flex',
                            flexDirection:'row',
                            justifyContent: 'space-between',
                            borderBottom: '1px solid black'
                        }}
                    >
                        <span className="wideFont caps bold" style={{}}>values of our industry</span>
                        <div style={{alignItems:'center',justifyContent:"center",}}>

                        <div style={{flexDirection:'row'}} >

                            <span className="wideFont caps bold" style={{}}>50</span>
                            <span className="wideFont caps ">%</span>
                        </div>
                            <span className="wideFont caps " style={{fontSize:18}}>More Cost Efficient</span>
                        </div>
                    </div>
                    <div style={{ flex: 0.5, borderLeft: '1px solid black', borderBottom: '1px solid black' }}>
                        {/* Top Right Quadrant */}
                        <span>right</span>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ flex: 1, borderRight: '1px solid black', borderTop: '1px solid black' }}>
                        {/* Bottom Left Quadrant */}
                        <span>assa</span>
                    </div>
                    <div style={{ flex: 0.5, borderLeft: '1px solid black', borderTop: '1px solid black' }}>
                        {/* Bottom Right Quadrant */}
                        <span>bottom</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuadrantView
