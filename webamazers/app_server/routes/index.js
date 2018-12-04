var express = require("express");
var router = express.Router();
var ctrlMain = require("../controllers/main");

/*
 * GET login page.
 */

router.get("/test", ctrlMain.test);
router.post("/createuser", ctrlMain.createuser);
// router.post("/userexists", ctrlMain.userexists);
router.get("/", ctrlMain.index);
router.get("/login", ctrlMain.login);
router.get("/home", ctrlMain.userhome);
router.get("/loginuser", ctrlMain.loginuser);
router.get("/logout", ctrlMain.logout);

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
router.get("/allcategories_bouncestack", ctrlMain.get_allcategories_bouncestack);

router.get("/movies", ctrlMain.get_movies);
router.get("/compare", ctrlMain.compare);
router.get("/get_movies_traffic_share", ctrlMain.get_traffic_share);
router.get("/dashboard_bouncerate_movies", ctrlMain.get_dashboard_bouncerate_movies);
router.get("/dashboard_newuser_movies", ctrlMain.get_dashboard_newuser_movies);
router.get("/dashboard_avg_monthly_visits", ctrlMain.get_dashboard_avg_monthly_visits);
router.get("/dashboard_website_change_movies", ctrlMain.get_dashboard_website_change_movies)
router.get("/dashboard_edu_mobdesk", ctrlMain.get_dashboard_edu_mobdesk)
router.get("/allcategories_change_in_traffic", ctrlMain.get_allcategories_change_in_traffic)
router.get("/allcategories_social_avg_monthly", ctrlMain.get_allcategories_social_avg_monthly)
router.get("/dashboard_timespent", ctrlMain.get_dashboard_timespent)

// Common APIs
// new user
router.get("/dashboard_newuser_movies", ctrlMain.get_dashboard_newuser_movies);
router.get("/dashboard_newuser_education", ctrlMain.get_dashboard_newuser_education);
router.get("/dashboard_newuser_carrentals", ctrlMain.get_dashboard_newuser_carrentals);
// end of new user -------------

// Mobile desktop
router.get("/dashboard_mobdesk_movies", ctrlMain.get_dashboard_mobdesk_movies);
router.get("/dashboard_mobdesk_education", ctrlMain.get_dashboard_mobdesk_education);
router.get("/dashboard_mobdesk_carrentals", ctrlMain.get_dashboard_mobdesk_carrentals);
// end of Mobile Desktop -------------

// Avg monthly Visits
router.get("/dashboard_avg_monthly_visits_movies", ctrlMain.get_dashboard_avg_monthly_visits_movies);
router.get("/dashboard_avg_monthly_visits_education", ctrlMain.get_dashboard_avg_monthly_visits_education);
router.get("/dashboard_avg_monthly_visits_carrentals", ctrlMain.get_dashboard_avg_monthly_visits_carrentals);
// Avg monthly visits -------------

// time spent 
router.get("/dashboard_timespent_movies", ctrlMain.get_dashboard_timespent_movies);
router.get("/dashboard_timespent_education", ctrlMain.get_dashboard_timespent_education);
router.get("/dashboard_timespent_carrentals", ctrlMain.get_dashboard_timespent_carrentals);
// timespent ends -----------------
module.exports = router;