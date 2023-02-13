import styled from '@emotion/styled';
import { Twitter } from '@mui/icons-material';
import { Typography, Box } from '@mui/material';
import { fontWeight } from '@mui/system';
import React from 'react';

const IntroContainer = styled('div')(() => ({
  height: '100vh',
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '0  0 0 200px',
}));

const MainBox = styled('div')(() => ({
  maxWidth: '400px',
  padding: '15px',
}));
const Introduction = () => {
  return (
    <IntroContainer>
      <MainBox>
        <Typography variant="h3" fontWeight="bold">
          I'm Muhammad Glad to see you!
        </Typography>
        <Typography mt={2} lineHeight={1.7} fontSize="20">
          I'm a software developer! I can help you build a product, feature or
          website look through some of my work and experience! If you like what
          you see and have a project you need coded, don't hesitate to contact
          me.
        </Typography>
        <Typography
          mt={2}
          sx={{
            fontSize: '15px',
            fontWeight: 'bold',
            color: 'rgb(97, 95, 95)',
          }}
        >
          LET'S CONTACT
        </Typography>
        <Box mt={2}>
          <Twitter sx={{ color: 'rgb(97, 95, 95)' }} />
        </Box>
      </MainBox>
    </IntroContainer>
  );
};

export default Introduction;
