const chai = require('chai')
const expect = require('chai').expect
const Request = require('supertest')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const app = require('../app.js')
const token =`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicmF0ZWQiOiJpbml0IiwiZmF2IjoiaW5pdCIsInJhdGluZyI6ImluaXQiLCJfX3YiOiJpbml0IiwicGljIjoiaW5pdCIsImVtYWlsIjoiaW5pdCIsIm5hbWUiOiJpbml0IiwiY3JlYXRlZEF0IjoiaW5pdCIsInVwZGF0ZWRBdCI6ImluaXQiLCJfaWQiOiJpbml0In0sInN0YXRlcyI6eyJpZ25vcmUiOnt9LCJkZWZhdWx0Ijp7fSwiaW5pdCI6eyJyYXRpbmciOnRydWUsIl9fdiI6dHJ1ZSwicmF0ZWQiOnRydWUsImZhdiI6dHJ1ZSwicGljIjp0cnVlLCJlbWFpbCI6dHJ1ZSwibmFtZSI6dHJ1ZSwiY3JlYXRlZEF0Ijp0cnVlLCJ1cGRhdGVkQXQiOnRydWUsIl9pZCI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sImVtaXR0ZXIiOnsiZG9tYWluIjpudWxsLCJfZXZlbnRzIjp7fSwiX2V2ZW50c0NvdW50IjowLCJfbWF4TGlzdGVuZXJzIjowfX0sImlzTmV3IjpmYWxzZSwiX2RvYyI6eyJyYXRlZCI6W3sicmF0ZWRCeSI6bnVsbCwic2NvcmUiOiIyIn0seyJyYXRlZEJ5IjpudWxsLCJzY29yZSI6IjIifSx7InJhdGVkQnkiOiI1OGQxMDgyZDNhNWE2MzFiNGJkZmM0OGYiLCJzY29yZSI6IjIifV0sImZhdiI6W10sInJhdGluZyI6MiwiX192IjozLCJwaWMiOiJpcnNhbi5qcGciLCJlbWFpbCI6Imlyc2FuQHlhaG9vLmNvbSIsIm5hbWUiOiJpcnNhbiIsImNyZWF0ZWRBdCI6IjIwMTctMDMtMjFUMTE6MDE6MzUuNjY2WiIsInVwZGF0ZWRBdCI6IjIwMTctMDMtMjFUMTE6MjE6NDQuMTg2WiIsIl9pZCI6IjU4ZDEwODBmM2E1YTYzMWI0YmRmYzQ4ZSJ9LCJpYXQiOjE0OTAxNTgyNDN9.qFo44TNnVU358_x9tJ91Lmh3e4ZH24ivYXc9MARQKuA`


describe('Testing CRUD - Request', function () {

it('result - Post a request', function (done) {
  chai.request(app)
    .post('/api/users/request')
    .set('token', token)
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
    .set('token', token)
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
    .set('token', token)
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
      // .set('token', token)
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
    .set('token', token)
    .end(function (err, res) {
      expect(res).to.have.status(200)
      expect(res).to.be.an('object')
      done()
    })
  })

    it('result - Seller reject request', function (done) {
      chai.request(app)
        .put('/api/users/request')
        .set('token', token)
        .send({
          _requestId : ''
        })
        .end(function (err, res) {
          expect(res).to.have.status(200)
          expect(res).to.be.an('object')
          done()
        })
    })
})
