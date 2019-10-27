const express = require('express');
const { isAdmin } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const query = `SELECT * FROM "station" ORDER BY "id";`;
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
router.post('/', isAdmin, (req, res) => {
    const query = `INSERT INTO "station" ("station_name") VALUES ($1);`;
    pool.query(query, [req.body.station_name])
        .then(() => {res.sendStatus(201)})
        .catch((error) => {
            console.log('Error adding station:', error);
        })
});

router.delete('/:id', isAdmin, (req, res) => {
    const query = `DELETE FROM "station" WHERE "id" = $1;`;
    pool.query(query, [req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((error) => {
            console.log('Error deleting station:', error);
        })
})

router.put('/:id', isAdmin, (req, res) => {
    const query = `UPDATE "station" SET "station_name" = $1 WHERE "id" = $2;`;
    pool.query(query, [req.body.station_name, req.params.id])
        .then(() => {res.sendStatus(200);})
        .catch((error) => {
            console.log('Error updating station:', error);
        })
})

module.exports = router;