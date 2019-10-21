const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const query = `SELECT * FROM "menu" ORDER BY "id"`;
    pool.query(query)
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('Error selecting dishes:', error);
        })
});

router.get('/:id', (req, res) => {
    const query = `SELECT * FROM "menu" WHERE "station_id" = $1 ORDER BY "id"`;
    pool.query(query, [req.params.id])
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('Error selecting dishes:', error);
        })
});
/**
 * POST route template
 */
router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {
    const query = `UPDATE "menu" SET "dish_name" = $1 WHERE "id" = $2;`;
    pool.query(query, [req.body.dish_name, req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((error) => {
            console.log('Error updating menu:', error);
        })
})

module.exports = router;