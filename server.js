const express = require("express");

const app = express();
const PORT = 3001;
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(apiRoutes);
app.use(htmlRoutes);


app.listen(PORT, () => {
    console.log("Listening to http://localhost:3001")
});
    