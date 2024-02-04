import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './SelectNacionality.css'
const URL = "https://servicodados.ibge.gov.br/api/v1/paises/{paises}"

export default function SelectNacionality(){
    const [data,setData] = useState([])
    const [selectedValue,setSelectedValue] = useState('')

    const fetchData = async () => {
      try{
          const nD = []
          const response = await fetch(URL)
          const result = await response.json()
          result.forEach(item => {
            const exists = nD.some(existingItem => existingItem.id === item.id);

            if (!exists) {
              nD.push(item);
            }
          })
          setData(nD)
      }catch(error){
          console('Erro ao buscar dados da API',error)
      }
  }

    useEffect(() => {
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
          {data.forEach(d => {
            console.log(d)
          })}
          {data.map(item => (
            <MenuItem key={item.id} value={item.valor}>{item.nome.abreviado}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    )
}