# **Circuit Check** <img align="right" src="https://camo.githubusercontent.com/6ce15b81c1f06d716d753a61f5db22375fa684da/68747470733a2f2f67612d646173682e73332e616d617a6f6e6177732e636f6d2f70726f64756374696f6e2f6173736574732f6c6f676f2d39663838616536633963333837313639306533333238306663663535376633332e706e67"/>
## Summary
Circuit Check is a web app that allows users to view details as well as comment reviews on selected U.K race tracks across the country. The app uses NodeJs, Express and MongoDB to store data such as Users and Circuits. The web app has user authentication for registration and login. Only authorised users are allowed to edit, delete or add new circuits.

This is my second project from General Assembly's Web development course and was done in a week.
It was my first project which involved using both front-end and back-end as well as fully RESTful routes. It was an individual project and made me understand the concept of incorporating data into web apps.

links Below
Web Site [Heroku](https://circuit-check.herokuapp.com/).
GitHub [Repo](https://github.com/fcoker/wdi-project-two).


## Brief

Create a platform for reviewing racing circuits that meets the following technical requirements:

* Have at least 2 models – one representing a user and one that represents the main resource of your app.
* Include relationships - embedded or referenced.
* The app should include authentication.
* Have complete RESTful routes for at least one of your resources with all CRUD actions.
* Be deployed online and accessible to the public.


## Technologies Used

* EJS
* CSS3
* Bulma CSS Framework
* JavaScript(ES6)
* Git
* GitHub
* Heroku
* MongoDB
* Express
* Node.js


### Featured Piece of Code no. 1
I am particularly proud of this piece of code below although it is relatively simple. It allows youtube videos to be embedded straight into HTML tags called Iframe. The youtube URL has to be changed a bit for it to be compatible with the tag. This was used for my videos showing the flying laps.

``` HTML
<div class="columns is-multiline is-centered">
  <iframe width="630" height="472.5"src="<%= video %>">  </iframe>
</div>
```

### Featured Piece of Code no. 2

This piece of code below toggles which items show on the nav bar depending on whether the user is logged in or not. I used an if statement within the EJS ice cream cones to determine if a user is logged in or not. If the user is logged in then he can add a circuit, sign out, edit and delete.  
``` JavaScript
<nav class="navbar">
  <div class='navbar-start'>
    <a class='navbar-item' href="/">Home</a>
  </div>
  <a class='navbar-item' href="/about">About</a>
  <a class='navbar-item' href="/circuits">Circuits</a>
  <% if(!locals.isLoggedIn){ %>
  <a class='navbar-item' href="/register">Register</a>
  <a class='navbar-item' href="/login">Log In</a>
  <% } %>

  <% if(locals.isLoggedIn){ %>
  <a class='navbar-item' href="/circuits/new">Add a Circuit</a>
  <div class='navbar-end'>
    <a class='navbar-item' href="/logout">Sign Out</a>
  </div>
  <% } %>
</nav>
```
## Screenshots
**Landing Page**
![mvp1](/readMeImg/landingPage.png)
**Login Page**
![mvp1](/readMeImg/login.png)
**Index Page**
![mvp1](/readMeImg/index.png)
**Show Page**
![mvp1](/readMeImg/show.png)
**FLying Lap**
![mvp1](/readMeImg/video.png)
**New Circuit**
![mvp1](/readMeImg/addCircuit.png)



## Wins and Blockers

The biggest win I gained was being able to how all the skills i've learnt so far could actually be used in a professional manner. It is the first time that a project that was made by me could be used in the real world

Secondly another win was feeling the gratitude of being able to research and apply code that was taught to me within the course. This boosted my confidence as I actually felt like a developer achieving this.

My biggest blocker was time management. I feel that initially my expectations were overwhelming, and even after cutting down my expectation by more than half i still struggled with delivering a presentable final product within one week.


## Future Content

Some future content that I would potentially like to add would be

* A search bar that could be used to find individual circuits.
* A map which you could select circuits to be filtered by the region clicked.
* Adding a map on the show page of each circuit to show the circuit's location.
* A ratings system so that circuits can be sorted by average ratings.
* Links on the show page that can take users to available booking dates on the selected circuit.
* Better styling
