import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LoadingBox = ({ children }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '1rem',
    }}
  >
    <CircularProgress sx={{ color: 'rgba(255, 255, 255, 0.8)' }} />
    {children}
  </Box>
);

export default LoadingBox;
