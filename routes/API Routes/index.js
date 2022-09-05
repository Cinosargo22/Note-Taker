const fs = require('fs');
//const { route } = require('../htmlRoutes');
const db = require('../../db/db.json')
const router = require('express').Router();
const uniqid = require('uniqid');

router.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        console.log(JSON.parse(data));

        res.send(data)
    })
})

router.post('/api/notes', (req, res) => {
    let newNote = {
        id: uniqid(),
        title: req.body.title,
        text: req.body.text
    }
    //  console.log(typeof db)
    // //1. use fs to read the db.json
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;

        let newData = JSON.parse(data);

        newData.push(newNote);
        console.log(newData)

        fs.writeFile('./db/db.json', JSON.stringify(newData), (err) => {
            if (err) throw err;

            res.send('successfully added');
        })
    });
    // //2. create a variable and parse the data which got returned

    // //3. push the new Note to that parsed data

    // //4. use fs to write new content of that parsed data to db.json file
    // req.body.id = notes.length.toString();


})

module.exports = router;