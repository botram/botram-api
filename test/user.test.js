const chai = require('chai')
const expect = require('chai').expect
const Request = require('supertest')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const app = require('../app.js')

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
    .get('/api/users')
    .end(function (err, res) {
      expect(res).to.have.status(200)
      expect(res).to.be.an('object')
      expect(res.body).to.have.length.above(0)
      done()
    })
  })

  it('result - Show one User', function (done) {

  })

  it('result - Update User', function (done) {

  })

  it('result - User Favourite', function (done) {

  })

  it('result - User Add rating', function (done) {

  })

  it('result - Delete user', function (done) {

  })
})
