import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function MySnackBar({openSnack, title}) {

    console.log("titlesnack:", title)

  return (
    <div>
      <Snackbar open={openSnack} autoHideDuration={6000} >
        <Alert
          
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
            {title}
        </Alert>
      </Snackbar>
    </div>
  );
}