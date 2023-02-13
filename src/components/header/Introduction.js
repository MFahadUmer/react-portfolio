import styled from '@emotion/styled';
import {
  Email,
  GitHub,
  LinkedIn,
  Twitter,
  WhatsApp,
} from '@mui/icons-material';
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
        <Box mt={2} display="flex" gap="20px">
          <a href="https://twitter.com/engfahadumer" target="blank">
            <Twitter sx={{ color: 'rgb(97, 95, 95)' }} />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-fahad-umer/"
            target="blank"
          >
            <LinkedIn sx={{ color: 'rgb(97, 95, 95)' }} />
          </a>
          <a href="https://github.com/MFahadUmer" target="blank">
            <GitHub sx={{ color: 'rgb(97, 95, 95)' }} />
          </a>
          <a href="mailto:eng.fahadumer@gmail.com">
            <Email sx={{ color: 'rgb(97, 95, 95)' }} />
          </a>
          <a href="https://api.whatsapp.com/send?phone=923326037639&text=Just%20watched%20your%20resume!%20Need%20to%20contact%20you..">
            <WhatsApp sx={{ color: 'rgb(97, 95, 95)' }} />
          </a>
        </Box>
      </MainBox>
    </IntroContainer>
  );
};

export default Introduction;
