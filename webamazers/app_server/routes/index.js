var express = require("express");
var router = express.Router();
var ctrlMain = require("../controllers/main");

/*
 * GET login page.
 */

router.get("/test", ctrlMain.test);

router.get("/", ctrlMain.index);
router.get("/login", ctrlMain.login);
router.get("/signup", ctrlMain.signup);
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
router.get("/allcategories", ctrlMain.get_allcategories);
router.get("/dashboardData", ctrlMain.get_dashboard_data);
router.get("/dashboardGraph1", ctrlMain.get_dashboard_graph1);
router.get("/dashboardGraph2", ctrlMain.get_dashboard_graph2);

router.get("/dashboardbar", ctrlMain.get_dashboardbar);
router.get("/allcategories_hightraffic_all", ctrlMain.get_allcategories_hightraffic_all);

router.get("/dashboardTopCountries", ctrlMain.get_dashboard_top_countries);
router.get("/dashboard_bouncerate_edu", ctrlMain.get_dashboard_bouncerate_edu);
router.get("/dashboard_newuser", ctrlMain.get_dashboard_newuser);
router.get("/allcategories_timetraffic_all", ctrlMain.get_allcategories_timetraffic_all);
router.get("/allcategories_stackedchart", ctrlMain.get_allcategories_stackedchart);
router.get("/allcategories_stackedchart_mobdesk_all", ctrlMain.get_allcategories_stackedchart_mobdesk_all);

router.get("/movies", ctrlMain.get_movies);
router.get("/get_movies_traffic_share", ctrlMain.get_traffic_share);
router.get("/dashboard_bouncerate_movies", ctrlMain.get_dashboard_bouncerate_movies);
router.get("/dashboard_newuser_movies", ctrlMain.get_dashboard_newuser_movies);
router.get("/dashboard_avg_monthly_visits", ctrlMain.get_dashboard_avg_monthly_visits);

module.exports = router;