# Botram-api (API services)

![botram.png](botram.png)

Botram-api is an API service for mobile app called "Botram", developed by :

  - [sanbastia](https://github.com/sanBastia)
  - [qblol](https://github.com/qblol)
  - [radityaarya](https://github.com/radityaarya)
  - [axiomaswn](https://github.com/axiomaswn)


# NEW FEATURE !

  these are new feature from botram API
   - User can post their food ! but not with the pic
   - User can Request a food they wanted !
   - User can Accept / non - Accept request from another user !
   - User can see all the food their created !
   - User can see all requested food !
   - User can re-sell their sold out food !

### Tech

Botram uses a number of open source projects to work properly:


* [node.js](https://nodejs.org/en/) - evented I/O for the backend
* [Express](https://expressjs.com/) - fast node.js network app framework !
* [mongoose](http://mongoosejs.com/) - Awesome mongoose !
* [mongoDB](https://www.mongodb.com/) - Awesome mongoDB !
* coming soon...

### API services
| Method | Endpoint                  | Description        |
|--------|---------------------------|--------------------|
| PUT    | /users/profile            | User profile edit  |
| POST   | /users/login              | User login         |
| POST   | /users/logout             | User logout        |
| POST   | /users/food               | User add food      |
| GET    | /users/food/:food         | User search food   |
| POST   | /users/request            | User Req food      |
| GET    | /users/request            | Display request    |
| PUT    | /users/request            | Seller confirmation|
| GET    | /users/food               | display all food   |
| GET    | /users/favourite          | User favourite     |
| PUT    | /users/food/:food         | User updating food |

### User Stories

As a user:

- Yoma moved to jakarta for about 3 months ago, the first month everything was great !, a lot of food out there,
  but, the second month, he is bored of every food over here, so yoma decided to try some different food, that never been tasted before,
  and yoma interested on local recipe, that made by Bu Tini, who has cooked for him last month ago, yoma love that so much !, and yoma decided to find those kind of dishes, dishes that made by somebody who love cook, love to made they own recipe, and sell it online

As another user:

- Bu Tini love to cook, and made her own recipe, she love to do some experiment about how to make a good recipe, and knowing that online bussiness is a great opportunities, which is made something, and sell it online ! she want to share her food so that everybody can had a good time with food, she need something to share or sell the food online


### Todos

 - Create those API services
 - Create wireframing mobile version
