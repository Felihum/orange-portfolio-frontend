import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import "./TagsChip.css"

export default function TagsChip(){
    return(
        <Stack direction="row" spacing={1}>
            <Chip label="UI"/>
            <Chip label="UX"/>
        </Stack>
    )
}