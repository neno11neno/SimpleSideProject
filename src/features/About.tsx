// About.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth='md' sx={{ marginTop: '2rem', height: '100vh' }}>
      <Typography variant='h4' component='h1' gutterBottom>
        About Us
      </Typography>
      <Typography variant='body1' paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod
        elit a orci volutpat, non efficitur felis vulputate.
      </Typography>
      <Typography variant='body1' paragraph>
        Nulla facilisi. Proin fermentum vel risus in ultrices. Curabitur
        aliquam malesuada odio, id volutpat eros. Sed nec faucibus ex, eu commodo
        urna. In quis fringilla odio. Fusce condimentum magna a lorem interdum,
        nec aliquam augue consectetur.
      </Typography>
    </Container>
  );
};

export default About;
