const express = require('express');
const router = express.Router();
const calculator = require('../calculator');
const logger = require('../logger'); // Update this path based on your file structure

router.get('/add', (req, res) => {
  const { num1, num2 } = req.query;
  const result = calculator.add(parseFloat(num1), parseFloat(num2));
  logger('calculatorRoutes', result); // Use the appropriate callerId
  res.status(200).json({ result });
});


router.get('/add', (req, res) => {
  const { num1, num2 } = req.query;
  const result = calculator.add(parseFloat(num1), parseFloat(num2));
  res.status(200).json({ result });
});

router.get('/subtract', (req, res) => {
  const { num1, num2 } = req.query;
  const result = calculator.subtract(parseFloat(num1), parseFloat(num2));
  res.status(200).json({ result });
});

router.get('/multiply', (req, res) => {
  const { num1, num2 } = req.query;
  const result = calculator.multiply(parseFloat(num1), parseFloat(num2));
  res.status(200).json({ result });
});

router.get('/divide', (req, res) => {
  const { num1, num2 } = req.query;
  const result = calculator.divide(parseFloat(num1), parseFloat(num2));
  res.status(200).json({ result });
});

module.exports = router;