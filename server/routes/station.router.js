const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const query = `SELECT * FROM "station" ORDER BY "id"`;
    pool.query(query)
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('Error selecting stations:', error);
        })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    const query = `INSERT INTO "station" ("station_name") VALUES ($1);`;
    console.log(req.body);
    res.sendStatus(201); 
});

router.delete('/:id', (req, res) => {
    const query = `DELETE FROM "station" WHERE "id" = $1;`;
    pool.query(query, [req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((error) => {
            console.log('Error deleting station:', error);
        })
})

router.put('/:id', (req, res) => {
    const query = `UPDATE "station" SET "station_name" = $1 WHERE "id" = $2;`;
    pool.query(query, [req.body.station_name, req.params.id])
        .then(() => {res.sendStatus(200);})
        .catch((error) => {
            console.log('Error updating station:', error);
        })
})

module.exports = router;