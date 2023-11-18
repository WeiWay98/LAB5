// controllers/userController.js
const users = [];

const getRandomId = () => Math.floor(Math.random() * 1000);

const getUserById = (req, res) => {
  const userId = req.params.id;
  const user = users.find((user) => user.id == userId);
  user
    ? res.status(200).json({ result: user })
    : res.status(404).json({ result: `User ${userId} not found` });
};

const getHeaders = (req, res) => {
  console.log(req.headers);
  res.json(req.headers);
};

const createUser = (req, res) => {
  const newUser = req.body;

  if (!newUser.name || !newUser.country) {
    res.status(400).json({ error: 'User must contain a name and country' });
    return;
  } else if (!newUser.id) {
    // generate a random ID
    newUser.id = getRandomId();
  }

  users.push(newUser);
  res.status(201).json(newUser);
};

module.exports = { getUserById, getHeaders, createUser };