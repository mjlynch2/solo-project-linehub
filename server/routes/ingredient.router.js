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

router.get('/:id', (req, res) => {
    const query = `SELECT "ingredient".name, "ingredient".id FROM "ingredient"
	JOIN "menu_ingredient"
		ON "ingredient".id = "menu_ingredient".ingredient_id
	JOIN "menu"
		ON "menu_ingredient".menu_id = "menu".id
	WHERE "menu_ingredient".menu_id = $1;`;
    pool.query(query, [req.params.id])
        .then((result) => {
            res.send(result.rows);
        }).catch((error) => {
            console.log('Error selecting ingredients from dish:', error);
        })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;