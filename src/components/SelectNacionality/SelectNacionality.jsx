import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './SelectNacionality.css'
const URL = "https://servicodados.ibge.gov.br/api/v1/paises/{paises}"

export default function SelectNacionality(props){
    const [data,setData] = useState([])
    const [selectedValue,setSelectedValue] = useState('')

    const pSelect = [
      "Argentina",
      "Brasil",
      "Colômbia",
      "Estados Unidos"
    ]

  //   let firtstArr = []
  //   let noDouble = []
  //   const fetchData = async () => {
  //     try{
  //         const response = await fetch(URL)
  //         const result = await response.json()
  //         result.forEach(item => {
  //           firtstArr.push(item)
  //         })
  //         noDouble = [...new Set(firtstArr)]
  //         setData(noDouble)
  //     }catch(error){
  //         console('Erro ao buscar dados da API',error)
  //     }
  // }

    // useEffect(() => {
    //   fetchData()
    // },[])

  

    const handleChange = (event) => {
        setSelectedValue(event.target.value)
    }
    return(
        <div className="mainContainerSelectNacionality">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Nacionalidade</InputLabel>
        <Select
          value={selectedValue}
          onChange={handleChange}
        >
          {data.forEach(d => {
            // console.log(d)
          })}
          {pSelect.map(item => (
            <MenuItem key={item} value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
    )
}