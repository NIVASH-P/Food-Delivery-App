// src/components/ProgressCircle.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const ProgressCircle = ({ value, maxValue, color }) => (
  <Box className="progressCircle">
    <CircularProgress variant="determinate" value={(value / maxValue) * 100} style={{ color }} />
    <Box position="absolute">
      <Typography variant="caption" component="div" color="textSecondary" className="progressLabel">
        {value}
      </Typography>
    </Box>
  </Box>
);

export default ProgressCircle;
