import React from 'react';
import Header from './components/header';
import { Box } from '@mui/material';
import Portfolio from './components/Portfolio';
function App() {
  return (
    <Box display={'flex'} justifyContent={'center'}>
      <Box className="App">
        <Header />
        <Portfolio />
      </Box>
    </Box>
  );
}

export default App;
