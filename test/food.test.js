const chai = require('chai')
const expect = require('chai').expect
const Request = require('supertest')
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const app = require('../app.js')

describe('Testing CRUD - food', function () {
  it('result - Post a food', function (done) {
    chai.request(app)
      .post('/api/users/food')
      .send({
        food_title: "Nasi Bebek Sambel Ijo",
        food_price: "35000",
        food_qty  : 3,
        food_pic : "food.jpg",
        food_tags :"pedas enak gurih",
        food_desc : "deskripsi tentang sebuah makanan",
        status : 1
      })
      .end(function (err, res) {

        expect(res).to.have.status(200);
        expect(res).to.be.an('object');

        done()
      })
  })

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
        expect(res).to.have.status(200)
        expect(res).to.be.an('object')
        expect(res.body).to.have.property('success')
        done()
      })
  })

  it('result - Updating food ', function (done) {

  })
})
