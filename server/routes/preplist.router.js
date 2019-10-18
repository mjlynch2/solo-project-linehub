const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
    const query = `SELECT "preplist".*, "ingredient".name FROM "preplist" JOIN "ingredient" ON "preplist".ingredient_id = "ingredient".id WHERE "user_id" =$1 AND "date" = current_date;`;
    pool.query(query, [req.params.id])
        .then((result) => { 
            res.send(result.rows)            
        }).catch((error) => {
            console.log('Error getting preplist:', error);
            
        })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    const query = `INSERT INTO "preplist" ("ingredient_id", "user_id", "date") VALUES ($1, $2, to_date($3, 'yyyy-mm-dd'));`;
    const d = new Date();
    const date = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
    pool.query(query, [req.body.ingredient_id, req.body.user_id, date])
        .then(() => {res.sendStatus(201)})
        .catch((error) => {
            console.log('Error adding to preplist:', error);
        })
});

router.delete('/:id', (req, res) => {
    const query = `DELETE FROM "preplist" WHERE "user_id" = $1 AND "date" = current_date AND "ingredient_id" = $2;`;
    pool.query(query, [req.params.id, req.body.ingredient_id])
        .then(() => res.sendStatus(200))
        .catch((error) => {
            console.log('Error adding to preplist:', error);
        })
})

module.exports = router;