import express from 'express';
import ProfileRoute from '../src/routes/profile.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to my server.');
});

app.use(ProfileRoute);

// const PORT = 3333;
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
