import { Box, TextField, MenuItem, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, } from "@mui/material"
import { useState } from "react"
import MuiQuizSelect from "./MuiQuizSelect"

const MuiSelect = () => {
    const [country, setCountry] = useState<string[]>([])
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setCountry(typeof value === 'string' ? value.split(',') : value)

    }
    return (
        <>
            <Box width='250px'>
                <TextField label='select country'
                    select
                    value={country}
                    color="secondary"
                    SelectProps={{ multiple: true }}
                    fullWidth onChange={handleChange}>
                    <MenuItem value='IN'>India</MenuItem>
                    <MenuItem value='US'>USA</MenuItem>
                    <MenuItem value='UK'>London</MenuItem>
                </TextField>
            </Box>
            <Box width='450'>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup row
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male"  control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
            </Box>

            <MuiQuizSelect/>
        </>

    )
}

export default MuiSelect
