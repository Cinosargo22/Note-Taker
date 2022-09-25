const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001
app.use( express.static('public') );

app.get('/', (req, res) => {
    res.send("hello")
});

app.listen(PORT, () => {
    console.log("Listening to http://localhost:3001")
});
    