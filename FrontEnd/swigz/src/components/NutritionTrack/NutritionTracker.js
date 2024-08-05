// src/NutritionTracker.js
import React, { useState } from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CircularProgress, Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import './NutritionTracker.css';

const data = [
  { name: "Green Salad", kcal: 320, weight: 150, carbs: 56, protein: 69, fat: 25 },
  { name: "Salad with egg", kcal: 320, weight: 150, carbs: 56, protein: 69, fat: 25 },
  { name: "Green Salad", kcal: 320, weight: 150, carbs: 56, protein: 69, fat: 25 },
  { name: "Salad with egg", kcal: 320, weight: 150, carbs: 56, protein: 69, fat: 25 },
  { name: "Green Salad", kcal: 320, weight: 150, carbs: 56, protein: 69, fat: 25 },
  { name: "Salad with egg", kcal: 320, weight: 150, carbs: 56, protein: 69, fat: 25 },
  { name: "Green Salad", kcal: 320, weight: 150, carbs: 56, protein: 69, fat: 25 },
  { name: "Salad with egg", kcal: 320, weight: 150, carbs: 56, protein: 69, fat: 25 },
  { name: "Green Saladd", kcal: 320, weight: 150, carbs: 56, protein: 69, fat: 25 },
  { name: "Salad with egg", kcal: 320, weight: 150, carbs: 56, protein: 69, fat: 25 },
  { name: "Green Salad", kcal: 320, weight: 150, carbs: 56, protein: 69, fat: 25 },
  { name: "Salad with egg", kcal: 320, weight: 150, carbs: 56, protein: 69, fat: 25 },
  { name: "Green Salad", kcal: 320, weight: 150, carbs: 56, protein: 69, fat: 25 },
  { name: "Salad with egg", kcal: 320, weight: 150, carbs: 56, protein: 69, fat: 25 },
  
];

const ProgressCircle = ({ value, maxValue, color }) => (
  <Box className="progressCircle">
    <CircularProgress variant="determinate" value={(value / maxValue) * 100} style={{ color }} />
    <Box position="absolute">
      <Typography variant="caption" component="div" color="textSecondary" className="progressLabel">
        {value}g
      </Typography>
    </Box>
  </Box>
);

const NutritionCard = ({ item }) => (
  <Card className="card">
    <CardContent className="cardContent">
      <Typography variant="h6" className="cardTitle">{item.name}</Typography>
      <Typography className="cardText">{item.kcal} kcal - {item.weight}g</Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ProgressCircle value={item.carbs} maxValue={100} color="purple" />
          <Typography align="center" className="progressLabel">Carbs</Typography>
        </Grid>
        <Grid item xs={4}>
          <ProgressCircle value={item.protein} maxValue={100} color="green" />
          <Typography align="center" className="progressLabel">Protein</Typography>
        </Grid>
        <Grid item xs={4}>
          <ProgressCircle value={item.fat} maxValue={100} color="red" />
          <Typography align="center" className="progressLabel">Fat</Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

const NutritionTracker = () => {
  const [selectedFood, setSelectedFood] = useState(null);
  const [showContent, setShowContent] = useState(false);

  const handleButtonClick = (item) => {
    setSelectedFood(item);
    setShowContent(true);
  };

  return (
    <Container className="container">
      {!showContent && (
        <Box className="buttonContainer">
          {data.map((item, index) => (
            <Button
              key={index}
              variant="contained"
              color="primary"
              onClick={() => handleButtonClick(item)}
              className="foodButton"
            >
              {item.name}
            </Button>
          ))}
        </Box>
      )}
      {showContent && selectedFood && (
        <Box mt={2}>
          <Typography variant="h3" className="title">Nutrition Details</Typography>
          <Box mt={2}>
            <Typography variant="h4" className="subtitle">{selectedFood.name}</Typography>
            <NutritionCard item={selectedFood} />
          </Box>
          <Box mt={2} textAlign="center">
            <Button variant="contained" color="secondary" onClick={() => setShowContent(false)} className="backButton">
              Back
            </Button>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default NutritionTracker;
