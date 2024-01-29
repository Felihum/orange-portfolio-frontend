import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './SelectNacionality.css'
const URL = "https://servicodados.ibge.gov.br/api/v1/paises/indicadores/{indicadores}"

export default function SelectNacionality(props){
    const [data,setData] = useState([])
    const [selectedValue,setSelectedValue] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(URL)
                const result = await response.json()
                setData(result)
            }catch(error){
                console('Erro ao buscar dados da API',error)
            }
        }
        fetchData()
    },[])
    const handleChange = (event) => {
        selectdValue(event.target.value)
    }
    return(
        <div className="mainContainerSelectNacionality">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          value={selectedValue}
          onChange={handleChange}
        >
          {data.map(item => (
            <MenuItem key={item.id} value={item.valor}>{item.nome}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    )
}