import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import "./TagsChip.css"

// eslint-disable-next-line react/prop-types
export default function TagsChip(key, tag){
    
    console.log(key)
    return(
        <Stack direction="row" spacing={1}>
            <Chip key={tag.id} label={tag.name}/>
        </Stack>
    )
}