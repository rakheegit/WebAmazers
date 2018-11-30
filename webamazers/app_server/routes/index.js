var express = require("express");
var router = express.Router();
var ctrlMain = require("../controllers/main");

/*
 * GET login page.
 */

router.get("/test",ctrlMain.test);

router.get("/", ctrlMain.index);
router.get("/newwebsite", ctrlMain.get_add_new_from);
router.delete("/deleteFromDB/:id", ctrlMain.delete_DB);

router.get("/websites", ctrlMain.get_websites);
router.get("/websites/:id", ctrlMain.get_websites_by_id);

router.get("/editDbData/:id", ctrlMain.get_websites_by_id_for_edit);
router.post("/insertDbData", ctrlMain.post_db_data);
router.put("/editDbData/:id", ctrlMain.edit_db_data_id);

router.get("/searchFromDB", ctrlMain.search_DB);
router.get("/get_childsafety", ctrlMain.get_childsafety);
router.get("/get_all_us", ctrlMain.get_all_us);
router.get("/get_privacy", ctrlMain.get_privacy);

router.get("/dashboard", ctrlMain.get_dashboard);
router.get("/dashboardOld", ctrlMain.get_dashboardOld);
router.get("/dashboardData", ctrlMain.get_dashboard_data);
router.get("/dashboardGraph1", ctrlMain.get_dashboard_graph1);
router.get("/dashboardGraph2", ctrlMain.get_dashboard_graph2);

router.get("/dashboardbar", ctrlMain.get_dashboardbar);
router.get("/dashboardsocial", ctrlMain.get_dashboard_social);
router.get("/dashboardTopCountries", ctrlMain.get_dashboard_top_countries);

router.get("/dashboard_bouncerate", ctrlMain.get_dashboard_bouncerate);

module.exports = router;