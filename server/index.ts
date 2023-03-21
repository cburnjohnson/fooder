import { Request, Response } from 'express';
import axios from 'axios';
const express = require('express');
const app = express();
require('dotenv').config();

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

app.get('/restaurants', async (req: Request, res: Response) => {
  try {
    const restaurants = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${GOOGLE_API_KEY}&location=-33.8670522,151.1957362&radius=5000&type=restaurant`
    );
    res.json(restaurants.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error'})
  }
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server started on Port: ${PORT}`));
