var registeredUsers = [{ username: "admin@admin.com", password: "admin" }, { username: "ashish@gmail.com", password: "1234" }, { username: "a@g.co", password: "1" }];


module.exports.get_websites = function(req, res) {
    results = [{
        '_id':1,
        'Website':'www.google.com',
        'privacy':'excellent'
        },{
        '_id':2,
        'Website':'www.facebook.com',
        'privacy':'average'
        },
    ] 
    res.render('websites', { title: 'Express' , websites: results });
};

