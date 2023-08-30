import React, { useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import Popup from '../core/components/shared/Popup';

const Home = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState('');

  const openPopup = (data: string) => {
    setPopupData(data);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <Container maxWidth='md' sx={{ marginTop: '2rem',height:'100vh' }}>
      <Typography variant='h4' component='h1' gutterBottom>
        Welcome to Our Website
      </Typography>
      <Typography variant='body1' paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec faucibus
        ex, eu commodo urna. Nulla facilisi. Proin fermentum vel risus in
        ultrices.
      </Typography>
      <Button variant="contained" color="primary" onClick={() => openPopup('Hello from main component!')}>
        Open Popup
      </Button>
      <Popup open={popupOpen} onClose={closePopup} data={popupData} />
    </Container>
  );
};

export default Home;
