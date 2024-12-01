import Button from '@mui/material/Button';
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// export default function Material() {
//     return (
//         <>
//         <h1>Material UI</h1>
//             <Button variant="outlined">Primary</Button>
//         </>
//     )
// }


export default function Material() {
  return (

    <div>
        <h1>Material UI</h1>
        <Button variant="outlined" startIcon={<DeleteIcon />}>Primary</Button>
        <Stack direction="row" spacing={1}>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
    </Stack>
    </div>
  );
}


