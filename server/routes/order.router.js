const express = require('express');
const pool = require('../modules/pool');
const { isAdmin } = require('../modules/authentication-middleware');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', isAdmin, (req, res) => {
    const query = `SELECT "order".*, "user".username, "ingredient".name  FROM "order" JOIN "user" ON "order".user_id = "user".id JOIN "ingredient" on "order".ingredient_id = "ingredient".id where "date" = current_date;`;
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
    const query = `INSERT INTO "order" ("ingredient_id", "user_id", "quantity", "date", "note") VALUES ($1, $2, $3, to_date($4, 'yyyy-mm-dd'), $5)`
    const d = new Date();
    const date = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
    pool.query(query, [req.body.ingredient_id, req.body.user_id, req.body.quantity, date, req.body.note])
        .then(() => {res.sendStatus(201)})
        .catch((error) => {
            console.log('Error adding to preplist:', error);
        })
});

module.exports = router;