import React from 'react';
import Header from './components/header';
import { Box } from '@mui/material';
function App() {
  return (
    <Box display={'flex'} justifyContent={'center'}>
      <Box className="App">
        <Header />
      </Box>
    </Box>
  );
}

export default App;
