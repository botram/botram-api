var userModel = require('../models/user');
var foodModel = require('../models/food')
const jwt = require('jsonwebtoken');

/**
 * userController.js
 *
 * @description :: Server-side logic for managing users.
 */
module.exports = {

    /**
     * userController.list()
     */
    list: function (req, res) {
        userModel.find(function (err, users) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user.',
                    error: err
                });
            }
            return res.json(users);
        });
    },

    /**
     * userController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        userModel.findOne({_id: id}, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user.',
                    error: err
                });
            }
            if (!user) {
                return res.status(404).json({
                    message: 'No such user'
                });
            }
            return res.json(user);
        });
    },

    /**
     * userController.create()
     */

    create: function (req, res) {

        var userData = {    			name : req.body.name,    			email : req.body.email,          pic : req.body.pic,
          id_fb: req.body.id_fb,          city : "",          address :"",          phone : ""        };
        userModel.findOne(userData, function(err, user) {
          if (err) {
            return res.status(500).json({
                message: 'Error when getting user',
                error: err
            });
          } else if(user) {
            return res.status(200).json({
              token : jwt.sign(user, 'secret'),
              userId : user._id
            })
          } else if(!user) {
            const newUser = userModel.create(userData).then(data => {
              return res.status(200).json({
                token : jwt.sign(data, 'secret'),
                userId : data._id
              })
            })

          }
        })
        // userModel.findOrCreate(user, function(err, user, created) {
        //   if (err) {
        //       return res.status(500).json({
        //           message: 'Error when getting user',
        //           error: err
        //       });
        //   }
        //   if (!created || created) {
        //       return res.status(200).json({
        //         token : jwt.sign(user, 'secret'),
        //         userId : user._id
        //       })
        //   }
        //
        // })
    },

    /**
     * userController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        userModel.findOne({_id: id}, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user',
                    error: err
                });
            }
            if (!user) {
                return res.status(404).json({
                    message: 'No such user'
                });
            }

      			user.phone === req.body.phone ? user.phone : user.phone = req.body.phone;      			user.address === req.body.address ? user.address : user.address = req.body.address;      			user.city === req.body.city ? user.city : user.city = req.body.city;
            user.save(function (err, user) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating user.',
                        error: err
                    });
                }

                return res.json(user);
            });
        });
    },

    /**
     * userController.favBySearch()
     */
    favBySearch: function (req, res) {
        var id = req.params.id;
        userModel.findOne({_id: id}, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user',
                    error: err
                });
            }
            if (!user) {
                return res.status(404).json({
                    message: 'No such user'
                });
            }

            req.body.search.split(' ').map(item => {
              if(user.fav.indexOf(item.toLowerCase()) === -1) {
                user.fav.push(item.toLowerCase())
              }
            })

            user.save(function (err, user) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating user.',
                        error: err
                    });
                }

                return res.json(user);
            });
        });
    },

    /**
     * userController.favBySearch()
     */
    addRating: function (req, res) {
        var data = {
          _id : req.params.id
        };

        var rating = {
          ratedBy: req.body.ratedBy,
          score: req.body.score
        }
        userModel.findOne(data, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting user',
                    error: err
                });
            }
            if (!user) {
                return res.status(404).json({
                    message: 'No such user'
                });
            }
            var arrTemp = []
            user.rated.map(item => arrTemp.push(item.ratedBy))

            if(user.rated.length === 0){
              user.rated.push(rating)
            } else if(arrTemp.indexOf(rating.ratedBy) == -1 ){
              user.rated.push(rating)
            }

            var total = 0
            user.rated.forEach((item)=>{
              total += parseInt(item.score)
            })

            var result = total / user.rated.length
            user.rating = result
            user.save(function (err, user) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating user.',
                        error: err
                    });
                }
                return res.json(user);
            });
        });
    },

    /**
     * userController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        userModel.findByIdAndRemove(id, function (err, user) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the user.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
