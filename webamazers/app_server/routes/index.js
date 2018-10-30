var express = require('express');
var router = express.Router();
var ctrlMain = require("../controllers/main");

/*
 * GET login page.
 */
router.get('/', ctrlMain.get_websites);

router.get('/websites', ctrlMain.get_website_with_ID);
router.post('/insertDbData', ctrlMain.post_db_data);
router.post('/editDbData', ctrlMain.edit_db_data);

router.get('/searchFromDB', ctrlMain.search_DB)

router.delete('/deleteFromDB', ctrlMain.delete_DB);
module.exports = router;