// src/NutritionTracker.js
import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CircularProgress } from '@mui/material';
import './Nutrition.css';

const data = [
  { name: "Green Salad", kcal: 320, weight: 150, carbs: 56, protein: 69, fat: 25 },
  { name: "Salad with egg", kcal: 320, weight: 150, carbs: 56, protein: 69, fat: 25 },

];

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

const NutritionCard = ({ name, kcal, weight, carbs, protein, fat }) => (
  <Card className="card">
    <CardContent className="cardContent">
      <Typography variant="h6" className="cardTitle">{name}</Typography>
      <Typography className="cardText">{kcal} kcal - {weight}g</Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ProgressCircle value={carbs} maxValue={100} color="purple" />
          <Typography align="center" className="progressLabel">Carbs</Typography>
        </Grid>
        <Grid item xs={4}>
          <ProgressCircle value={protein} maxValue={100} color="green" />
          <Typography align="center" className="progressLabel">Protein</Typography>
        </Grid>
        <Grid item xs={4}>
          <ProgressCircle value={fat} maxValue={100} color="red" />
          <Typography align="center" className="progressLabel">Fat</Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

const NutritionTracker = () => {
  return (
    <div className='bod'>
    <Container className="container">
      <Typography variant="h3" className="title">Remaining 1589 kcal</Typography>
      <Box mt={2}>
        <Typography variant="h4" className="subtitle">Daily nutrition's</Typography>
        <Box mt={1}>
          <Typography variant="h5" className="subtitle">Breakfast</Typography>
          {data.map((item, index) => (
            <Box mt={2} key={index}>
              <NutritionCard {...item} />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
    </div>
  );
};

export default NutritionTracker;
