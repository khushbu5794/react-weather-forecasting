import React from 'react';
import { Typography } from '@mui/material';
import { getUTCDatetime } from '../../utilities/DatetimeUtils';

const UTCDatetime = () => (
  <Typography
    variant="h3"
    component="h3"
    sx={{
      fontWeight: 400,
      fontSize: { xs: '10px', sm: '12px' },
      color: 'rgba(255, 255, 255, 0.7)',
      lineHeight: 1,
      paddingRight: '2px',
      fontFamily: 'Poppins',
    }}
  >
    {getUTCDatetime()} GMT
  </Typography>
);

export default UTCDatetime;
