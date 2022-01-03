import React from 'react'
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@emotion/react';
import {getDiscountedPrice} from "../../priceUtils"

const BuyBar = (props) => {

  const handleBuyClick = () => {
    window.open(data.sell.payoutUrl, "_self")
  }

  const theme = useTheme()
  const {data} = props
  return (
    <AppBar position="fixed" color="background" sx={{ top: 'auto', bottom: 0, display:{md:"none"}}}>
      <Toolbar>
        <Typography component="span" variant="body2" sx={[{color: theme.palette.text.primary, margin: "12px", fontWeight: 700, fontSize: "1.2em"}]}>{getDiscountedPrice(data.sell.price, data.sell.discount)}</Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button variant="contained" color="primary" disableElevation sx={{width: "80%",}} onClick={handleBuyClick}>Comprar agora</Button>
      </Toolbar>
    </AppBar>
  )
}

export default BuyBar