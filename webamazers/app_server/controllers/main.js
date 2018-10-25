var registeredUsers = [{ username: "admin@admin.com", password: "admin" }, { username: "ashish@gmail.com", password: "1234" }, { username: "a@g.co", password: "1" }];


module.exports.get_websites = function(req, res) {
    res.render('websites', { title: 'Women in Olympics – an inspiration' });
};

