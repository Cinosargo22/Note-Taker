const express = require('express');
const path = require('path');

const fs =require('fs');
const app = express();
const PORT = process.env.PORT || 3001;



const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static('public'));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log('Listening to http://localhost:3001');
});