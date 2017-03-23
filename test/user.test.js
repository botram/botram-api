const chai = require('chai')
const expect = require('chai').expect
const Request = require('supertest')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const app = require('../app.js')

const token =`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicmF0ZWQiOiJpbml0IiwiZmF2IjoiaW5pdCIsInJhdGluZyI6ImluaXQiLCJfX3YiOiJpbml0IiwicGljIjoiaW5pdCIsImVtYWlsIjoiaW5pdCIsIm5hbWUiOiJpbml0IiwiY3JlYXRlZEF0IjoiaW5pdCIsInVwZGF0ZWRBdCI6ImluaXQiLCJfaWQiOiJpbml0In0sInN0YXRlcyI6eyJpZ25vcmUiOnt9LCJkZWZhdWx0Ijp7fSwiaW5pdCI6eyJyYXRpbmciOnRydWUsIl9fdiI6dHJ1ZSwicmF0ZWQiOnRydWUsImZhdiI6dHJ1ZSwicGljIjp0cnVlLCJlbWFpbCI6dHJ1ZSwibmFtZSI6dHJ1ZSwiY3JlYXRlZEF0Ijp0cnVlLCJ1cGRhdGVkQXQiOnRydWUsIl9pZCI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sImVtaXR0ZXIiOnsiZG9tYWluIjpudWxsLCJfZXZlbnRzIjp7fSwiX2V2ZW50c0NvdW50IjowLCJfbWF4TGlzdGVuZXJzIjowfX0sImlzTmV3IjpmYWxzZSwiX2RvYyI6eyJyYXRlZCI6W3sicmF0ZWRCeSI6bnVsbCwic2NvcmUiOiIyIn0seyJyYXRlZEJ5IjpudWxsLCJzY29yZSI6IjIifSx7InJhdGVkQnkiOiI1OGQxMDgyZDNhNWE2MzFiNGJkZmM0OGYiLCJzY29yZSI6IjIifV0sImZhdiI6W10sInJhdGluZyI6MiwiX192IjozLCJwaWMiOiJpcnNhbi5qcGciLCJlbWFpbCI6Imlyc2FuQHlhaG9vLmNvbSIsIm5hbWUiOiJpcnNhbiIsImNyZWF0ZWRBdCI6IjIwMTctMDMtMjFUMTE6MDE6MzUuNjY2WiIsInVwZGF0ZWRBdCI6IjIwMTctMDMtMjFUMTE6MjE6NDQuMTg2WiIsIl9pZCI6IjU4ZDEwODBmM2E1YTYzMWI0YmRmYzQ4ZSJ9LCJpYXQiOjE0OTAxNTgyNDN9.qFo44TNnVU358_x9tJ91Lmh3e4ZH24ivYXc9MARQKuA`


