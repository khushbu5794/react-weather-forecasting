import React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function ErrorBox(props) {
  const {
    display = 'flex',
    justifyContent = 'center',
    alignItems = 'center',
    margin = '1rem auto',
    gap = '8px',
    flex = 'auto',
    width = 'auto',
    type = 'error',
    errorMessage = 'Internal error',
  } = props;

  const color = type === 'info' ? '#f5a922' : '#DC2941';
  const borderColor = type === 'info' ? '#f5a922' : '#DC2941';
  const background = type === 'info' ? 'rgba(245, 169, 34, .1)' : 'rgba(220, 41, 65, .25)';
  const fontSize = type === 'info' ? { xs: '12px', sm: '14px' } : { xs: '14px', sm: '16px' };

  return (
    <Box
      display={display}
      justifyContent={justifyContent}
      alignItems={alignItems}
      margin={margin}
      gap={gap}
      flex={flex}
      width={width}
      sx={{
        padding: '1rem',
        flexDirection: { xs: 'column', sm: 'row' },
        color,
        border: `1px solid ${borderColor}`,
        borderRadius: '8px',
        background,
      }}>
      <ErrorOutlineIcon sx={{ fontSize: '24px' }} />
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontSize,
          fontFamily: 'Poppins',
          textAlign: 'center',
        }}
      >
        {errorMessage}
      </Typography>
    </Box>
  );
}
