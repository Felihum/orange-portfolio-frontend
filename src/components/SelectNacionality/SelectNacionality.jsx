import React, {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './SelectNacionality.css'

// eslint-disable-next-line react/prop-types
export default function SelectNacionality({ nationality, setNationality }){

    //const [selectedValue,setSelectedValue] = useState('')

    const pSelect = [
      "Argentina",
      "Brasil",
      "Colômbia",
      "Estados Unidos"
    ]
  
    const handleChange = (event) => {
        setNationality(event.target.value)
    }
    return(
        <div className="mainContainerSelectNacionality">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Nacionalidade</InputLabel>
        <Select
          value={nationality}
          onChange={handleChange}
        >
          {pSelect.map(item => (
            <MenuItem key={item} value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    )
}