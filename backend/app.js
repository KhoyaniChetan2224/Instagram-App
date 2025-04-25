const express = require('express');
const app = express();
const mongoose = require('mongoose');


const PORT = process.env.PORT || 3000;




app.get('/', (req, res) => {    
    res.send('Hello World! Welcome to ');
    res.send('Hello ji, Welcome to ');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});