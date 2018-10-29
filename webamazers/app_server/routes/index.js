var express = require('express');
var router = express.Router();
var ctrlMain = require("../controllers/main");

/*
 * GET login page.
 */
router.get('/', ctrlMain.get_websites);

router.get('/websites:id', ctrlMain.get_website_with_ID);

router.get('/searchFromDB', ctrlMain.search_DB)
module.exports = router;