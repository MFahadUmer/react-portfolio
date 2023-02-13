import { Box } from '@mui/material';
import React from 'react';
import Navbar from '../navbar';
import Introduction from './Introduction';

const Header = () => {
  return (
    <Box>
      <Navbar />
      <Introduction />
    </Box>
  );
};

export default Header;
