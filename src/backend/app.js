const express = require('express');
const path = require('path');
const app = express();
const db = require('./db');
const port = process.env.PORT || 3001;

app.use(express.urlencoded())
app.use(express.json())

db.connect().then(dbo => {
    app.get('/rest/events', (req, res) => {
        dbo.collection('events').find({}).toArray((err, results) => {
            if(err) throw err;
            res.send(results);
        });
    });  

    app.get('/rest/groups', (req, res) => {
        dbo.collection('groups').find({}).toArray((err, results) => {
            if(err) throw err;
            res.send(results);
        });
    });

    app.get('/rest/users', (req, res) => {
        dbo.collection('users').find({}).toArray((err, results) => {
            if(err) throw err;
            res.send(results);
        });
    });
    
    app.post('/rest/storeUser', (req, res) => {
        console.log(req.body)
        dbo.collection('users').insertOne(req.body)
        res.send(req.body.user)
    });

    app.post('/rest/storeGroup', (req, res) => {
        console.log(req.body)
        dbo.collection('groups').insertOne(req.body)
        res.send(req.body.user)
    });

    app.post('/rest/storeEvents', (req, res) => {
        console.log(req.body)
        dbo.collection('events').insertOne(req.body)
        res.send(req.body.user)
    });

    app.use(express.static(path.join(__dirname, '../../build')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../../build', 'index.html'));
    });
    
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});