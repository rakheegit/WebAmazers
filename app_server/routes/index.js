var express = require('express');
var router = express.Router();
var ctrlMain = require("../controllers/main");

/*
 * GET login page.
 */
router.get('/', ctrlMain.get_login);
router.get('/login', ctrlMain.get_login);

/*
 * POST login page.
 */
router.post('/login', ctrlMain.post_login);

/*
 * GET register page.
 */
router.get('/register', ctrlMain.get_register);

/*
 * POST register page.
 */
router.post('/register', ctrlMain.post_register);

/*
 * GET home page.
 */
router.get('/index', ctrlMain.index);

/*
 * GET logout page.
 */
router.get('/logout', ctrlMain.get_logout);

/*
 * GET graph page.
 */
router.get('/graph', ctrlMain.get_graph);

/*
 * GET map page.
 */
router.get('/map', ctrlMain.get_map);

/*
 * GET comment page.
 */
router.get('/comments', ctrlMain.get_comments);

/*
 * GET medalists page.
 */
router.get('/medalists', ctrlMain.get_medalists);

/*
 * POST graph page.
 */
router.post('/graph', ctrlMain.post_graph);

/*
 * GET olympicData page.
 */
router.get('/olympicData', ctrlMain.adminHome, ctrlMain.get_olympic_data);

module.exports = router;