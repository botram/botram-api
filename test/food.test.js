const chai = require('chai')
const expect = require('chai').expect

const chaiHttp = require('chai-http')
chai.use(chaiHttp)

const app = require('../app.js')
const token =`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsicmF0ZWQiOiJpbml0IiwiZmF2IjoiaW5pdCIsInJhdGluZyI6ImluaXQiLCJfX3YiOiJpbml0IiwicGljIjoiaW5pdCIsImVtYWlsIjoiaW5pdCIsIm5hbWUiOiJpbml0IiwiY3JlYXRlZEF0IjoiaW5pdCIsInVwZGF0ZWRBdCI6ImluaXQiLCJfaWQiOiJpbml0In0sInN0YXRlcyI6eyJpZ25vcmUiOnt9LCJkZWZhdWx0Ijp7fSwiaW5pdCI6eyJyYXRpbmciOnRydWUsIl9fdiI6dHJ1ZSwicmF0ZWQiOnRydWUsImZhdiI6dHJ1ZSwicGljIjp0cnVlLCJlbWFpbCI6dHJ1ZSwibmFtZSI6dHJ1ZSwiY3JlYXRlZEF0Ijp0cnVlLCJ1cGRhdGVkQXQiOnRydWUsIl9pZCI6dHJ1ZX0sIm1vZGlmeSI6e30sInJlcXVpcmUiOnt9fSwic3RhdGVOYW1lcyI6WyJyZXF1aXJlIiwibW9kaWZ5IiwiaW5pdCIsImRlZmF1bHQiLCJpZ25vcmUiXX0sImVtaXR0ZXIiOnsiZG9tYWluIjpudWxsLCJfZXZlbnRzIjp7fSwiX2V2ZW50c0NvdW50IjowLCJfbWF4TGlzdGVuZXJzIjowfX0sImlzTmV3IjpmYWxzZSwiX2RvYyI6eyJyYXRlZCI6W3sicmF0ZWRCeSI6bnVsbCwic2NvcmUiOiIyIn0seyJyYXRlZEJ5IjpudWxsLCJzY29yZSI6IjIifSx7InJhdGVkQnkiOiI1OGQxMDgyZDNhNWE2MzFiNGJkZmM0OGYiLCJzY29yZSI6IjIifV0sImZhdiI6W10sInJhdGluZyI6MiwiX192IjozLCJwaWMiOiJpcnNhbi5qcGciLCJlbWFpbCI6Imlyc2FuQHlhaG9vLmNvbSIsIm5hbWUiOiJpcnNhbiIsImNyZWF0ZWRBdCI6IjIwMTctMDMtMjFUMTE6MDE6MzUuNjY2WiIsInVwZGF0ZWRBdCI6IjIwMTctMDMtMjFUMTE6MjE6NDQuMTg2WiIsIl9pZCI6IjU4ZDEwODBmM2E1YTYzMWI0YmRmYzQ4ZSJ9LCJpYXQiOjE0OTAxNTgyNDN9.qFo44TNnVU358_x9tJ91Lmh3e4ZH24ivYXc9MARQKuA`


describe('Testing CRUD - food', function () {


  it('result - Post a food', function (done) {
    chai.request(app)
    .post('/api/users/food')
      .set('token', token)
      .send({
        food_title: "Nasi Bebek Sambel Ijo",
        food_price: "35000",
        food_qty  : 3,
        food_pic : "food.jpg",
        food_tags :"pedas enak gurih",
        food_desc : "deskripsi tentang sebuah makanan",
        status : 1,
        _userId : '58d1080f3a5a631b4bdfc48e'
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
    .set('token', token)
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
    .set('token', token)
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
    .set('token', token)
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
    .set('token', token)
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
    .get('/api/users/food/byfood/sapi')
    .set('token', token)
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
    .get('/api/users/food/byfood/something')
    .set('token', token)
      .end(function (err, res) {
        expect(res).to.have.status(200)
        expect(res).to.be.an('object')
        expect(res.body).to.have.property('success')
        done()
      })
  })

  it('result - Updating food ', function (done) {
    chai.request(app)
    .put('/api/users/food/edit')
    .set('token', token)
    .send({
      _foodId  : '58cf94cef868711482789cde',
      food_pic : 'food_pic.jpg'
    })
      .end(function (err, res) {
        expect(res).to.have.status(200)
        expect(res).to.be.an('object')
        expect(res.body).to.have.property('success')
        expect(res.body.success.food_pic).to.equal('food_pic.jpg')
        done()
      })
  })
})
