require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes/initData')
const cookingRoutes = require('./routes/cooking')
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

app.use('/', routes);
app.use('/cooking', cookingRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
