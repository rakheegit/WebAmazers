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
 * GET home page.
 */
router.get('/index', ctrlMain.index);

/*
 * GET registration page.
 */
router.get('/register', ctrlMain.get_register);

/*
 * POST registration page.
 */
router.post('/register', ctrlMain.post_register);


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
 * POST graph page.
 */
router.post('/graph', ctrlMain.post_graph);

/*
 * GET protected page.
 */
router.get('/protected', ctrlMain.loggedIn, ctrlMain.get_protected);

module.exports = router;
