# Botram-api (API services)

![botram.png](botram.png)

Botram-api is an API service for mobile app called "Botram", developed by :

  - [sanbastia](https://github.com/sanBastia)
  - [qblol](https://github.com/qblol)
  - [radityaarya](https://github.com/radityaarya)
  - [axiomaswn](https://github.com/axiomaswn)


# NEW FEATURE !
`# wednesday 21/03/2017`
 wiring those API to _MOBILE APP_


`# tuesday 21/03/2017`
  these are feature from botram API
 - User can have a favourite food !
 - User can search other user food list !

`# Monday 20/03/2017`
these are feature from botram API
   - User can post their food ! with the picture !
   - User can Request a food they wanted !
   - User can Accept / non - Accept request from another user !
   - User can see all the food their created !
   - User can see all requested food !
   - User can re-sell their sold out food !
   - User can search food !


### Tech

Botram uses a number of open source projects to work properly:


* [node.js](https://nodejs.org/en/) - evented I/O for the backend
* [Express](https://expressjs.com/) - fast node.js network app framework !
* [mongoose](http://mongoosejs.com/) - Awesome mongoose !
* [mongoDB](https://www.mongodb.com/) - Awesome mongoDB !
* [React-native](https://facebook.github.io/react-native/) - Awesome future technology by [facebook](http://facebook.com) !


### API services
| Method | Endpoint                     | Description                    |
|--------|------------------------------|--------------------------------|
| GET    | api/users                    | Users list                     |
| GET    | api/users/:id                | show a user                    |
| POST   | api/users                    | Create a User / login a user   |
| PUT    | api/users/:id                | User update Profile            |
| PUT    | api/users/:id/favbysearch    | User add favourite tags        |
| GET    | api/users/:id/favourite      | User Display his/her own fav   |
| PUT    | api/users/:id/addrating      | User add Rating                |
| DELETE | api/users/:id                | User Delete                    |
| POST   | api/users/food               | User add food                  |
| PUT    | api/users/food               | User updating food             |
| GET    | api/users/food/byuser/:iduser| User search user making food   |
| GET    | api/users/food/byfood/:food  | User search food               |
| GET    | api/users/food               | display all food               |
| PUT    | api/users/food/edit          | User editing picture of food   |
| POST   | api/users/request            | User Req food                  |
| GET    | api/users/request            | Display request                |
| PUT    | api/users/request            | Seller confirmation            |
| PUT    | api/users/request/reject     | Seller reject                  |


### User Stories

As a user:

- Yoma moved to jakarta for about 3 months ago, the first month everything was great !, a lot of food out there,
  but, the second month, he is bored of every food over here, so yoma decided to try some different food, that never been tasted before,
  and yoma interested on local recipe, that made by Bu Tini, who has cooked for him last month ago, yoma love that so much !, and yoma decided to find those kind of dishes, dishes that made by somebody who love cook, love to made they own recipe, and sell it online

As another user:

- Bu Tini love to cook, and made her own recipe, she love to do some experiment about how to make a good recipe, and knowing that online bussiness is a great opportunities, which is made something, and sell it online ! she want to share her food so that everybody can had a good time with food, she need something to share or sell the food online
