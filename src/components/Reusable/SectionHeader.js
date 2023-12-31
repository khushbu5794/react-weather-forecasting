import React from 'react';
import { Typography } from '@mui/material';

const SectionHeader = ({ title, mb = '1rem' }) => (
  <Typography
    variant="h5"
    component="h5"
    sx={{
      fontSize: { xs: '12px', sm: '16px', md: '18px' },
      color: 'rgba(255, 255, 255, 0.7)',
      fontWeight: 600,
      lineHeight: 1,
      textAlign: 'center',
      fontFamily: 'Roboto Condensed',
      marginBottom: mb,
    }}
  >
    {title}
  </Typography>
);

export default SectionHeader;
