import React from 'react'
import RoundHoloButton from './RoundHoloButton'
import { companyServices, projectBudget } from '../resources/globalConstants'
import { Box, TextField } from '@mui/material'
import CustomButton from './CustomButton'
function BudgetInteraction() {
    function renderInteraction(arr, title) {
        return (
            <div className="row" style={{ marginBottom: 50 }}>
                <span className="wideFont caps" style={{ marginRight: 30 }}>
                    {title}:
                </span>
                {arr.map((item, index) => {
                    return <RoundHoloButton style={{ marginRight: 15 }} key={index} title={item} />
                })}
            </div>
        )
    }

    function submit() {}
    return (
        <div style={{ padding: 60, paddingLeft: 100 }}>
            {renderInteraction(companyServices, 'services')}
            {renderInteraction(projectBudget, 'budget')}

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '40ch', flexDirection: 'column', display: 'flex', marginBottom: 2 }
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="standard-basic" type="text" label="Name" variant="standard" />
                <TextField id="standard-basic" type="number" label="Phone" variant="standard" />
                <TextField id="standard-basic" type="email" label="Email" variant="standard" />
            </Box>
            <div style={{ marginTop: 40 }}>
                <CustomButton onPress={() => submit()} title="Submit" />
            </div>
        </div>
    )
}

export default BudgetInteraction
