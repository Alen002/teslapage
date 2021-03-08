import React from 'react';
import Button from '@material-ui/core/Button';
import './Buttons.css'

const Buttons = (props) => {
  return (
    <div>
      <Button variant="contained" color="primary" disableElevation className='button' >Order</Button> 
    </div>
  )
}

export default Buttons;
