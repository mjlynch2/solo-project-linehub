const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    const query = `SELECT * FROM "ingredient" ORDER BY "id"`;
    pool.query(query)
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('Error selecting ingredients:', error);
        })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;