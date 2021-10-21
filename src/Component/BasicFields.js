import React from 'react';
import TextField from '@material-ui/core/TextField';



export default function BasicTextFields({id,component, label, name,type, Change, value, disable}) {
 

  return (
    <TextField
   
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id={id}
      label={label}
      name={name}
      type={type}
      component={component}
      // autoComplete={autoComplete}
      value={value}
      onChange={Change}
      disabled = {disable}
    />  );
}