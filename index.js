const express = require('express');
const axios = require('axios');
const cors = require("cors");
const app = express();
app.use(cors());    
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
app.get('/api/data', async (req, res) => {
  try {
    const url = 'https://partner.imwallet.in/web_services/statudentFilter.jsp';
    const response = await axios.get(url);
    const data = response.data;
    res.status(200).json(data);                        //status
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
