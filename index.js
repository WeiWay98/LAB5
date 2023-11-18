
const userRoutes = require('./routes/userRoutes');
const express = require('express');
const path = require('path'); // Add this line to import the 'path' module

const app = express();
const port = 3000;

// Import calculatorRoutes
const calculatorRoutes = require('./routes/calculatorRoutes');

// ADD TO index.js ABOVE ALL app.use CALLS
// parse requests of content-type - application/json
app.use(express.json());

// Use the calculatorRoutes
app.use('/calculator', calculatorRoutes);

// Serve static files from the "public" folder (if needed)
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', userRoutes);

// Your other routes or middleware setup here
app.get('/', (req, res) => {
  res.send('Hello World!');
});


const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
app.use(
'/api-docs',
swaggerUi.serve,
swaggerUi.setup(swaggerDocument)
);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});