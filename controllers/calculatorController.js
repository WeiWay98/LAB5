
const addNumbers = (req, res) => {
    // Your logic for adding numbers
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let result = number1 + number2;
    res.status(200).json({ result });
  };
  
  module.exports = { addNumbers };