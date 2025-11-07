require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const pool = require('./config/dbConnection');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Test DB connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) console.error('❌ Database connection failed:', err);
  else console.log('✅ Database connected successfully at', res.rows[0].now);
});

// Routes
app.use('/api/auth', require('./routes/authRoutes'));

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