describe('Testing CRUD - User', function () {

  it('result - Create a user', function (done) {
    let dummy = {
      name: 'budi',
      email: 'budi@gmail.com',
      pic: 'budi.png',
      id_fb : "12345"
    }
    chai.request(app)
      .post('/api/users')
      .send({
        name: 'budi',
    			email: 'budi@gmail.com',
        pic: 'budi.png',
        id_fb : "12345"
      })
      .end(function (err, res) {

        expect(res).to.have.status(200)
        expect(res).to.be.an('object')
        expect(res.body.token).to.be.a('string')
        expect(res.body.userId).to.be.a('string')
        done()
      })
  })

  it('result - Get all user', function (done) {
    chai.request(app)
    .get('/api/users/')
    .set('token',token)
    .end(function (err, res) {
      expect(res).to.have.status(200)
      expect(res).to.be.an('object')
      expect(res.body).to.have.length.above(0)
      done()
    })
  })

  it('result - Show one User', function (done) {

    chai.request(app)
      .post('/api/users')
      .send({
        name: 'budi',
    			email: 'budi@gmail.com',
        pic: 'budi.png',
        id_fb : "12345"
      })
      .end(function (err, res) {
        var userId = res.body.userId
        chai.request(app)
        .get(`/api/users/${userId}`)
        .set('token',token)
        .end(function (err, res) {
          expect(res).to.have.status(200)
          expect(res).to.be.an('object')
          done()
        })
      })


  })


  it('result - Update User', function (done) {

    let dummyUser = {
      name: 'Bella',
      email: 'Bella@gmail.com',
      pic: 'Bella.png',
      id_fb : "bnxv",
    }
    let dummyData = {
      phone:"0987123445",
      address:"Jalan Kemang raya, deket rumah gana",
      city:"Jakarta",
    }
    chai.request(app)
      .post('/api/users')
      .send(dummyUser)
      .end(function (err, res) {

        let id = res.body.userId

        chai.request(app)
          .put(`/api/users/${id}`)
          .set('token',token)
          .send(dummyData)
          .end(function (err, res) {
            expect(res).to.have.status(200)
            expect(res).to.be.an('object')
            expect(res.body.city).to.equal(dummyData.city)
            expect(res.body.phone).to.equal(dummyData.phone)
            expect(res.body.address).to.equal(dummyData.address)
            done()
          })
      })
  })

  it('result - User Favourite added by Search', function (done) {
    let dummyUser = {
      name: 'Bella',
      email: 'Bella@gmail.com',
      pic: 'Bella.png',
      id_fb : "bnxv",
    }
    let dummyData = {
      search : "nasi goreng"
    }
    chai.request(app)
      .post('/api/users')
      .send(dummyUser)
      .end(function (err, res) {

        let id = res.body.userId

        chai.request(app)
          .put(`/api/users/${id}/favbysearch`)
          .set('token',token)
          .send(dummyData)
          .end(function (err, res) {
            expect(res).to.have.status(200)
            expect(res).to.be.an('object')
            expect(res.body.fav).to.deep.equal(dummyData.search.split(" "))
            done()
          })
      })
  })

  it('result - User Add rating', function (done) {


      let dummyUser = {
        name: 'Bella',
        email: 'Bella@gmail.com',
        pic: 'Bella.png',
        id_fb : "bnxv",
      }

      let dummyUser_2 = {
        name: 'miko',
        email: 'miko@gmail.com',
        pic: 'miko.png',
        id_fb : "jkniv",
      }


      chai.request(app)
        .post('/api/users')
        .send(dummyUser)
        .end(function (err, res) {

          const userA = res.body.userId

          chai.request(app)
          .post('/api/users')
          .send(dummyUser_2)
            .end(function (err, res) {
                const userB = res.body.userId

                let dummyData = {
                  ratedBy: userB,
                  score: 3
                }

                chai.request(app)
                .put(`/api/users/${userA}/addrating`)
                .set('token',token)
                .send(dummyData)
                .end(function(err,res){
                  expect(res).to.have.status(200)
                  expect(res).to.be.an('object')
                  expect(res.body.rated).to.have.length.above(0)
                  done()
                })
            })
        })
  })

})

describe('Testing CRUD - User without token', function () {

  it('result - Get all user without token', function (done) {
    chai.request(app)
    .get('/api/users/')
    .end(function (err, res) {
      expect(res).to.have.status(200)
      expect(res).to.be.an('object')
      expect(res.text).to.equal('Unauthorized')
      done()
    })
  })

  it('result - Show one User without token', function (done) {
    chai.request(app)
    .get('/api/users/58d1080f3a5a631b4bdfc48e')
    .end(function (err, res) {
      expect(res).to.have.status(200)
      expect(res).to.be.an('object')
      expect(res.text).to.equal('Unauthorized')
      done()
    })
  })


it('result - Add FavbySearch without token', function (done) {
  let dummyData = {
    ratedBy: "asdas",
    score: 3
  }
  chai.request(app)
    .put(`/api/users/123213kjhgg/favbysearch`)
    .send(dummyData)
    .end(function (err, res) {
      expect(res).to.have.status(200)
      expect(res).to.be.an('object')
      expect(res.text).to.equal('Unauthorized')
      done()
    })
  })

it('result - Add Rating without token', function (done) {

  let dummyData = {
    ratedBy: "asdas",
    score: 3
  }
  chai.request(app)
  .put(`/api/users/asd1234124/addrating`)
  .send(dummyData)
  .end(function(err,res){
    expect(res).to.have.status(200)
    expect(res).to.be.an('object')
    expect(res.text).to.equal('Unauthorized')
    done()
  })
})

})
