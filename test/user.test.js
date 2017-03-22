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
    .set('token',token)
    .get('/api/users/')
    .end(function (err, res) {
      expect(res).to.have.status(200)
      expect(res).to.be.an('object')
      expect(res.body).to.have.length.above(0)
      done()
    })
  })

  it('result - Show one User', function (done) {
    chai.request(app)
    .set('token',token)
    .get('/api/users/58d1080f3a5a631b4bdfc48e')
    .end(function (err, res) {
      expect(res).to.have.status(200)
      expect(res).to.be.an('object')
      done()
    })
  })

  it('result - Update User', function (done) {


      chai.request(app)
      .set('token',token)
        .put('/api/users/58d228f33f3a793f0433546f')
        .send({
          phone:,
          address:,
          city:,
        })
        .end(function (err, res) {

          expect(res).to.have.status(200)
          expect(res).to.be.an('object')
          expect(res.body.token).to.be.a('string')
          expect(res.body.userId).to.be.a('string')
          done()
        })
  })

  it('result - User Favourite', function (done) {

  })

  it('result - User Add rating', function (done) {

  })

  it('result - Delete user', function (done) {

  })
})
