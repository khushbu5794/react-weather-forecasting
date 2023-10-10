import React from 'react';
import { Box, SvgIcon, Typography } from '@mui/material';
import AirIcon from '@mui/icons-material/Air';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import { ReactComponent as HumidityIcon } from '../../assets/humidity.svg';

const typeToIcon = {
  temperature: <ThermostatIcon sx={{ fontSize: { xs: '15px', sm: '16px', md: '18px' } }} />,
  wind: <AirIcon sx={{ fontSize: { xs: '15px', sm: '16px', md: '18px' } }} />,
  clouds: <FilterDramaIcon sx={{ fontSize: { xs: '15px', sm: '16px', md: '18px' } }} />,
  humidity: <SvgIcon component={HumidityIcon} inheritViewBox sx={{ fontSize: { xs: '15px', sm: '16px', md: '18px' } }} />,
};

const WeeklyForecastItem = ({ value, type }) => {
  const iconContent = typeToIcon[type] || null;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '31px',
        color: 'rgba(255, 255, 255, .7)',
        gap: { xs: '3px', sm: '4px', md: '6px' },
        width: '100%',
      }}
    >
      {iconContent}
      <Typography
        variant="p"
        component="p"
        sx={{
          fontSize: { xs: '12px', sm: '13px' },
          fontWeight: { xs: '400', sm: '600' },
          color: 'white',
          fontFamily: 'Poppins',
          lineHeight: 1,
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

export default WeeklyForecastItem;
