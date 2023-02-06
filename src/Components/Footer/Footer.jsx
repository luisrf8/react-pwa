import * as React from "react";
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import OutboxIcon from '@mui/icons-material/Outbox';
import PaymentsIcon from '@mui/icons-material/Payments';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import "./Footer.scss";

export default function MenuAppBar() {

  return (
    <Box sx={{ 
        flexGrow: 1, position: 'absolute', bottom: '0', width: '100%', height: "80px", boxShadow: '0px 0px 8px #888888', display: 'flex', alignItems: 'center', 
         justifyContent: 'center'
        }}>
    <Stack direction="row" spacing={1} sx={{ ' & button ' : {width: '4rem', color: '#5B5B5B', display:'flex', flexDirection: 'column'}, '& IconButton': {width: '15px'}, '& span' : {fontSize: '0.7rem'} }}>
      <IconButton aria-label="delete">
        <MoveToInboxIcon fontSize="large"/>
        <span>solicitar</span>
      </IconButton>
      <IconButton aria-label="delete" color="primary">
        <PaymentsIcon fontSize="large"/>
        <span>depositar</span>
      </IconButton>
      <IconButton  aria-label="add an alarm" sx={{ width: '6rem', marginBottom: '15px' }}>
        <OutboxIcon sx={{ color: '#CC195A', fontSize: '4rem' }}  />
        <span>retirar</span>
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <CreditScoreIcon fontSize="large"/>
        <span>retirar</span>
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <QrCode2Icon fontSize="large"/>
        <span>Micuenta</span>
      </IconButton>
    </Stack>
    </Box>
  );
}
