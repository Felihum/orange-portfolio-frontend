import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import './AlertSucess.css'

export default function AlertSucess() {
    return (
      <div className='container_alert_sucess'>
        <Stack sx={{ width: '100%'}} spacing={2} className=''>
          <Alert variant="filled" severity="success">
            Cadastro feito com sucesso
          </Alert>
        </Stack>
      </div>
    );
}