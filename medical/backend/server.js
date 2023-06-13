const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const ejs = require("ejs");

// Initialize Express app
const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('public', {
  mimeTypes: {
    'js': 'application/javascript'
  }
}));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/medical_records', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the MedicalRecord schema and model
const medicalRecordSchema = new mongoose.Schema({
  // Define your schema fields
  nationalId: String,
  name: String,
  age: Number,
  gender: String,
});

const MedicalRecord = mongoose.model('MedicalRecord', medicalRecordSchema);

// Login endpoint
app.post('/login', (req, res) => {
  const { email } = req.body;

  try {
    // Generate a token
    const token = generateToken(email);

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Medical Records endpoint
app.get('/medical-records', authenticateToken, async (req, res) => {
  try {
    // Fetch the medical records from the database
    const medicalRecords = await MedicalRecord.find();

    res.json(medicalRecords);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Middleware function to authenticate the token
function authenticateToken(req, res, next) {
  // Get the token from the Authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Missing authorization token' });
  }

  // Verify the token
  jwt.verify(token, 'Nana', (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    // Pass the decoded token payload to the next middleware
    req.user = decoded;
    next();
  });
}

// Helper function to generate a JWT token
function generateToken(email) {
  const payload = {
    email,
  };

  return jwt.sign(payload, 'Nana');
}

app.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

app.get('/patient', authenticateToken, async (req, res) => {
  try {
    // Fetch all medical records
    const medicalRecords = await MedicalRecord.find();

    res.json({ medicalRecords });
  } catch (error) {
    console.error('Error fetching medical records:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Middleware function to authenticate the token
function authenticateToken(req, res, next) {
  // Check for authorization token in the request headers
  const bearerHeader = req.headers.authorization;
  if (!bearerHeader || !bearerHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Extract the token from the header
  const token = bearerHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Verify the JWT token
  jwt.verify(token, 'Nana', (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    // Store the decoded token in the request object
    req.user = decoded;
    next();
  });
}


app.get('/requests', (req, res) => {
  res.render('requests');
});

app.get('/new', (req, res) => {
  res.render('new');  
});

// Start the server
app.listen(3002, () => {
  console.log('Server listening on port 3002');
});
