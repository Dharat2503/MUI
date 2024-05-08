
import { Stack, Button, IconButton, ButtonGroup ,ToggleButton,ToggleButtonGroup} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Fingerprint from '@mui/icons-material/Fingerprint';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import React, { useState } from 'react';


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const MuiButton = () => {

    const [formats, setFormats] =  useState<string[]>([]); 
    console.log({formats})
    const handleFormatChange = (_event: React.MouseEvent<HTMLElement>,updatedFormats: string[])=>{
        setFormats(updatedFormats)
    }




    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction="row">
                {/* text is simple contained is like primary , outlined is like simple border */}
                <Button variant="text" disabled >
                    disabled button
                </Button>
                <Button variant="contained" href='https://google.com' >
                    contained link btn
                </Button>
                <Button variant="outlined" >
                    outlined text
                </Button>
            </Stack>

            <Stack spacing={2} direction='row'>
                <Button variant='contained' color='primary'>Primary</Button>
                <Button variant='contained' color='secondary'>Secondary</Button>
                <Button variant='contained' color='success'>Success</Button>
                <Button variant='contained' color='info'>Info</Button>
                <Button variant='contained' color='error'>Error</Button>
                <Button variant='contained' color='warning'>Warning</Button>
            </Stack>

            <Stack display='block' spacing={2} direction='row'>
                <Button variant='contained' size='small'>Small</Button>
                <Button variant='outlined' size='medium'>Medium</Button>
                <Button variant='contained' size='large'>Large</Button>
            </Stack>

            <Stack direction='row' spacing={2}>
                <Button variant='contained' startIcon={<SendIcon />}>Send</Button>
                <Button variant='contained' endIcon={<DeleteIcon />}>Delete</Button>
                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                >
                    Upload file
                    <VisuallyHiddenInput type="file" />
                </Button>
            </Stack>

            <Stack direction='row' spacing={2}>
                <IconButton color="secondary" aria-label="add an alarm">
                    <AlarmIcon />
                </IconButton>
                <IconButton aria-label="delete" color="primary">
                    <DeleteIcon />
                </IconButton>
                <IconButton color="primary" aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                </IconButton>
                <IconButton aria-label="fingerprint" color="secondary">
                    <Fingerprint />
                </IconButton>
                <IconButton aria-label="fingerprint" color="success">
                    <Fingerprint />
                </IconButton>
            </Stack>

            <Stack direction='row'>
                <ButtonGroup variant='outlined' onClick={()=> alert('button clicked')} >
                    <Button >Left</Button>
                    <Button >Center</Button>
                    <Button >Right</Button>
                </ButtonGroup>
            </Stack>

            <Stack direction='row'>
                <ToggleButtonGroup aria-label='text formatting' value={formats} onChange={handleFormatChange}>
                    <ToggleButton value='bold'><FormatBoldIcon /></ToggleButton>
                    <ToggleButton value='italic'> <FormatItalicIcon /> </ToggleButton>
                    <ToggleButton value='underline'><FormatUnderlinedIcon/> </ToggleButton>
                </ToggleButtonGroup>

            </Stack>



        </Stack>
    )
}

export default MuiButton
