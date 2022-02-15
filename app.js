const express = require('express');
const path = require('path');
const cors = require('cors')


const cameraRoutes = require('./routes/camera');
const teddyRoutes = require('./routes/teddy');
const furnitureRoutes = require('./routes/furniture');

const app = express();
const corsOptions = {
  'Access-Control-Allow-Origin':
    'https://inspiring-newton-9b905b.netlify.app',
}
app.use(cors(corsOptions))

/* app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://inspiring-newton-9b905b.netlify.app/');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
}); */

app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static('images'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/cameras', cameraRoutes);
app.use('/api/teddies', teddyRoutes);
app.use('/api/furniture', furnitureRoutes);

module.exports = app;
