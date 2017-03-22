const chai = require('chai')
const expect = require('chai').expect
const Request = require('supertest')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const app = require('../app.js')


describe('Testing CRUD - Request', function () {

it('result - Post a request', function (done) {
  chai.request(app)
    .post('/api/users/request')
    .send({
      _foodId: '58d0d986362503157eb7a4fc',
      request_notes: 'Irsan testing request again !',
      request_qty: 1,
      status: 0
    })
    .end(function (err, res) {
      expect(res).to.have.status(200)
      expect(res).to.be.an('object')
      done()
    })
  })


it('result - Post a request, request_qty diisi dengan String', function (done) {
  chai.request(app)
    .post('/api/users/request')
    .send({
      _foodId: '58d0d986362503157eb7a4fc',
      request_notes: 'testing request something',
      request_qty: 'somestring',
      status: 0
    })
    .end(function (err, res) {
      expect(res).to.have.status(200)
      expect(res).to.be.an('object')
      expect(res.body.err).to.be.an('object')
      expect(res.body.err.message).to.equal('Request validation failed')
      done()
    })
  })


it('result - Post a request, request_qty tidak diisi', function (done) {
  chai.request(app)
    .post('/api/users/request')
    .send({
      _foodId: '58d0d986362503157eb7a4fc',
      request_notes: 'testing request something',
      request_qty: '',
      status: 0
    })
    .end(function (err, res) {
      expect(res).to.have.status(200)
      expect(res).to.be.an('object')
      expect(res.body.err).to.be.an('object')
      expect(res.body.err.message).to.equal('Request validation failed')
      done()
    })
  })

// it('result - put a request, seller menerima request dari user [syaratnya, harus post request baru untuk sebuah makanan, lalu ambil request idny, dan put disini]', function (done) {
//   chai.request(app)
//     .put('/api/users/request')
//     .send({
//       _requestId : "",
//     })
//     .end(function (err, res) {
//
//
//       expect(res).to.have.status(200);
//       expect(res).to.be.an('object');
//       expect(res.body).to.have.property("request")
//       expect(res.body).to.have.property("food")
//       expect(res.body.request.status).to.equal(1)
//
//       done()
//     })
// })



it('result - Read all request', function (done) {
  chai.request(app)
    .get('/api/users/request')
    .end(function (err, res) {
      expect(res).to.have.status(200)
      expect(res).to.be.an('object')
      done()
    })
  })

  it('result - Seller reject request', function (done) {
    
    })
})
