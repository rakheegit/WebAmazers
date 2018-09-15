var registeredUsers = [{username:"admin",password:"admin"},{username:"ashish",password:"1234"}];

/*
 * GET home page.
 */
module.exports.index = function(req, res) 
{
    res.render('index', { title: 'Women in Olympics – an inspiration' });
    console.log('Cookies: ', req.cookies);
};


module.exports.adminHome = function(req, res, next)
{
    console.log("Checking if logged in:");
    if (req.session.user)
    {
        next();  
    } 
    else 
    {
        console.log("Not logged in");
        res.send("You must first log in.");
    }
};

/*
 * GET logout page.
 */
module.exports.get_logout = function(req, res)
{
    console.log("Logging out:");
    
    if (req.session.user)
    {
        var name = req.session.user.username;
        console.log(name);
        
        req.session.destroy(function()
        {
            console.log(name + " logged out.");
        });
        
        res.send(name + " is now logged out.");
    }
    else
    {
        console.log("Nobody is currently logged in!");
        res.send("Nobody is currently logged in!");
    }
};

/*
 * GET login page.
 */
module.exports.get_login = function(req, res, next)
{
   res.render('login', { message: "Login" });
};

module.exports.get_map = function(req,res)
{
   res.render('map', {message: "map loading success"});
}
/*
 * POST login page.
 */
module.exports.post_login = function(req, res)
{
    console.log("Logging in: " + req.body.username + "/" + req.body.password);
    
    // Create an array of users with matching credentials.
    var matches = registeredUsers.filter(function(user)
                  {
                      return    (user.username === req.body.username) 
                             && (user.password === req.body.password);
                  });
    
    
    if (matches.length === 0)
    {
        res.render('login', {message: "Invalid credentials!"});
    }
    else
    {
        // The user is logged in for this session.
        req.session.user = matches[0];
        console.log("Sucessfully logged in:"); 
        console.log(req.session.user.username);
        
        res.render('adminHome', 
                   { name: req.session.user.username });
    }
};

/*
 * GET graph page.
 */
module.exports.get_graph = function(req, res)
{
    res.render('graph',
               { message: "View graph!" });
};
/*
 * POST graph page.
 */
module.exports.post_graph = function(req, res)
{
    res.render('postgraph',
               { message: "This is your graph!" });
};

/*
 * GET comments page.
 */
module.exports.get_comments = function(req, res)
{
    res.render('commentbox',
               { message: "This is your graph!" });
};

/*
 * GET olympic data page.
 */
module.exports.get_olympic_data = function(req, res)
{
    res.render('olympicData', { name: req.session.user.username });
};
