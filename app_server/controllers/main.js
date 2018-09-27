var registeredUsers = [{ username: "admin@admin.com", password: "admin" }, { username: "ashish@gmail.com", password: "1234" },{ username: "a@g.co", password: "1" }];

/*
 * GET home page.
 */
module.exports.index = function(req, res) {
    res.render('index', { title: 'Women in Olympics – an inspiration' });
};


module.exports.adminHome = function(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.send("You must first log in.");
    }
};

/*
 * GET logout page.
 */
module.exports.get_logout = function(req, res) {

    if (req.session.user) {
        var name = req.session.user.username;

        req.session.destroy(function() {});

        res.render('login', { message: "Login" });
    } else {
        res.send("Nobody is currently logged in!");
    }
};

/*
 * GET login page.
 */
module.exports.get_login = function(req, res, next) {
    if (req.session.user) {
        if (req.session.user.username === "admin") {
            res.render('adminHome', { name: req.session.user.username });
        } else {
            res.render('index', { name: req.session.user.username });
        }
    } else {
        res.render('login', { message: "Login" });
    }

};

/*
    * POST login page.
*/
module.exports.post_login = function(req, res) {

    // Create an array of users with matching credentials.
    var matches = registeredUsers.filter(function(user) {
        return (user.username === req.body.email) &&
            (user.password === req.body.password);
    });


    if (matches.length === 0) {
        res.render('login', { message: "Invalid credentials!" });
    } else {
        req.session.user = matches[0];
        // Admin Login
        if (matches[0].username === "admin") {
            res.render('adminHome', { name: req.session.user.username });
        } else {
            res.render('index', { name: req.session.user.username });
        }

    }
};

/*
 * GET register page.
 */
module.exports.get_register = function(req, res, next)
{
    res.render('register', { message: "Register" });
};

/*
 * POST register page.
 */
module.exports.post_register = function(req, res)
{
    // Create an array of users with matching usernames.
    var matches = registeredUsers.filter(function(user)
    {
        return user.username === req.body.emailreg;
    });
    
    // If there is a match, the user has already registered.
    if (matches.length > 0)
    {
        res.render('register', {message: "User already registered!"});
    }
    
    // Register a new user.
    else
    {
        var newUser = { username: req.body.emailreg, 
                        password: req.body.passwordreg };
        registeredUsers.push(newUser);
        res.redirect('/login');
    }
}


/*
    * GET map page.
 */
module.exports.get_map = function(req,res)
{
   res.render('map', {message: "World Map of Olympic Historic Data",});
}

/*
    * GET graph page.
*/
module.exports.get_graph = function(req, res) {
    res.render('graph', { message: "View graph!" });
};
/*
 * POST graph page.
 */
module.exports.post_graph = function(req, res) {
    res.render('postgraph', { message: "This is your graph!" });
};

/*
 * GET comments page.
 */
module.exports.get_comments = function(req, res) {
    res.render('commentbox', { message: "This is your graph!" });
};

/*
 * GET medalists page.
 */
module.exports.get_medalists = function(req, res) {
    res.render('medalists', { message: "This is your medalists!" });
};

/*
 * GET olympic data page.
 */
module.exports.get_olympic_data = function(req, res) {
    res.render('olympicData', { name: req.session.user.username });
};