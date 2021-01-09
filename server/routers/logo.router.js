const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
    // Add query to get all genres
    const queryText = 'SELECT * FROM brands ORDER BY name;';
    pool.query(queryText)
        .then((result) => {
            console.log('This is result.rows --->', result.rows)
            res.send(result.rows);
        })
        .catch((err) => {
            console.log('Error completing SELECT genre query', err);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    console.log("This is req.body --->", req.body);
    let sqlText = `INSERT INTO "brands" ("name", "logo")
      VALUES ($1, $2);`;
    pool
        .query(sqlText, [req.body.brandName, req.body.brandLogo])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log("error adding item to DB", error);
            res.sendStatus(500);
        });
});


module.exports = router;