import React from 'react';
import { Grid, Typography } from '@mui/material';
import DailyForecastItem from './DailyForecastItem';
import ErrorBox from '../../Reusable/ErrorBox';
import Layout from '../../Reusable/Layout';

const DailyForecast = ({ data, forecastList }) => {
  const noDataProvided =
    !data ||
    !forecastList ||
    Object.keys(data).length === 0 ||
    data.cod === '404' ||
    forecastList.cod === '404';

  let subHeader = null;
  let content = null;

  if (!noDataProvided) {
    const numForecasts = forecastList.length;

    if (numForecasts > 0) {
      subHeader = (
        <Typography
          variant="h5"
          component="h5"
          sx={{
            fontSize: { xs: '10px', sm: '12px' },
            textAlign: 'center',
            lineHeight: 1,
            color: '#04C4E0',
            fontFamily: 'Roboto Condensed',
            marginBottom: '1rem',
          }}
        >
          {numForecasts === 1
            ? '1 available forecast'
            : `${numForecasts} available forecasts`}
        </Typography>
      );

      content = (
        <Grid
          item
          container
          xs={12}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: 'fit-content',
          }}
          spacing="4px"
        >
          {forecastList.map((item, idx) => (
            <Grid
              key={idx}
              item
              xs={4}
              sm={2}
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={{
                marginBottom: { xs: '1rem', sm: '0' },
              }}
            >
              <DailyForecastItem item={item} data={data} />
            </Grid>
          ))}
        </Grid>
      );
    } else {
      subHeader = (
        <ErrorBox
          flex="1"
          type="info"
          margin="2rem auto"
          errorMessage="No available forecasts for tonight."
        />
      );
    }
  } else {
    content = <ErrorBox flex="1" type="error" />;
  }

  return (
    <Layout
      title="TODAY'S FORECAST"
      content={content}
      sectionSubHeader={subHeader}
      sx={{ marginTop: '2.9rem' }}
      mb="0.3rem"
    />
  );
};

export default DailyForecast;