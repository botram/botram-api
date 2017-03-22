const chai = require('chai')
const expect = require('chai').expect
const Request = require('supertest')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const app = require('../app.js')

describe('Testing CRUD - food', function () {
  // it('result - Post a food', function (done) {
  //   chai.request(app)
  //     .post('/api/users/food')
  //     .send({
  //       food_title: "Nasi Bebek Sambel Ijo",
  //       food_price: "35000",
  //       food_qty  : 3,
  //       food_pic : "food.jpg",
  //       food_tags :"pedas enak gurih",
  //       food_desc : "deskripsi tentang sebuah makanan",
  //       status : 1
  //     })
  //     .end(function (err, res) {
  //
  //       expect(res).to.have.status(200);
  //       expect(res).to.be.an('object');
  //
  //       done()
  //     })
  // })

  it('result - Post a food, but food_pic is empty', function (done) {
    chai.request(app)
      .post('/api/users/food')
      .send({
        food_title: 'Nasi Bebek Sambel Ijo',
        food_price: '35000',
        food_qty: 3,
        food_pic: '',
        food_tags: 'pedas enak gurih',
        food_desc: 'deskripsi tentang sebuah makanan',
        status: 1
      })
      .end(function (err, res) {
        expect(res).to.have.status(200)
        expect(res).to.be.an('object')
        expect(res.body.success).to.have.property('food_title')
        expect(res.body.success).to.have.property('food_price')
        expect(res.body.success).to.have.property('food_qty')
        expect(res.body.success).to.have.property('food_tags')
        expect(res.body.success).to.have.property('food_desc')
        expect(res.body.success).to.have.property('food_qty')
        expect(res.body.success).to.have.property('status')

        done()
      })
  })

  it('result - Post a food, but food_title is empty', function (done) {
    chai.request(app)
      .post('/api/users/food')
      .send({
        food_title: '',
        food_price: '35000',
        food_qty: 3,
        food_pic: 'food_pic.jpg',
        food_tags: 'pedas enak gurih',
        food_desc: 'deskripsi tentang sebuah makanan',
        status: 1
      })
      .end(function (err, res) {
        expect(res).to.have.status(200)
        expect(res).to.be.an('object')
        expect(res.body.err).to.be.an('object')
        expect(res.body.err.message).to.equal('Food validation failed')

        done()
      })
  })

  it('result - Post a food, but food_price is string', function (done) {
    chai.request(app)
      .post('/api/users/food')
      .send({
        food_title: 'food title',
        food_price: 'some String',
        food_qty: 3,
        food_pic: 'food_pic.jpg',
        food_tags: 'pedas enak gurih',
        food_desc: 'deskripsi tentang sebuah makanan',
        status: 1
      })
      .end(function (err, res) {
        expect(res).to.have.status(200)
        expect(res).to.be.an('object')
        expect(res.body.err).to.be.an('object')
        expect(res.body.err.message).to.equal('Food validation failed')

        done()
      })
  })

  it('result - Get all food', function (done) {
    chai.request(app)


      .get('/api/users/food')

      .end(function (err, res) {
        expect(res).to.have.status(200)
        expect(res).to.be.an('object')
        expect(res.body).to.have.property('success')
        expect(res.body.success).to.have.length.above(0)
        done()
      })
  })

  it('result - Search food with tag "sapi"', function (done) {
    chai.request(app)
      .post('/users/food')
      .send({
        food_title: 'food title',
        food_price: 'some String',
        food_qty: 3,
        food_pic: 'food_pic.jpg',
        food_tags: 'pedas enak gurih',
        food_desc: 'deskripsi tentang sebuah makanan',
        status: 1
      })
      .end(function (err, res) {
        expect(res).to.have.status(200)
        expect(res).to.be.an('object')
        expect(res.body.err).to.be.an('object')
        expect(res.body.err.message).to.equal('Food validation failed')


        done()
      })
    chai.request(app)

      .get('/api/users/food/sapi')

      .end(function (err, res) {
        expect(res).to.have.status(200)
        expect(res).to.be.an('object')
        expect(res.body).to.have.property('success')
        expect(res.body.success).to.have.length.above(0)
        done()
      })
  })

  it('result - Searching food but not found', function (done) {
    chai.request(app)

      .get('/api/users/food/something')

      .end(function (err, res) {
        // expect(res).to.have.status(200)
        // expect(res).to.be.an('object')
        // expect(res.body).to.have.property('success')
        done()
      })
  })
})

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
})

describe('Testing CRUD - User', function () {
  it('result - Create a user', function (done) {
    let dummy = {
      name: 'budi',
      email: 'budi@gmail.com',
      pic: 'budi.png'
    }
    chai.request(app)
      .post('/users')
      .send({
        name: 'budi',
    			email: 'budi@gmail.com',
        pic: 'budi.png'
      })
      .end(function (err, res) {
        expect(res).to.have.status(200)
        expect(res).to.be.an('object')
        expect(res.body).to.be.a('string')

        done()
      })
  })

  it('result - Get all user', function (done) {
    chai.request(app)
    .get('/users')
    .end(function (err, res) {
      expect(res).to.have.status(200)
      expect(res).to.be.an('object')
      expect(res.body).to.have.length.above(0)
      done()
    })
  })
})
