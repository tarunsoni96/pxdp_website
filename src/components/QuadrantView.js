import React from 'react'

class QuadrantView extends React.Component {
    render() {
        function renderMeasuresView(number, unit, desc) {
            return (
                <div style={{ flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="wideFont caps bold" style={{ fontSize: 60 }}>
                        {number}
                        <span className="wideFont  " style={{ fontWeight: '400', fontSize: 60 }}>
                            {unit}
                        </span>
                    </span>

                    <span className="textDescriptionBold lightColorDescription" style={{ fontSize: 12, textAlign: 'center' }}>
                        {desc}
                    </span>
                </div>
            )
        }
        let quadPadding = 40
        let rightFlex = 0.4
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div
                        style={{
                            flex: 1,
                            padding: quadPadding,
                            paddingBottom: quadPadding / 2,
                            borderRight: '1px solid black',
                            flexDirection: 'row',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            borderBottom: '1px solid black'
                        }}
                    >
                        <div style={{ display: 'flex', flex: 1 }}>
                            <span className="wideFont caps bold" style={{ fontSize: 70 }}>
                                values of our industry
                            </span>
                        </div>

                        {renderMeasuresView(50, '%', 'More Cost Efficient')}
                    </div>
                    <div
                        style={{
                            flex: rightFlex,
                            padding: quadPadding,
                            paddingBottom: quadPadding / 2,
                            borderLeft: '1px solid black',
                            borderBottom: '1px solid black',
                            display: 'flex'
                        }}
                    >
                        {renderMeasuresView(79, '+', 'Successful projects')}
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            display: 'flex',
                            padding: quadPadding,
                            borderRight: '1px solid black',
                            borderTop: '1px solid black'
                        }}
                    >
                        <span className="textDescriptionBold lightColorDescription" style={{ flex: 0.7, fontSize: 15 }}>
                            We are firm believers in delivering small but very valuable pieces of work as quickly as possible. We want the product in the hand
                            of your users so we can get real-world feedback, learn and improve without stalling the development process.
                        </span>

                        {renderMeasuresView(3, 'x', 'More Output')}
                    </div>
                    <div
                        style={{
                            flex: rightFlex,
                            display: 'flex',
                            padding: quadPadding,
                            borderLeft: '1px solid black',
                            borderTop: '1px solid black'
                        }}
                    >
                        {renderMeasuresView(3, 'x', 'More Output')}
                    </div>
                </div>
            </div>
        )
    }
}

export default QuadrantView
