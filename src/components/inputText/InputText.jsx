import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './inputText.css'


// export default function InputText(props) {
//   return <TextField label="Outlined" variant="outlined">Hello world</TextField>;
// }


// const InputText = ({ type, name, label, required, onChange, value,variant}) => {
//   return (
//     <div>
//       <TextField
//           type={type}
//           name={name}
//           label={label}
//           required={required}
//           onChange={onChange}
//           value={value}
//           variant={variant}
//           className='inputText'
//       ></TextField>
//       <br></br>
//     </div>
//   );
// };

// export default InputText;

const InputText = ({type, name, label, required, onChange, value,variant}) => {
  return(
    <Box sx={{mt:2}}>
        <TextField type={type} name={name} label={label} required={required} variant={variant} onChange={onChange} value={value}className='inputText'></TextField>
    </Box>
  )
}

export default InputText


// export default function InputText() {
//   return (
//     <div>
//       <Box sx={{mt:2}}>
//         <TextField label="Email" variant="outlined" className='inputText'></TextField>
//       </Box>
//     </div>
//   );
// }

