const fs = require ('fs');
const router = require ('express').Router();
let dbjson = require ('../db.json');

router.get ('/notes', (req, res) => {
    dbjson = JSON.parse(fs.readFileSync('./db.json', 'utf-8'))
    res.json (dbjson)
})

router.post ('/notes', (req, res) => {
    let noteModel = {
        title: req.body.title,
        text: req.body.text,
        id: Math.floor(Math.random()*1000)
    }
    dbjson.push (noteModel)
    fs.writeFileSync('./db.json', JSON.stringify(dbjson))
    res.json(dbjson)
})

module.exports = router