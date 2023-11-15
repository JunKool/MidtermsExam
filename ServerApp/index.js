// index.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const dataPath = './data';

// In-memory collections
let users = JSON.parse(fs.readFileSync(`${dataPath}/users.json`, 'utf8'));
let offers = JSON.parse(fs.readFileSync(`${dataPath}/offers.json`, 'utf8'));

// Set context root
app.use('/se2132', express.static(__dirname));

// Get all users
app.get('/se2132/users', (req, res) => {
  res.json(users);
});

// Get a single user by ID
app.get('/se2132/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = users.find((u) => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: `User ${userId} not found` });
  }
});

// Create a new user
app.post('/se2132/users', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;

  users.push(newUser);
  res.json(newUser);
});

// Update a user by ID
app.put('/se2132/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;

  users = users.map((user) => (user.id === userId ? { ...user, ...updatedUser } : user));
  res.json({ message: 'User updated successfully' });
});

// Delete a user by ID
app.delete('/se2132/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);

  users = users.filter((user) => user.id !== userId);
  res.json({ message: 'User deleted successfully' });
});

// Get all offers
app.get('/se2132/offers', (req, res) => {
  res.json(offers);
});

// Get a single offer by ID
app.get('/se2132/offers/:id', (req, res) => {
  const offerId = parseInt(req.params.id);
  const offer = offers.find((o) => o.id === offerId);

  if (offer) {
    res.json(offer);
  } else {
    res.status(404).json({ message: 'Offer not found' });
  }
});

// Create a new offer
app.post('/se2132/offers', (req, res) => {
  const newOffer = req.body;
  newOffer.id = offers.length > 0 ? Math.max(...offers.map((o) => o.id)) + 1 : 101;

  offers.push(newOffer);
  res.json(newOffer);
});

// Update an offer by ID
app.put('/se2132/offers/:id', (req, res) => {
  const offerId = parseInt(req.params.id);
  const updatedOffer = req.body;

  offers = offers.map((offer) => (offer.id === offerId ? { ...offer, ...updatedOffer } : offer));
  res.json({ message: 'Offer updated successfully' });
});

// Delete an offer by ID
app.delete('/se2132/offers/:id', (req, res) => {
  const offerId = parseInt(req.params.id);

  offers = offers.filter((offer) => offer.id !== offerId);
  res.json({ message: 'Offer deleted successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
