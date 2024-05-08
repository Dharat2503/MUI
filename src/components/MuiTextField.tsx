import { Stack ,TextField} from "@mui/material"
import { useState } from "react";
import InputAdornment from '@mui/material/InputAdornment';

export default function MuiTextField() {
    const [value,setValue] = useState('')
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            <TextField label='outline' variant="outlined"/>
            <TextField label='fill' helperText='this is helper text' variant="filled"/>
            <TextField label='standard' variant="standard"/>
        </Stack>

        <Stack direction='row' spacing={2}>
            <TextField label='username' variant="outlined"/>
            <TextField label='email' required helperText='this is helper text' variant="filled"/>
            <TextField label='password' type="password" error={!value}
             value={value} onChange={(e)=> setValue(e.target.value)} 
             helperText={!value ? 'Required':'do not share with anyone'} variant="standard"/>
            <TextField label='read only' InputProps={{readOnly: true}}/>
        </Stack>

        <Stack direction='row' spacing={2}>
        <TextField label='Amount' InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>,
        }}/>
          <TextField label='Amount' InputProps={{
            endAdornment: <InputAdornment position='end'>₹</InputAdornment>,
        }}/>
        </Stack>
      
    </Stack>
  )
}
