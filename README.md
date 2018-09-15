# WebAmazers

## Do npm install
## Run npm start
## Open localhost:3000
```
For admin : 
Username: admin
Password: admin

For general users
Username: ashish
Password: 1234
```

###Content to expect in each page
```
Login page: login form with basic CSS, same for admin and general users
Homepage: 
    Admin: Shows the content they can edit (right now it just says that in the title no data to edit yet)
    User: Shows a homepage with 4 menu options : Home, World Map, Comments and Logout
World Map: This pages loads a little slow as an SVG is written in to it. We could not find a solution to it but we will optimize it. User can click on any of the countries to view the statistics of it. Right now all the country's click leads to the same graph which will be changed for the actual site.
Comments: User can give comments on the webpage. Comments are not stored in DB now so they disappear if the page is refreshed.
Log out: Users session is destroyed and user is led to a log out page.
```