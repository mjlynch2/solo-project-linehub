const express = require('express');
const pool = require('../modules/pool');
const { isAdmin } = require('../modules/authentication-middleware');
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
    console.log(req.params)
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
router.post('/', isAdmin, (req, res) => {
    const query = `INSERT INTO "menu" ("dish_name", "station_id") VALUES ($1, $2);`
    pool.query(query, [req.body.dish_name, req.body.station_id])
        .then(() => { res.sendStatus(201); })
        .catch((error) => {
            console.log('Error adding new menu:', error);
        })
});

router.post('/menu-ingredient/:id', isAdmin, (req, res, next) => {
    for (item of req.body) {
        let query = `INSERT INTO "menu_ingredient" ("ingredient_id", "menu_id") VALUES ($1, $2);`;
        pool.query(query, [item.id, req.params.id])
            .then(() => next())
            .catch((error) => {
                console.log('Error adding new menu-ingredient:', error);
            })
    }
    res.sendStatus( 201 );
})

router.put('/:id', isAdmin, (req, res) => {
    const query = `UPDATE "menu" SET "dish_name" = $1 WHERE "id" = $2;`;
    pool.query(query, [req.body.dish_name, req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((error) => {
            console.log('Error updating menu:', error);
        })
})

router.delete('/:id', isAdmin, (req, res) => {
    const query = `DELETE FROM "menu" WHERE "menu".id = $1;`;
    pool.query(query, [req.params.id])
        .then(() => { res.sendStatus(200); })
        .catch((error) => {
            console.log('Error deleting menu:', error);
        })
})
module.exports = router;