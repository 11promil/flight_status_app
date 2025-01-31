require('dotenv').config();
const express = require('express');
const pool = require('./db/db.js')
const cors = require('cors');
const authenticateToken = require('./middlewares/authenticate');
const app = express();
app.use(cors());
app.use(express.json());
app.get("/" , async (req ,res ) => { 
    try {
        // Query to fetch all users
        const result = await pool.query('SELECT * FROM users');
        
        // Send the result as JSON
        res.json(result.rows);
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
})
app.use('/api/v1/user', require('./routes/user'));
app.use('/api/v1/flight', require('./routes/flight'));

app.get('/api/v1/getme', authenticateToken, (req, res) => {
    res.json({ message: 'Authenticated', user: req.user });
});


app.listen(3000, () => {   
    console.log('Server is running on http://localhost:3000');
});